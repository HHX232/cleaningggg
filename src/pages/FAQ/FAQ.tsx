import style from './FAQ.module.css'
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import Image from 'next/image';

export function AccordionUsage() {
   const [expanded, setExpanded] = React.useState<any>(false);

   const handleChange = (panel:any) => (event:any, isExpanded:any) => {
       setExpanded(isExpanded ? panel : false);
   };

  return (
    <div>
      <Accordion  expanded={expanded === 'panel1'}
                onChange={handleChange('panel1')} sx={{ boxShadow: 'none',
          borderBottom: '1px solid #B3B3B3',
          '&:before': {
                      display: 'none', 
                  },
                  marginBottom: '0px',
       }}>
        <AccordionSummary
         
          aria-controls="panel1-content"
          id="panel1-header"
          sx={{
            fontSize:'16px',
            fontWeight:"500",
            marginTop:'12px',
            marginBottom:'12px',
           
            '&.Mui-expanded': {
               '& .MuiAccordionSummary-expandIcon': {
                   transform: 'rotate(45deg)',
               },
           },
          }}
          expandIcon={
            <Image
                src={'./plus.svg'}
                alt=''
                width={14}
                height={14}
                style={{
                    transition: 'transform 0.3s ease',
                    minWidth:'14px',
                    minHeight:'14px',
                    marginLeft:"5px",
                marginRight:"5px",
                    transform: expanded === 'panel1' ? 'rotate(45deg)' : 'rotate(0deg)',
                }}
            />
        }
        >
          What do the cleaning rates depend on?
        </AccordionSummary>
        <AccordionDetails sx={{
         fontSize:'16px',
         fontWeight:'300'
        }}>
         <div className={`${style.list_title}`}>The price of cleaning depends on the following components: <br/> </div>
         <ol className={`${style.accList}`}>
            <li className={`${style.accListItem}`}>The area of the apartment/house</li>
            <li className={`${style.accListItem}`}>The type of service you ordered</li>
            <li className={`${style.accListItem}`}>Your individual wishes</li>
         </ol>
        </AccordionDetails>
      </Accordion>

      <Accordion  expanded={expanded === 'panel2'}
                onChange={handleChange('panel2')} sx={{ boxShadow: 'none',
          borderBottom: '1px solid #B3B3B3',
          '&:before': {
                      display: 'none', 
                  },
                  marginBottom: '0px',
       }}>
        <AccordionSummary
         
          aria-controls="panel2-content"
          id="panel2-header"
          sx={{
            fontSize:'16px',
            fontWeight:"500",
            marginTop:'12px',
            marginBottom:'12px',
           
            '&.Mui-expanded': {
               '& .MuiAccordionSummary-expandIcon': {
                   transform: 'rotate(45deg)',
               },
           },
          }}
          expandIcon={
            <Image
            src={'./plus.svg'}
            alt=''
            width={14}
            height={14}
            style={{
                transition: 'transform 0.3s ease',
                minWidth:'14px',
                minHeight:'14px',
                marginLeft:"5px",
                marginRight:"5px",
                transform: expanded === 'panel1' ? 'rotate(45deg)' : 'rotate(0deg)',
            }}
        />
        }
        >
          Is it possible to sign a contract for regular cleaning? Will there be a discount?
        </AccordionSummary>
        <AccordionDetails sx={{
         fontSize:'16px',
         fontWeight:'300'
        }}>
          <div className={`${style.list_title}`}>The price of cleaning depends on the following components: <br/> </div>
         <ol className={`${style.accList}`}>
            <li className={`${style.accListItem}`}>The area of the apartment/house</li>
            <li className={`${style.accListItem}`}>The type of service you ordered</li>
            <li className={`${style.accListItem}`}>Your individual wishes</li>
         </ol>
        </AccordionDetails>
      </Accordion>


      <Accordion  expanded={expanded === 'panel3'}
                onChange={handleChange('panel3')} sx={{ boxShadow: 'none',
          borderBottom: '1px solid #B3B3B3',
          '&:before': {
                      display: 'none', 
                  },
                  marginBottom: '0px',
       }}>
        <AccordionSummary
         
          aria-controls="panel3-content"
          id="panel3-header"
          sx={{
            fontSize:'16px',
            fontWeight:"500",
            marginTop:'12px',
            marginBottom:'12px',
           
            '&.Mui-expanded': {
               '& .MuiAccordionSummary-expandIcon': {
                   transform: 'rotate(45deg)',
               },
           },
          }}
          expandIcon={
            <Image
                src={'./plus.svg'}
                alt=''
                width={14}
                height={14}
                style={{
                    transition: 'transform 0.3s ease',
                    minWidth:'14px',
                    minHeight:'14px',
                    marginLeft:"5px",
                marginRight:"5px",
                    transform: expanded === 'panel1' ? 'rotate(45deg)' : 'rotate(0deg)',
                }}
            />
        }
        >
What is not included in the cleaning fee?        </AccordionSummary>
        <AccordionDetails sx={{
         fontSize:'16px',
         fontWeight:'300'
        }}>
          <div className={`${style.list_title}`}>The price of cleaning depends on the following components: <br/> </div>
         <ol className={`${style.accList}`}>
            <li className={`${style.accListItem}`}>The area of the apartment/house</li>
            <li className={`${style.accListItem}`}>The type of service you ordered</li>
            <li className={`${style.accListItem}`}>Your individual wishes</li>
         </ol>
        </AccordionDetails>
      </Accordion>
      <Accordion  expanded={expanded === 'panel4'}
                onChange={handleChange('panel4')} sx={{ boxShadow: 'none',
          borderBottom: '1px solid #B3B3B3',
          '&:before': {
                      display: 'none', 
                  },
                  marginBottom: '0px',
       }}>
        <AccordionSummary
         
          aria-controls="panel4-content"
          id="panel4-header"
          sx={{
            fontSize:'16px',
            fontWeight:"500",
            marginTop:'12px',
            marginBottom:'12px',
            '&.Mui-expanded': {
               '& .MuiAccordionSummary-expandIcon': {
                   transform: 'rotate(45deg)',
               },
           },
          }}
          expandIcon={
            <Image
            src={'./plus.svg'}
            alt=''
            width={14}
            height={14}
            style={{
                transition: 'transform 0.3s ease',
                minWidth:'14px',
                minHeight:'14px',
                marginLeft:"5px",
                marginRight:"5px",
                transform: expanded === 'panel1' ? 'rotate(45deg)' : 'rotate(0deg)',
            }}
        />
        }
        >
If your employee breaks something, who is responsible?
      </AccordionSummary>
        <AccordionDetails sx={{
         fontSize:'16px',
         fontWeight:'300'
        }}>
          <div className={`${style.list_title}`}>The price of cleaning depends on the following components: <br/> </div>
         <ol className={`${style.accList}`}>
            <li className={`${style.accListItem}`}>The area of the apartment/house</li>
            <li className={`${style.accListItem}`}>The type of service you ordered</li>
            <li className={`${style.accListItem}`}>Your individual wishes</li>
         </ol>
        </AccordionDetails>
      </Accordion>
    
    </div>
  );
}

const FAQ = ()=>{
   return <section className={`${style.faq_section}`}>
   <div className='global_container'>
      <div className={`${style.faq_inner}`}>
         <h3 className={`${style.faq_title}`}>FAQ</h3>
         <div className={`${style.faq_content}`}>
            <AccordionUsage />
         </div>
      </div>
   </div>
   </section>
}
export default FAQ