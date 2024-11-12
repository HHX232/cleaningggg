import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import style from './AdressForm.module.css'
import Image from 'next/image';
import { Container } from '@mui/material';

export function BasicTextFields({ labelName }: { labelName: string }) {
   const [value, setValue] = React.useState('');
   const [error, setError] = React.useState(false);
 
   const handleBlur = () => {
     setError(value.trim() === '');
   };
 
   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
     setValue(event.target.value);
     if (error && event.target.value.trim() !== '') {
       setError(false); // Убираем ошибку, если поле больше не пустое
     }
   };
 
   return (
     <Box
       component="div"
       sx={{ '& > :not(style)': { width: '100%' } }}
     >
       <TextField
         required
         error={error} // Добавляем ошибку, если значение пустое
         placeholder={`${labelName} *`}
         variant="outlined"
         value={value}
         onChange={handleChange}
         onBlur={handleBlur}
         helperText={error ? "This field is required" : ""} // Текст ошибки
         InputProps={{
           sx: {
             width: "100%",
             border: "1px solid #B3B3B3",
             borderRadius: "12px",
             "& .MuiOutlinedInput-notchedOutline": {
               border: "none",
             },
             "& input::placeholder": {
               color: "#B3B3B3",
               fontWeight: "300",
               fontSize: "16px",
               opacity: 1,
             },
           },
         }}
       />
     </Box>
   );
 }

const AdressForm = () =>{
   return <div className={`${style.adressForm_box}`}>
      <h3 className={`${style.adress_title}`}>YOUR ADDRESS</h3>
      <p className={`${style.adress_subtitle}`}>Where would you like us to clean?</p>
      <div className={`${style.adress__inner}`}>
         <div className={`${style.form_item}`}>
            <div className={`${style.form_item_text}`}>Adress</div>
         <BasicTextFields  labelName='Adress' />
         </div>

         <div className={`${style.adress__inner__inner}`}>
         <div className={`${style.form_item_2}`}>
            <div className={`${style.form_item_text}`}>City</div>
         <BasicTextFields labelName='City' />
         </div> 
         <div className={`${style.form_item_2}`}>
            <div className={`${style.form_item_text}`}>Zip</div>
         <BasicTextFields labelName='Zip/Suite' />
         </div>
         </div>
         <div className={`${style.arrow} `}>
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

export default AdressForm