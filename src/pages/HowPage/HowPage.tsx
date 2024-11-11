import Image from 'next/image'
import style from './HowPage.module.css'
const HowPage = () =>{

   return <section className={`${style.howPage}`}>
      <div className={`global_container`}>
         <h2 className={`${style.how_title}`}>How we work</h2>
         <ul className={`${style.how_inner}`}>
            <li className={`${style.how_item}`}>
               <Image width={48} height={48} alt='' src={'/requestsvg.svg'} className={`${style.how_image}`}/>
               <div className={`${style.item_title}`}>Request</div>
               <p className={`${style.item_text}`}>Leave a request on the website and get a 10% discount on the first order</p>
            </li>
            <li className={`${style.how_item}`}>
               <Image width={48} height={48} alt='' src={'/calcsvg.svg'} className={`${style.how_image}`}/>
               <div className={`${style.item_title}`}>Calculation</div>
               <p className={`${style.item_text}`}>Our manager will contact you and clarify all the details and nuances of the upcoming cleaning</p>
            </li>
            <li className={`${style.how_item}`}>
               <Image width={48} height={48} alt='' src={'/cleaningsvg.svg'} className={`${style.how_image}`}/>
               <div className={`${style.item_title}`}>Cleaning</div>
               <p className={`${style.item_text}`}>At a convenient time for you, specialists will come to you and clean up</p>
            </li>
            <li className={`${style.how_item}`}>
               <Image width={48} height={48} alt='' src={'/paysvg.svg'} className={`${style.how_image}`}/>
               <div className={`${style.item_title}`}>Payment</div>
               <p className={`${style.item_text}`}>After you make sure that everything is done according to your wishes</p>
            </li>
         </ul>
      </div>
   </section>
}
export default HowPage