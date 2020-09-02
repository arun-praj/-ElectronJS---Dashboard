import React from "react";

const { darkMode } = window.require("electron-util");

const Body = (props) => {
   const style = {
      // backgroundColor: darkMode.isEnabled ? "#212121" : "#ffffff",
      backgroundColor: darkMode.isEnabled ? "rgb(22,23,24)" : "#ffffff",

      width: "100%",
      height: "100%",
      display: "flex",
      overflowY: "auto",
      // position: "relative",
   };

   return (
      <div style={style}>
         <div style={{ display: "block", height: "100vh", minWidth: "225px" }}></div>
         <div style={{ width: "100%" }}>{props.children}</div>
      </div>
   );
};

export default Body;
