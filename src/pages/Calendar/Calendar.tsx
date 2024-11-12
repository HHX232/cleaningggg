import React from "react";
import { checkDateIsEqual, checkIsToday } from "../../utils/helpers/date";
import  useCalendar  from "../../hooks/useCalendar";
import styles from "./Calendar.module.css"; // Импортируйте CSS-модуль

interface CalendarProps {
  locale?: string;
  selectedDate: Date;
  selectDate: (date: Date) => void;
  firstWeekDayNumber?: number;
}

 const Calendar: React.FC<CalendarProps> = ({
  locale = "default",
  selectedDate: date,
  selectDate,
  firstWeekDayNumber = 2,
}) => {
  const { functions, state } = useCalendar({
    locale,
    selectedDate: date,
    firstWeekDayNumber,
  });

  // Получаем текущую дату и дату конца месяца
  const today = new Date();
  const endOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0);

  // Функция для проверки, доступен ли день для выбора
  const isDateSelectable = (day: Date) => {
    if (day.getMonth() < today.getMonth()) return false;
    return day.getDate() >= today.getDate() && day <= endOfMonth;
  };

  return (
    <div onClick={(e)=>{
      e.stopPropagation();
    }} className={styles.calendar}>
      <div className={styles.calendar__header}>
        {state.mode === "days" && (
          <div
            aria-hidden
            className={styles.calendar__header__arrow__left}
            onClick={() => functions.onClickYearArrow("left")}
          />
        )}
        <div
          aria-hidden
          className={styles.calendar__header__arrow__left}
          onClick={() => functions.onClickArrow("left")}
        />
        {state.mode === "days" && (
          <div
            className={styles.calendar__header__title}
            aria-hidden
            onClick={() => functions.setMode("monthes")}
          >
            {state.selectedYear}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {state.monthesNames[state.selectedMonth.monthIndex].month}
          </div>
        )}
        {state.mode === "monthes" && (
          <div
            className={styles.calendar__header__title}
            aria-hidden
            onClick={() => functions.setMode("years")}
          >
            {state.selectedYear}
          </div>
        )}
        {state.mode === "years" && (
          <div
            className={styles.calendar__header__title}
            onClick={() => functions.setMode("days")}
          >
            {state.selectedYearsInterval[0]} -{" "}
            {
              state.selectedYearsInterval[
                state.selectedYearsInterval.length - 1
              ]
            }
          </div>
        )}
        <div
          aria-hidden
          className={styles.calendar__header__arrow__right}
          onClick={() => functions.onClickArrow("right")}
        />
        {state.mode === "days" && (
          <div
            aria-hidden
            className={styles.calendar__header__arrow__right}
            onClick={() => functions.onClickYearArrow("right")}
          />
        )}
      </div>
      <div className={styles.calendar__body}>
        {state.mode === "days" && (
          <>
            <div className={styles.calendar__week__names}>
              {state.weekDaysNames.map((weekDaysName) => (
                <div key={weekDaysName.dayShort}>{weekDaysName.dayShort}</div>
              ))}
            </div>
            <div className={styles.calendar__days}>
              {state.calendarDays.map((day) => {
                const isToday = checkIsToday(day.date);
                const isSelectedDay = checkDateIsEqual(
                  day.date,
                  state.selectedDay.date
                );
                const isAdditionalDay =
                  day.monthIndex !== state.selectedMonth.monthIndex ||
                  day.dayNumber < today.getDate() ||
                  day.monthNumber !== today.getMonth() + 1 ||
                  day.year !== today.getFullYear();
                const isSelectable = isDateSelectable(day.date); // Проверка доступности

                return (
                  <div
                    key={`${day.dayNumber}-${day.monthIndex}`}
                    aria-hidden
                    onClick={() => {
                      if (isSelectable) {
                        // Если день доступен, выбираем его
                        functions.setSelectedDay(day);
                        selectDate(day.date);
                      }
                    }}
                    className={[
                      styles.calendar__day,
                      isToday ? styles.calendar__today__item : "",
                      isSelectedDay ? styles.calendar__selected__item : "",
                      isAdditionalDay ? styles.calendar__additional__day : "",
                      !isSelectable ? styles.calendar__day__disabled : "", // Добавляем класс для недоступных дней
                    ].join(" ")}
                  >
                    {day.dayNumber}
                  </div>
                );
              })}
            </div>
          </>
        )}
        {state.mode === "monthes" && (
          <div className={styles.calendar__pick__items__container}>
            {state.monthesNames.map((monthesName) => {
              const isCurrentMonth =
                new Date().getMonth() === monthesName.monthIndex &&
                state.selectedYear === new Date().getFullYear();
              const isSelectedMonth =
                monthesName.monthIndex === state.selectedMonth.monthIndex;

              return (
                <div
                  key={monthesName.month}
                  aria-hidden
                  onClick={() => {
                    functions.setSelectedMonthByIndex(monthesName.monthIndex);
                    functions.setMode("days");
                  }}
                  className={[
                    styles.calendar__pick__item,
                    isSelectedMonth ? styles.calendar__selected__item : "",
                    isCurrentMonth ? styles.calendar__today__item : "",
                  ].join(" ")}
                >
                  {monthesName.monthShort}
                </div>
              );
            })}
          </div>
        )}

        {state.mode === "years" && (
          <div className={styles.calendar__pick__items__container}>
            <div className={styles.calendar__unchoosable__year}>
              {state.selectedYearsInterval[0] - 1}
            </div>
            {state.selectedYearsInterval.map((year) => {
              const isCurrentYear = new Date().getFullYear() === year;
              const isSelectedYear = year === state.selectedYear;

              return (
                <div
                  key={year}
                  aria-hidden
                  onClick={() => {
                    functions.setSelectedYear(year);
                    functions.setMode("monthes");
                  }}
                  className={[
                    styles.calendar__pick__item,
                    isCurrentYear ? styles.calendar__today__item : "",
                    isSelectedYear ? styles.calendar__selected__item : "",
                  ].join(" ")}
                >
                  {year}
                </div>
              );
            })}
            <div className={styles.calendar__unchoosable__year}>
              {state.selectedYearsInterval[
                state.selectedYearsInterval.length - 1
              ] + 1}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Calendar