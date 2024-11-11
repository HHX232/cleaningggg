import Image from 'next/image'
import style from './BestyPage.module.css'
const BestyPage = ()=>{
   return <section className={`${style.besty_section} main_container `}>
   <div className={`${style.besty_box}`}>
   <h2 className={`${style.besty_title}`}>The Best Pittsburgh Maid Service For Office Cleaning in Pittsburgh</h2>
   <div className={`${style.besty_inner}`}>
   <Image className={`${style.besty_image}`} width={"300"} height={"150"} alt="Cleaner woman" src='/woman.png'/>
   <ul className={`${style.besty_list}`}>
      <li className={`${style.besty_item}`}>Cleaners average 4.8 stars</li>
      <li className={`${style.besty_item}`}>Affordable, upfront pricing</li>
      <li className={`${style.besty_item}`}>Appointments available 7 days a week</li>
      <li className={`${style.besty_item}`}>Convenient online booking, cancel anytime</li>
   </ul>
   </div>
   </div>
</section>
}
export default BestyPage