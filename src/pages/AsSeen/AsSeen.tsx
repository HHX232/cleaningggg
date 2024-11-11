import Image from 'next/image'
import style from './AsSeen.module.css'

const AsSeen = ()=>{
   return <div className={`${style.seen_container}`}>
      <div className={`global_container`}>
         <h4 className={`${style.seen_title}`}>
         As Seen In
         </h4>
         <ul className={`${style.seen_list}`}>
            <li className={`${style.seen_item}`}>
               <Image className={`${style.seen_image}`} width={315} height={48} alt="company" src="/seen1.svg"/>
            </li>
            <li className={`${style.seen_item}`}>
               <Image className={`${style.seen_image}`} width={96} height={48} alt="company" src="/seen2.svg"/>
            </li>
            <li className={`${style.seen_item}`}>
               <Image className={`${style.seen_image}`} width={150} height={48} alt="company" src="/senn3.svg"/>
            </li>
            <li className={`${style.seen_item}`}>
               <Image className={`${style.seen_image}`} width={96} height={48} alt="company" src="/senn4.svg"/>
               
            </li>
            <li className={`${style.seen_item}`}>
               <Image className={`${style.seen_image}`} width={48} height={48} alt="company" src="/senn5.svg"/>
               
            </li>
         </ul>
      </div>
   </div>
}
export default AsSeen