import style from './Reviues.module.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Image from 'next/image';

interface TDataUser  {
   name:string;
   data:string;
   text:string;
   city:string;
   starsCount:string | number;
}
const dataUser: TDataUser[] = [{name:"Debbie B", data:"2", text:"Nikita was very professional and did an excellent job cleaning my home. For my next cleaning appointment at the Beginning of October, I would", city:"Pittsburgh, PA", starsCount:"5"},
   {name:"Alice C", data:"3", text:"I was impressed by Alex's attention to detail during the home cleaning session. Looking forward to my next appointment in mid-October.", city:"Columbus, OH", starsCount:"5"},

   {name:"Ethan D", data:"1", text:"Sarah did an amazing job cleaning my home. Can't wait for the next cleaning session in late October!", city:"Charlotte, NC", starsCount:"5"},
   {name:"Olivia F", data:"4", text:"James provided top-notch cleaning services. Excited for the upcoming cleaning appointment at the end of October!", city:"Austin, TX", starsCount:"5"},
   {name:"Liam G", data:"5", text:"Melissa was fantastic and thorough in cleaning my home. Looking forward to the next session in early November!", city:"Denver, CO", starsCount:"5"},
   {name:"Nora H", data:"6", text:"John did an exceptional job cleaning my home. Can't wait for the next cleaning appointment in mid-November!", city:"Seattle, WA", starsCount:"5"},
   {name:"Oscar J", data:"7", text:"Sophia's cleaning skills are unmatched. Excited for the next cleaning session in late November!", city:"Portland, OR", starsCount:"5"},
   {name:"Mila K", data:"8", text:"William was professional and efficient in cleaning my home. Looking forward to the next appointment in early December!", city:"San Francisco, CA", starsCount:"5"},
   {name:"Aiden L", data:"9", text:"Emma did a fantastic job cleaning my home. Can't wait for the next cleaning session in mid-December!", city:"Los Angeles, CA", starsCount:"5"},
   {name:"Lucas M", data:"10", text:"Grace provided excellent cleaning services. Excited for the upcoming cleaning appointment at the end of December!", city:"Miami, FL", starsCount:"5"},
   {name:"Hazel N", data:"11", text:"Benjamin was thorough and detail-oriented in cleaning my home. Looking forward to the next session in early January!", city:"New York, NY", starsCount:"5"},
   {name:"Violet O", data:"12", text:"Luna did an amazing job cleaning my home. Can't wait for the next cleaning appointment in mid-January!", city:"Boston, MA", starsCount:"5"},

]
const Reviues = ()=>{
   const globalIndex = 5
   return <section className={`${style.reviues}`}>
      <div className={`global_container`}>
      <div className={`${style.reviues__inner}`}>
         <h2 className={`${style.reviues_title}`}>Verified Customer Reviews</h2>
         <ul className={`${style.reviues_list}`}>
            <li className={`${style.reviues_item}`}>
               <div className={`${style.user_box}`}>
               <Image width={22} height={22} alt='' src={'/userIcon.svg'}/>
               <div className={`${style.user_box_text}`}>{dataUser[0].name}</div>
               </div>
               <div className={`${style.stars_box_big}`}>
                  <div className={`${style.stars_box_mini}`}>
                     {Array.from({ length: Number(dataUser[globalIndex].starsCount) }, (_, index) => (
      <Image width={24} height={24} alt='' src={'/fullstar.svg'}/>
    ))}
                  </div>
                  <div className={`${style.stars_data}`}>{dataUser[0].data}</div>
               </div>
               <p className={`${style.item_text}`}></p>
               <p className={`${style.item_city}`}></p>
            </li>
         </ul>
      </div>
      </div>
 </section>
}
export default Reviues


    {/* <Swiper
   spaceBetween={50}
   slidesPerView={3}
   onSlideChange={() => console.log('slide change')}
   onSwiper={(swiper) => console.log(swiper)}
 >
   <SwiperSlide>Slide 1</SwiperSlide>
   <SwiperSlide>Slide 2</SwiperSlide>
   <SwiperSlide>Slide 3</SwiperSlide>
   <SwiperSlide>Slide 4</SwiperSlide>
  
 </Swiper> */}