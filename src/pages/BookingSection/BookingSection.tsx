import { useEffect, useState } from "react";
import classes from "./BookingSection.module.css";
import AdressForm from "./components/AdressForm/AdressForm";
import BookingForm from "./components/BookingForm/BookingForm";
import BookingSummary from "./components/BookingSummary/BookingSummary";
import FormInput from "./components/FormInput/FormInput";
import FormSatisfaction from "./components/FormSatisfaction/FormSatisfaction";
import HowLongForm from "./components/HowLongForm/HowLongForm";
import HowOftenForm from "./HowOftenForm/HowOftenForm";


const SubmitButton = ()=>{

  return (
    <button type="submit" className={classes.submitButton}>Send</button>
  );
}
function formatDate(dateString:any) {
  // Преобразуем строку в объект Date
  const date = new Date(dateString);

  // Получаем день, месяц и год
  const day = String(date.getDate()).padStart(2, '0'); // Добавляем ведущий ноль
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Месяцы начинаются с 0
  const year = date.getFullYear();

  // Форматируем дату в нужный формат
  return `${day}/${month}/${year}`;
}

function BookingSection() {

const [howOld, setHowOld] = useState<any>()
const [discount, setDiscount] = useState<any>()
const [howRepeate, setHowRepeate] = useState<any>()
const [cleanData, setCleanData] = useState<any>()


const howOldIdForRight = howOld ? howOld.id : ""
const howRepeateIdForRight = howRepeate ? howRepeate.label.replace(" - 25%", "") : "";
const salesTaxForRight = howRepeate ? howRepeate.id !== 1 ? "25" : "0" : ""

const dataForRight = formatDate(cleanData)

useEffect(()=>{
console.log("dataForRight", dataForRight)
},[cleanData,dataForRight])


  return (
    <div className={classes.BookingSection}>
      <div className={classes.BookingSection__container}>
        <div className={classes.BookingSection__title}>
          <h2>Let's Book Your House Cleaning!</h2>
        </div>
        <div className={classes.BookingSection__subtitle}>
          <p>
            Every cleaning comes backed by our no-questions-asked satisfaction
            guarantee.
          </p>
        </div>
        <form action="/api/send" className={classes.BookingSection__form__container}>
          <div className={classes.BookingSection__form__left}>
            <div className={classes.form__left__title}>
              <h2>WHO YOU ARE</h2>
            </div>
            <br />
            <div className={classes.form__left__subtitle}>
              <p>
                This information will be used to contact you about your service.
                Please be sure to use an email address that you check regularly
                because we will email you after booking.
              </p>
            </div>
            <br />
            <BookingForm />
            <div className={`${classes.arrow} ${classes.arrow_first}`}>
              <svg
                width="16"
                height="41"
                viewBox="0 0 16 41"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.29289 40.7071C7.68342 41.0976 8.31658 41.0976 8.70711 40.7071L15.0711 34.3431C15.4616 33.9526 15.4616 33.3195 15.0711 32.9289C14.6805 32.5384 14.0474 32.5384 13.6569 32.9289L8 38.5858L2.34314 32.9289C1.95262 32.5384 1.31946 32.5384 0.928931 32.9289C0.538406 33.3195 0.538406 33.9526 0.928931 34.3431L7.29289 40.7071ZM7 5C7 5.55228 7.44771 6 8 6C8.55228 6 9 5.55228 9 5L7 5ZM9 15C9 14.4477 8.55228 14 8 14C7.44771 14 7 14.4477 7 15L9 15ZM7 25C7 25.5523 7.44771 26 8 26C8.55228 26 9 25.5523 9 25L7 25ZM9 35C9 34.4477 8.55228 34 8 34C7.44771 34 7 34.4477 7 35L9 35ZM7 -4.37114e-08L7 5L9 5L9 4.37114e-08L7 -4.37114e-08ZM7 15L7 25L9 25L9 15L7 15ZM7 35L7 40L9 40L9 35L7 35ZM7.29289 40.7071C7.68342 41.0976 8.31658 41.0976 8.70711 40.7071L15.0711 34.3431C15.4616 33.9526 15.4616 33.3195 15.0711 32.9289C14.6805 32.5384 14.0474 32.5384 13.6569 32.9289L8 38.5858L2.34314 32.9289C1.95262 32.5384 1.31946 32.5384 0.928931 32.9289C0.538406 33.3195 0.538406 33.9526 0.928931 34.3431L7.29289 40.7071ZM7 5C7 5.55228 7.44771 6 8 6C8.55228 6 9 5.55228 9 5L7 5ZM9 15C9 14.4477 8.55228 14 8 14C7.44771 14 7 14.4477 7 15L9 15ZM7 25C7 25.5523 7.44771 26 8 26C8.55228 26 9 25.5523 9 25L7 25ZM9 35C9 34.4477 8.55228 34 8 34C7.44771 34 7 34.4477 7 35L9 35ZM7 -4.37114e-08L7 5L9 5L9 4.37114e-08L7 -4.37114e-08ZM7 15L7 25L9 25L9 15L7 15ZM7 35L7 40L9 40L9 35L7 35Z"
                  fill="#54AD36"
                />
              </svg>
            </div>
            <div className={classes.form__left__title}>
              <h2>WHEN</h2>
            </div>
            <br />
            <div className={classes.form__left__subtitle}>
              <p>
                Choose the date and time you would like us to clean from the
                list provided. These are the dates and times we still have maid
                availability across our entire coverage area.
              </p>
            </div>
            <br /><br />
            <FormInput setterdate={setCleanData} name="date" label="Date" type="date" placeholder="Click to choose a date" />
            <br />
            <div className={classes.arrow}>
              <svg
                width="16"
                height="41"
                viewBox="0 0 16 41"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.29289 40.7071C7.68342 41.0976 8.31658 41.0976 8.70711 40.7071L15.0711 34.3431C15.4616 33.9526 15.4616 33.3195 15.0711 32.9289C14.6805 32.5384 14.0474 32.5384 13.6569 32.9289L8 38.5858L2.34314 32.9289C1.95262 32.5384 1.31946 32.5384 0.928931 32.9289C0.538406 33.3195 0.538406 33.9526 0.928931 34.3431L7.29289 40.7071ZM7 5C7 5.55228 7.44771 6 8 6C8.55228 6 9 5.55228 9 5L7 5ZM9 15C9 14.4477 8.55228 14 8 14C7.44771 14 7 14.4477 7 15L9 15ZM7 25C7 25.5523 7.44771 26 8 26C8.55228 26 9 25.5523 9 25L7 25ZM9 35C9 34.4477 8.55228 34 8 34C7.44771 34 7 34.4477 7 35L9 35ZM7 -4.37114e-08L7 5L9 5L9 4.37114e-08L7 -4.37114e-08ZM7 15L7 25L9 25L9 15L7 15ZM7 35L7 40L9 40L9 35L7 35ZM7.29289 40.7071C7.68342 41.0976 8.31658 41.0976 8.70711 40.7071L15.0711 34.3431C15.4616 33.9526 15.4616 33.3195 15.0711 32.9289C14.6805 32.5384 14.0474 32.5384 13.6569 32.9289L8 38.5858L2.34314 32.9289C1.95262 32.5384 1.31946 32.5384 0.928931 32.9289C0.538406 33.3195 0.538406 33.9526 0.928931 34.3431L7.29289 40.7071ZM7 5C7 5.55228 7.44771 6 8 6C8.55228 6 9 5.55228 9 5L7 5ZM9 15C9 14.4477 8.55228 14 8 14C7.44771 14 7 14.4477 7 15L9 15ZM7 25C7 25.5523 7.44771 26 8 26C8.55228 26 9 25.5523 9 25L7 25ZM9 35C9 34.4477 8.55228 34 8 34C7.44771 34 7 34.4477 7 35L9 35ZM7 -4.37114e-08L7 5L9 5L9 4.37114e-08L7 -4.37114e-08ZM7 15L7 25L9 25L9 15L7 15ZM7 35L7 40L9 40L9 35L7 35Z"
                  fill="#54AD36"
                />
              </svg>
            </div>


            <HowOftenForm setterHowOften = {setHowRepeate}/>
            <AdressForm/>
            <HowLongForm setterLong={setHowOld} />
            <SubmitButton/>
          </div>

          <div className={classes.BookingSection__form__right}>
            <FormSatisfaction />
            <BookingSummary repeate = {howRepeateIdForRight}  howOld = {howOldIdForRight} data = {dataForRight}  discount = {salesTaxForRight} salesTax = {salesTaxForRight} totalPrice= "0" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default BookingSection;
