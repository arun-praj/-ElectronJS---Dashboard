import React from "react";
import "./Spinner.scss";

const Spinner = () => {
   return (
      <div className='overlay'>
         <div className='spinner center'>
            <div className='spinner-blade'></div>
            <div className='spinner-blade'></div>
            <div className='spinner-blade'></div>
            <div className='spinner-blade'></div>
            <div className='spinner-blade'></div>
            <div className='spinner-blade'></div>
            <div className='spinner-blade'></div>
            <div className='spinner-blade'></div>
            <div className='spinner-blade'></div>
            <div className='spinner-blade'></div>
            <div className='spinner-blade'></div>
            <div className='spinner-blade'></div>
         </div>
      </div>
   );
};

export default Spinner;
