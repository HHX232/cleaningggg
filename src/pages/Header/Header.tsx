
import style from './Header.module.css'
import Image from "next/image";
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

export function TemporaryDrawer() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <div className={`${style.inner_menu_header}`}>

      <Button onClick={toggleDrawer(true)}>
        <Image alt='' width={21} height={16} src='/burger.svg'/>
      </Button>
      <div className={`${style.logo_box_2}`}>
        <Image className={`${style.logo_svg_2}`} width={24} height={24} alt="" src='/logo.svg'/>
        <p className={`${style.logo_text_2}`}>commercial office cleaning</p>
      </div>

      </div>
      
      <List>
        {['About', 'Advantges', 'How we Work', 'FAQ','Reviews'].map((text, index) => (
          <a href={`${text}`}>
          <ListItem key={text} disablePadding>
            <ListItemButton>

              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
          </a>
        ))}
      </List>
      {/* <Divider /> */}
      {/* <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List> */}
    </Box>
    
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)}>
        <Image alt='' width={21} height={16} src='/burger.svg'/>
      </Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}


const Header = ()=>{
   return <header className={`${style.header_box}`}>

    <div className={`${style.logo_box}`}>
        <Image className={`${style.logo_svg}`} width={24} height={24} alt="" src='/logo.svg'/>
        <p className={`${style.logo_text}`}>commercial office cleaning</p>
        <div className={`${style.hidden_box}`}>
        <TemporaryDrawer/>
        </div>
      </div>
      
    <div className={`${style.header__inner}`}>
      <ul className={`${style.header_list}`}>
        <li className={`${style.header_item}`}>
          <a href="#" className={`${style.header_tag_link}`}>About</a>
        </li>
        <li className={`${style.header_item}`}>
          <a href="#" className={`${style.header_tag_link}`}>Advantges</a>
        </li>
        <li className={`${style.header_item}`}>
          <a href="#" className={`${style.header_tag_link}`}>How we Work</a>
        </li>
        <li className={`${style.header_item}`}>
          <a href="#" className={`${style.header_tag_link}`}>FAQ</a>
        </li>
        <li className={`${style.header_item}`}>
          <a href="#" className={`${style.header_tag_link}`}>Reviews</a>
        </li>
      </ul>
      {/* <div className={`${style.hidden_box}`}></div> */}
    </div>

  <div className={`${style.phone_box}`}>
    <div className={`${style.phone_text}`}>Book now</div>
    <a href="tel:4129690678" className={`${style.phone_link}`}>(412) 969-0678</a>
  </div>
      
   </header>
 }
export default Header