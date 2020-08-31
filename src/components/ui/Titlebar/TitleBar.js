import React from "react";
import "./TitleBar.scss";
const { is } = window.require("electron-util");

const TitleBar = () => {
   // console.log(is.macos);
   if (is.macos) {
      return (
         <div
            className='titlebar'
            style={{
               backgroundColor: "rgb(22,23,24)",
               color: "#ffffff",
               textAlign: "center",
               position: "absolute",
               top: "0",
            }}></div>
      );
   } else {
      return <div></div>;
   }
};
export default TitleBar;
