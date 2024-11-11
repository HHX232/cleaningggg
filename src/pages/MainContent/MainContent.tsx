import style from './MainContent.module.css'
import Image from 'next/image'
const MainContent = () =>{
   return <section className={`${style.main_content}`}>
      <div className={`${style.main_container}`}>
      <div className={`${style.content}`}>
   <h1 className={`${style.main_title}`}>High-quality cleaning of apartments, offices and private houses</h1>
   <p className={`${style.main_subtitle}`}>We provide all types of cleaning services</p>
   <div className={`${style.buttons_box}`}>
      <a href="#" className={`${style.main_button}`}>Book</a>
      <a href="#"  className={`${style.main_subbutton}`}>About Us</a>
   </div>
      </div>
      </div>

     <Image className={`${style.main_img}`} width={200} height={200} alt="" src='/MainIMG.jpg'/>
   </section>
   }
   export default MainContent