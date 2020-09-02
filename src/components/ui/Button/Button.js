import React from "react";
import "./Button.scss";
const Button = ({ type = "default", value = "Button", style }) => {
   let btnStyle;
   if (style) {
      btnStyle = style;
   } else {
      btnStyle = {};
   }
   return (
      <div>
         <button style={btnStyle} class={`btn  btn-${type}`}>
            {value}
         </button>
      </div>
   );
};

export default Button;
