import React from "react";
import { is } from "electron-util";
import "./TitleBar.scss";
const TitleBar = () => {
   console.log(is.macos);
   // is.macos
   return (
      is.macos && (
         <div
            className='titlebar'
            style={{
               backgroundColor: "rgb(22,23,24)",
               color: "#ffffff",
               textAlign: "center",
            }}></div>
      )
   );
};
export default TitleBar;
