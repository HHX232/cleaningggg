import Image from 'next/image'
import style from './AboutUs.module.css'
const AboutUs = ()=>{
   return <>
   <section className={`${style.about_box}`}>
   <div className='main_container'>
   <div className={`${style.container}`}>
        
      <div className={`${style.about_left}`}>
         <h2 className={`${style.about_left_title}`}>About Us</h2>
         <a href="tel:4129690678" type='tel:4129735693' className={`${style.about_left_subtitle}`}>412-973-5693</a>
         <Image className={`${style.image_about}`} width="370" height={150} alt='' src='/about.jpg'/>
      </div>
      <div className={`${style.about_right}`}>
         <div className={`${style.about_right_text}`}>Our company offers professional cleaning of houses and apartments using modern equipment and high-quality detergents. <br/> We strive to create cleanliness and comfort in your space, while maintaining the integrity of the interior.</div>
         <a href="#" className={`${style.about_right_link}`}>Book</a>
      </div>
      </div>
      </div>
   </section>
   </>
}

export default AboutUs