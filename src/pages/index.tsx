import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import Header from "./Header/Header";
import MainContent from "./MainContent/MainContent";
import AboutUs from "./AboutUs/AboutUs";
import Advantages from "./Advantages/Advantages";
import BestyPage from "./BestyPage/BestyPage";
import HowPage from "./HowPage/HowPage";
import AsSeen from "./AsSeen/AsSeen";
import FooterBloc from "./FooterBloc/FooterBloc";
import BlackFooter from "./BlackFooter/BlackFooter";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import Reviues from "./Reviues/Reviues";
import FAQ from "./FAQ/FAQ";
import BookingSection from "./BookingSection/BookingSection";


const customTheme = createTheme({
  palette: {
    primary: {
      main: "#ffffff", // Основной цвет
    },
    secondary: {
      main: "#fefefe", // Вторичный цвет (можете изменить по желанию)
    },
  },
});

export default function Home() {
  return (
    <>
      <Header />
      <MainContent />
      <AboutUs />
      <Advantages />
      <BestyPage />
      <HowPage />
      <FAQ />
      <AsSeen />
      <Reviues />
      <BookingSection />
      <FooterBloc />
      <BlackFooter />
    </>
  );
}
