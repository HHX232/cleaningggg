import style from './HowLongForm.module.css'
import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Image from 'next/image';
import { Popper, Paper } from "@mui/material";

// import { ReactComponent as CustomArrowIcon } from "./path/to/your/icon.svg"; // Импорт иконки

const Sails = [
   { label: '1 Houre', id: 1 },
   { label: '2 Houres', id: 2 },
   { label: '3 Houres', id: 3 },
   { label: '4 Houres', id: 4 },
   { label: '5 Houres', id: 5 },
   { label: '6 Houres', id: 6 },
   { label: '7 Houres', id: 7 },
   { label: '8 Houres', id: 8 },
   { label: '9 Houres', id: 9 },
   { label: '10 Houres', id: 10 },
   { label: '11 Houres', id: 11 },

 ]
{/* <Image src="/treygol.svg" width={10} height={10} alt='' /> */}

export function ComboBox({ onChange }:{onChange:any}) {
   return (
     <Autocomplete
     onChange={(event, value) => {
      onChange(value); 
    }}
       disablePortal
       options={Sails}
       sx={{ width: "100%", borderRadius: "12px" }}
       popupIcon={<Image src="/treygol.svg" width={17} height={12} alt="" />}
       renderInput={(params) => (
         <TextField
           {...params}
           placeholder="3 Hourse"
           InputProps={{
             ...params.InputProps,
             sx: {
               border: "1px solid #B3B3B3",
               borderRadius: "12px",
               "& .MuiOutlinedInput-notchedOutline": {
                 border: "none",
               },
               "& input::placeholder": {
                 color: "#B3B3B3",
                 fontWeight:"300",
                 fontSize: "16px",
                 opacity: 1,
               },
             },
           }}
         />
       )}
       PaperComponent={(props) => (
         <Paper
           {...props}
           sx={{
             mt: "20px",
             maxWidth: "360px",
             padding: "9px 12px",
             fontSize: "16px",
             fontWeight: 300,
             borderRadius: "20px",
           }}
         />
       )}
       ListboxProps={{
         sx: {
           "& .MuiAutocomplete-option": {
             borderRadius: "10px",
             backgroundColor: "#fff",
             "&:hover": {
               backgroundColor: "#F5F5F5",
             },
           },
         },
       }}
     />
   );
 }




const HowLongForm = ({setterLong}:{setterLong:any}) =>{
   return <div className={`${style.often_box}`}>
      <div className={`${style.text_box}`}>
      <h3 className={`${style.often_title}`}>HOW LONG?</h3>
      <div className={`${style.often_subtitle}`}>Please reference the chart at the top of the page. Dont worry, if it takes less time, we only charge you for the amount of time the maids are at your home.</div>
      </div>
      <p className={`${style.input_subtext}`}>Time</p>
      <ComboBox onChange={setterLong}/>
 
   </div>
}
export default HowLongForm