import style from './HowOftenForm.module.css'
import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Image from 'next/image';
import { Popper, Paper } from "@mui/material";


const Sails = [
   { label: 'The once', id: 1 },
   { label: 'Weekly - 25%', id: 2 },
   { label: 'By Weekly - 25%', id: 3 },
   { label: 'Monthly - 25%', id: 4 },
   { label: 'Tri-Weekly - 25%', id: 5 },
 ]

export function ComboBox({ onChange }:{onChange:any}) {
   return (
     <Autocomplete
       disablePortal
       options={Sails}
       onChange={(event, value) => {
        onChange(value); 
      }}
       sx={{ width: "100%", borderRadius: "12px" }}
       popupIcon={<Image src="/treygol.svg" width={17} height={12} alt="" />}
       renderInput={(params) => (
         <TextField
           {...params}
           placeholder="Discount 25%"
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



const HowOftenForm = ({setterHowOften}:{setterHowOften:any}) =>{
   return <div className={`${style.often_box}`}>
      <div className={`${style.text_box}`}>
      <h3 className={`${style.often_title}`}>HOW OFTEN</h3>
      <div className={`${style.often_subtitle}`}>Recurring clients save 25% on your first cleaning by selecting any frequency except one-time service.</div>
      </div>
      <p className={`${style.input_subtext}`}>Discount</p>
      <ComboBox onChange={setterHowOften}/>
      <div className={`${style.image_box}`}>
      <div className={`${style.arrow}`}>
              <svg
                width="16"
                height="41"
                viewBox="0 0 16 41"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.29289 40.7071C7.68342 41.0976 8.31658 41.0976 8.70711 40.7071L15.0711 34.3431C15.4616 33.9526 15.4616 33.3195 15.0711 32.9289C14.6805 32.5384 14.0474 32.5384 13.6569 32.9289L8 38.5858L2.34314 32.9289C1.95262 32.5384 1.31946 32.5384 0.928931 32.9289C0.538406 33.3195 0.538406 33.9526 0.928931 34.3431L7.29289 40.7071ZM7 5C7 5.55228 7.44771 6 8 6C8.55228 6 9 5.55228 9 5L7 5ZM9 15C9 14.4477 8.55228 14 8 14C7.44771 14 7 14.4477 7 15L9 15ZM7 25C7 25.5523 7.44771 26 8 26C8.55228 26 9 25.5523 9 25L7 25ZM9 35C9 34.4477 8.55228 34 8 34C7.44771 34 7 34.4477 7 35L9 35ZM7 -4.37114e-08L7 5L9 5L9 4.37114e-08L7 -4.37114e-08ZM7 15L7 25L9 25L9 15L7 15ZM7 35L7 40L9 40L9 35L7 35ZM7.29289 40.7071C7.68342 41.0976 8.31658 41.0976 8.70711 40.7071L15.0711 34.3431C15.4616 33.9526 15.4616 33.3195 15.0711 32.9289C14.6805 32.5384 14.0474 32.5384 13.6569 32.9289L8 38.5858L2.34314 32.9289C1.95262 32.5384 1.31946 32.5384 0.928931 32.9289C0.538406 33.3195 0.538406 33.9526 0.928931 34.3431L7.29289 40.7071ZM7 5C7 5.55228 7.44771 6 8 6C8.55228 6 9 5.55228 9 5L7 5ZM9 15C9 14.4477 8.55228 14 8 14C7.44771 14 7 14.4477 7 15L9 15ZM7 25C7 25.5523 7.44771 26 8 26C8.55228 26 9 25.5523 9 25L7 25ZM9 35C9 34.4477 8.55228 34 8 34C7.44771 34 7 34.4477 7 35L9 35ZM7 -4.37114e-08L7 5L9 5L9 4.37114e-08L7 -4.37114e-08ZM7 15L7 25L9 25L9 15L7 15ZM7 35L7 40L9 40L9 35L7 35Z"
                  fill="#54AD36"
                />
              </svg>
            </div>
      </div>
   </div>
}
export default HowOftenForm