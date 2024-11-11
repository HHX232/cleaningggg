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
import Header from './Header/Header';
import MainContent from './MainContent/MainContent';
import AboutUs from './AboutUs/AboutUs';
import Advantages from './Advantages/Advantages';
import BestyPage from './BestyPage/BestyPage';
import HowPage from './HowPage/HowPage';
import AsSeen from './AsSeen/AsSeen';
import FooterBloc from './FooterBloc/FooterBloc';
import BlackFooter from './BlackFooter/BlackFooter';
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import Reviues from './Reviues/Reviues';
// export function TemporaryDrawer() {
//   const [open, setOpen] = React.useState(false);

//   const toggleDrawer = (newOpen: boolean) => () => {
//     setOpen(newOpen);
//   };

//   const DrawerList = (
//     <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
//       <List>
//         {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
//           <ListItem key={text} disablePadding>
//             <ListItemButton>
//               <ListItemIcon>
//                 {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//               </ListItemIcon>
//               <ListItemText primary={text} />
//             </ListItemButton>
//           </ListItem>
//         ))}
//       </List>
//       <Divider />
//       <List>
//         {['All mail', 'Trash', 'Spam'].map((text, index) => (
//           <ListItem key={text} disablePadding>
//             <ListItemButton>
//               <ListItemIcon>
//                 {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//               </ListItemIcon>
//               <ListItemText primary={text} />
//             </ListItemButton>
//           </ListItem>
//         ))}
//       </List>
//     </Box>
//   );

//   return (
//     <div>
//       <Button onClick={toggleDrawer(true)}>Open drawer</Button>
//       <Drawer open={open} onClose={toggleDrawer(false)}>
//         {DrawerList}
//       </Drawer>
//     </div>
//   );
// }

const customTheme = createTheme({
  palette: {
    primary: {
      main: "#ffffff", // Основной цвет
    },
    secondary: {
      main: "#fefefe", // Вторичный цвет (можете изменить по желанию)
    },
    // Вы можете добавить другие настройки темы, такие как typography, spacing и т.д.
  },
});



export default function Home() {
  return (<>
    <Header />
    <MainContent/>
    <AboutUs/>
   <Advantages/>
   <BestyPage/>
   <HowPage/>
   <AsSeen/>
   <Reviues/>
   <FooterBloc/>
   <BlackFooter/>

   </>
  );
}


