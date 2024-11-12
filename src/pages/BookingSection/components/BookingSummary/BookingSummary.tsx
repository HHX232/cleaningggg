import Image from 'next/image';
import style from './BookingSummary.module.css'
import { useEffect } from 'react';

interface IBoking {
   repeate:string;
   howOld:string;
   data:any;
   totalPrice:number | string;
   discount:string;
   salesTax:number | string;

}
const BookingSummary = ({repeate = "Bi-Weekly" , howOld = "3", data = "Choose service date.." , discount = "0" , salesTax = "0", }:IBoking) =>{

let discountNumber = 0

   if(discount === "0" ){
      discountNumber = 0
   }else if(discount === "25" || discount === "25%"){
      discountNumber = 0.25;
   }else{
      discountNumber = 0
   }
// if (discount !== "25" && discount !== "25%") {
//    discountNumber = 0;
// }
   // цена без учетов скидок и налогов
   const subTotalPrice = (Number(howOld) * 89 )
  const discountPrice = (subTotalPrice * Number(discountNumber) )
   //налог
   const salesPrice =  parseFloat((Number(subTotalPrice) * 0.0535).toFixed(2)) ;

   const totalTotalPrice = subTotalPrice - discountPrice + salesPrice;
   console.log(salesPrice)
   return <div className={`${style.booking_sum_box}`}>
      <h4 className={`${style.booking_title}`}>Booking Summary</h4>
      <ul className={`${style.booking_checks}`}>
         <li className={`${style.booking_checks_item}`}>
            <Image className={`${style.icon_svg}`}  width={24} height={24} alt='' src="/home.svg"/>
            <p className={`${style.booking_checks_item_text}`}>Hourly Clean</p>
         </li>
         <li className={`${style.booking_checks_item}`}>
            <Image className={`${style.icon_svg}`}  width={24} height={24} alt='' src="/calendar.svg"/>
            <p className={`${style.booking_checks_item_text}`}>{ data ? data : "Choose service date.."}</p>
         </li>
         <li className={`${style.booking_checks_item}`}>
            <Image className={`${style.icon_svg}`}  width={24} height={24} alt='' src="/timr.svg"/>
            <p className={`${style.booking_checks_item_text}`}>{`${howOld} Hours 0 Minutes`}</p>
         </li>
         <li className={`${style.booking_checks_item}`}>
            <Image  className={`${style.icon_svg}`} width={24} height={24} alt='' src="/repeat.svg"/>
            <p className={`${style.booking_checks_item_text}`}>{`${repeate != "" ? repeate : "Choose service date.."}`}</p>
         </li>
      </ul>
      <ul className={`${style.booking_prices}`}>
         <li className={`${style.booking_prices_item}`}>
            <p className={`${style.booking_prices_item_text}`}>SUB-TOTAL</p>
            <p className={`${style.booking_prices_item_price}`}>{`$${subTotalPrice}`}</p>
         </li>
         <li className={`${style.booking_prices_item}`}>
            <p className={`${style.booking_prices_item_text}`}>DISCOUNT</p>
            <p className={`${style.booking_prices_item_price}`}>{`$${discountPrice}`}</p>
         </li>
         <li className={`${style.booking_prices_item}`}>
            <p className={`${style.booking_prices_item_text}`}>SALES TAX</p>
            <p className={`${style.booking_prices_item_price}`}>{`$${salesPrice}`}</p>
         </li>
      </ul>
      <div className={`${style.booking_total}`}>
         <div className={`${style.booking_total_text}`}>Total</div>
         <h2 className={`${style.booking_total_price}`}>{`$${totalTotalPrice}`}</h2>
      </div>
   </div>
}

export default BookingSummary