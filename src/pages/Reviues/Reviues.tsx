import style from './Reviues.module.css'
import { Swiper, SwiperSlide, Swiper as SwiperClass } from 'swiper/react';
import Image from 'next/image';
import { useEffect, useId, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
interface TDataUser  {
   name:string;
   data:string;
   text:string;
   city:string;
   starsCount:string | number;
}
const dataUser: TDataUser[] = [{name:"Debbie B", data:"2", text:"Nikita was very professional and did an excellent job cleaning my home. For my next cleaning appointment at the Beginning of October, I would", city:"Pittsburgh, PA", starsCount:"5"},
   {name:"Alice C", data:"3", text:"I was impressed by Alex's attention to detail during the home cleaning session. Looking forward to my next appointment in mid-October.", city:"Columbus, OH", starsCount:"5"},

   {name:"Ethan D", data:"1", text:"Sarah did an amazing job cleaning my home. Can't wait for the next cleaning session in late October!", city:"Charlotte, NC", starsCount:"4"},
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
   const midIndex = Math.ceil(dataUser .length / 2);
   const firstHalf = dataUser .slice(0, midIndex);
   const secondHalf = dataUser .slice(midIndex);

   const handleBulletStyles = (swiper: typeof SwiperClass) => {
      const bullets = document.querySelectorAll<HTMLSpanElement>('.swiper-pagination-bullet');
      bullets.forEach(bullet => {
          bullet.style.backgroundColor = bullet.classList.contains('swiper-pagination-bullet-active')
              ? '#555555'
              : '#D9D9D9';
          bullet.style.opacity = '1';
      });
  };

    
   return <section className={`${style.reviues}`}>
      <div className={`global_container`}>
      <div className={`${style.reviues__inner}`}>
         <h2 className={`${style.reviues_title}`}>Verified Customer Reviews</h2>
         <ul className={`${style.reviues_list} ${style.reviues_list_first}`}>

         {firstHalf.map((item) => (
                    <li className={`${style.reviues_item}`} key={uuidv4()}>
                        <div className={`${style.user_box}`}>
                            <Image width={22} height={22} alt='' src={'/userIcon.svg'} />
                            <div className={`${style.user_box_text}`}>{item.name}</div>
                        </div>

                        <div className={`${style.stars_box_big}`}>
                            <div className={`${style.stars_box_mini}`}>
                                {Array.from({ length: Math.min(Number(item.starsCount), 5) }, (_, starIndex) => (
                                    <Image key={`full-${starIndex}`} width={24} height={24} alt='' src={'/fullstar.svg'} />
                                ))}
                                {Array.from({ length: Math.max(0, 5 - Number(item.starsCount)) }, (_, starIndex) => (
                                    <Image key={`empty-${starIndex}`} width={24} height={24} alt='' src={'/notfullstar.svg'} />
                                ))}
                            </div>
                            <div className={`${style.stars_data}`}>{`${item.data} days ago`}</div>
                        </div>
                        <p className={`${style.item_text}`}>{item.text}</p>
                        <p className={`${style.item_city}`}>{item.city}</p>
                    </li>
                ))}
            
         </ul>
         <ul className={`${style.reviues_list} ${style.reviues_list_second}`}>
         {secondHalf.map((item) => (
                    <li className={`${style.reviues_item}`} key={uuidv4()}>
                        <div className={`${style.user_box}`}>
                            <Image width={22} height={22} alt='' src={'/userIcon.svg'} />
                            <div className={`${style.user_box_text}`}>{item.name}</div>
                        </div>

                        <div className={`${style.stars_box_big}`}>
                            <div className={`${style.stars_box_mini}`}>
                                {Array.from({ length: Math.min(Number(item.starsCount), 5) }, (_, starIndex) => (
                                    <Image key={`full-${starIndex}`} width={24} height={24} alt='' src={'/fullstar.svg'} />
                                ))}
                                {Array.from({ length: Math.max(0, 5 - Number(item.starsCount)) }, (_, starIndex) => (
                                    <Image key={`empty-${starIndex}`} width={24} height={24} alt='' src={'/notfullstar.svg'} />
                                ))}
                            </div>
                            <div className={`${style.stars_data}`}>{`${item.data} days ago`}</div>
                        </div>
                        <p className={`${style.item_text}`}>{item.text}</p>
                        <p className={`${style.item_city}`}>{item.city}</p>
                    </li>
                ))}
         </ul>
      </div>
      </div>
<div className={`${style.swiper_box}`}>
      <Swiper spaceBetween={30} slidesPerView={'auto'} centeredSlides={true} onSwiper={(swiper:any) => handleBulletStyles(swiper)}
            onSlideChange={(swiper:any) => handleBulletStyles(swiper)}
            pagination={{
                clickable: true,
                renderBullet: (index, className) => (
                    `<span class="${className}" style="width: 12px; height: 12px; border-radius: 50%; margin: 0 7px;"></span>`
                ),
            }}
        modules={[Pagination]} className={`mySwiper`}>
            {dataUser .slice(0, 4).map((item) => (
                <SwiperSlide className={`${style.swiper_slide_box}`} key={uuidv4()}> 
                    <li className={`${style.reviues_item} ${style.reviues_item_slider}`}>
                        <div className={`${style.user_box}`}>
                            <Image width={22} height={22} alt='' src={'/userIcon.svg'} />
                            <div className={`${style.user_box_text}`}>{item.name}</div>
                        </div>

                        <div className={`${style.stars_box_big}`}>
                            <div className={`${style.stars_box_mini}`}>
                                {Array.from({ length: Math.min(Number(item.starsCount), 5) }, (_, starIndex) => (
                                    <Image key={`full-${starIndex}`} width={24} height={24} alt='' src={'/fullstar.svg'} />
                                ))}
                                {Array.from({ length: Math.max(0, 5 - Number(item.starsCount)) }, (_, starIndex) => (
                                    <Image key={`empty-${starIndex}`} width={24} height={24} alt='' src={'/notfullstar.svg'} />
                                ))}
                            </div>
                            <div className={`${style.stars_data}`}>{`${item.data} days ago`}</div>
                        </div>
                        <p className={`${style.item_text}`}>{item.text}</p>
                        <p className={`${style.item_city} ${style.item_city_slider}`}>{item.city}</p>
                    </li>
                </SwiperSlide>
            ))}
        </Swiper>
        </div>
 </section>
}

export default Reviues
    