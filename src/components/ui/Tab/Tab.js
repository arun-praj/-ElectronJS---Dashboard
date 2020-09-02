import React from "react";
import "./Tab.scss";
const Tab = () => {
   return (
      <div className='tab'>
         <div class='tab__btn'>
            <svg
               xmlns='http://www.w3.org/2000/svg'
               class='icon icon-tabler icon-tabler-list'
               width='18'
               height='18'
               viewBox='0 0 24 24'
               stroke-width='1.5'
               stroke='#ffffff'
               fill='none'
               stroke-linecap='round'
               stroke-linejoin='round'>
               <path stroke='none' d='M0 0h24v24H0z' />
               <line x1='9' y1='6' x2='20' y2='6' />
               <line x1='9' y1='12' x2='20' y2='12' />
               <line x1='9' y1='18' x2='20' y2='18' />
               <line x1='5' y1='6' x2='5' y2='6.01' />
               <line x1='5' y1='12' x2='5' y2='12.01' />
               <line x1='5' y1='18' x2='5' y2='18.01' />
            </svg>
         </div>
         <div class='tab__btn'></div>
      </div>
   );
};

export default Tab;
