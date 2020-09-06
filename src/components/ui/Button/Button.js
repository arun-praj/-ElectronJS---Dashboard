import React from "react";
import "./Button.scss";
const Button = ({ type = "default", value = "Button", style, onclick }) => {
   let btnStyle;
   if (style) {
      btnStyle = style;
   } else {
      btnStyle = {};
   }
   return (
      <div>
         <button style={btnStyle} className={`btn  btn-${type}`} onClick={(e) => onclick(e)}>
            {value}
         </button>
      </div>
   );
};

export default Button;
