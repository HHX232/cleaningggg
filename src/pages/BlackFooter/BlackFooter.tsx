import style from './BlackFooter.module.css'
const BlackFooter = ()=>{
   return <footer className={`${style.black_footer}`}>
      <div className={`${"global_container"} ${style.footer_container_width}`}>
         <ul className={`${style.footer__inner}`}>
            <li className={`${style.footer_item}`}><a href="#" className={`${style.footer_link}`}>Privacy Policy</a></li>
            <li className={`${style.footer_item}`}><a href="#" className={`${style.footer_link}`}>Terms & Conditions</a></li>
         </ul>
      </div>
   </footer>
}
export default BlackFooter