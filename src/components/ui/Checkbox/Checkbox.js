import React from "react";
import "./Checkbox.scss";
const Checkbox = (props) => {
   return (
      <div className='checkbox__group'>
         <input type='checkbox' className='checkbox' id='checkbox' />
         <label htmlFor='checkbox' className='checkbox__label'>
            <svg
               className='checkbox__label--moon'
               xmlns='http://www.w3.org/2000/svg'
               className='icon icon-tabler icon-tabler-moon'
               width='22'
               height='22'
               viewBox='0 0 24 24'
               stroke-width='1.5'
               stroke='#f1c40f'
               fill='none'
               stroke-linecap='round'
               stroke-linejoin='round'>
               <path stroke='none' d='M0 0h24v24H0z' />
               <path d='M16.2 4a9.03 9.03 0 1 0 3.9 12a6.5 6.5 0 1 1 -3.9 -12' />
            </svg>
            <svg
               className='checkbox__label__SVG'
               xmlns='http://www.w3.org/2000/svg'
               className='icon icon-tabler icon-tabler-sun'
               width='22'
               height='22'
               viewBox='0 0 24 24'
               stroke-width='1.5'
               stroke='#f39c12'
               fill='none'
               stroke-linecap='round'
               stroke-linejoin='round'>
               <path stroke='none' d='M0 0h24v24H0z' />
               <circle cx='12' cy='12' r='4' />
               <path d='M3 12h1M12 3v1M20 12h1M12 20v1M5.6 5.6l.7 .7M18.4 5.6l-.7 .7M17.7 17.7l.7 .7M6.3 17.7l-.7 .7' />
            </svg>
            <div className='ball'></div>
         </label>
      </div>
   );
};

export default Checkbox;
