import  {FormInputProps}  from "../../../../FormInputProps";
import classes from "./FormInput.module.css";
import  Calendar  from "@/pages/Calendar/Calendar";
import { useEffect, useState } from "react";

function formatDateToInputValue(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-based
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function FormInput(props: FormInputProps) {
  const [isCalendarShow, setIsCalendarShow] = useState(false);
  const [selectedDate, setSelectedDay] = useState(new Date());

  useEffect(() => {
    setSelectedDay(selectedDate);
    
    // Проверяем, определен ли setterdate перед вызовом
    if (props.setterdate) {
      props.setterdate(selectedDate);
    } else {
      console.warn("setterdate is undefined");
    }

    console.log("selectedDate", selectedDate);
  }, [selectedDate]);

  if (props.type === "date") {
    return (
      <div onClick={() => setIsCalendarShow((v) => !v)} className={classes.FormInput}>
        <label htmlFor={`form-input-${props.name}`}>{props.label}</label>
        <div
          className={classes.input__icon}
         
        >
          <svg
            width="800px"
            height="800px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 9H21M17 13.0014L7 13M10.3333 17.0005L7 17M7 3V5M17 3V5M6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4802 21 18.9201 21 17.8V8.2C21 7.07989 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21Z"
              stroke="#000000"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <input
          id={`form-input-${props.name}`}
          type="date"
          placeholder={props.placeholder}
          required={props.required}
          value={formatDateToInputValue(selectedDate)} // Используем форматированную дату
          onClick={() => setIsCalendarShow((v) => !v)} // Открываем календарь при клике
          readOnly // Делаем поле только для чтения, чтобы предотвратить стандартный ввод
        />
        {isCalendarShow && (
          <div className={classes.calendar__container}>
            <Calendar
              selectedDate={selectedDate}
              selectDate={(date) => {
                setSelectedDay(date);
                setIsCalendarShow(false); // Закрываем календарь после выбора даты
              }}
              firstWeekDayNumber={1}
              locale="en"
             
            />
          </div>
        )}
      </div>
    );
  }

  return (
    <div className={classes.FormInput}>
      <label htmlFor={`form-input-${props.name}`}>{props.label}</label>
      <input
        id={`form-input-${props.name}`}
        type={props.type}
        placeholder={props.placeholder}
        required={props.required}
      />
    </div>
  );
}

export default FormInput;
