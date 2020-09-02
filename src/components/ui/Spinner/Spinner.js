import React from "react";
import "./Spinner.scss";

const Spinner = () => {
   return (
      <div class='overlay'>
         <div class='spinner center'>
            <div class='spinner-blade'></div>
            <div class='spinner-blade'></div>
            <div class='spinner-blade'></div>
            <div class='spinner-blade'></div>
            <div class='spinner-blade'></div>
            <div class='spinner-blade'></div>
            <div class='spinner-blade'></div>
            <div class='spinner-blade'></div>
            <div class='spinner-blade'></div>
            <div class='spinner-blade'></div>
            <div class='spinner-blade'></div>
            <div class='spinner-blade'></div>
         </div>
      </div>
   );
};

export default Spinner;
