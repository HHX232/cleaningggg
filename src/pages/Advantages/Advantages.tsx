import Image from 'next/image'
import style from './Advantages.module.css'
const Advantages = ()=>{
   return <div className={`${style.advantages} ${style.advantages_bg}`}>
      <div className={`main_container`}>
         <div className={`${style.advantages__inner}`}>
            <h3 className={`${style.advantages_title}`}>Advantages</h3>
            <p className={`${style.advantages_subtitle}`}>Select how many hours of cleaning services you desire. Only pay for the time the maid(s) clean your home.</p>
            <ul className={`${style.advantages_icons_list}`}>
               <li className={`${style.advantages_icons_list_item}`}>
                  <Image className={`${style.list_image}`} alt="Check-mark" width={48} height={48} src='/Mark.svg'/>
                  <div className={`${style.item_title}`}>Quality</div>
                  <div className={`${style.item_text}`}>Each member of our team has at least 5 years of experience in the cleaning industry.</div>
               </li>
               <li className={`${style.advantages_icons_list_item}`}>
                  <Image className={`${style.list_image}`} alt="style.Check-mark" width={48} height={48} src='support.svg'/>
                  <div className={`${style.item_title}`}>Support</div>
                  <div className={`${style.item_text}`}>We offer you a professional consultation with our specialist.</div>
               </li>
               <li className={`${style.advantages_icons_list_item}`}>
                  <Image className={`${style.list_image}`} alt="Check-mark" width={48} height={48} src='/price.svg'/>
                  <div className={`${style.item_title}`}>Price</div>
                  <div className={`${style.item_text}`}>Our prices are fixed for all services.</div>
               </li>
            </ul>
         </div>
      </div>
   </div>
}
export default Advantages