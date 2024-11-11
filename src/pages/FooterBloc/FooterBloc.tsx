import Image from 'next/image'
import style from './FooterBloc.module.css'
const FooterBloc = () =>{

   return <div className={`main_container ${style.footer_box}`}>
      <div className={`${style.logo_box}`}>
         <a href="#">
        <Image className={`${style.logo_svg}`} width={24} height={24} alt="" src='/logo.svg'/>
        </a>
        <p className={`${style.logo_text}`}>commercial office cleaning</p>
      </div>
      <ul className={`${style.links_list}`}>
      <li className={`${style.links_item}`}><a href="#" className={`${style.links_tag}`}>About</a></li>
      <li className={`${style.links_item}`}><a href="#" className={`${style.links_tag}`}>Advantges</a></li>
      <li className={`${style.links_item}`}><a href="#" className={`${style.links_tag}`}>How we Work</a></li>
      <li className={`${style.links_item}`}><a href="#" className={`${style.links_tag}`}>FAQ</a></li>
      <li className={`${style.links_item}`}><a href="#" className={`${style.links_tag}`}>Reviews</a></li>
      </ul>
   </div>
}
export default FooterBloc