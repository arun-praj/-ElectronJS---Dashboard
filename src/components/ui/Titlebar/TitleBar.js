import React, { useState, useEffect } from "react";
import "./TitleBar.scss";
const { is } = window.require("electron-util");
const { ipcRenderer } = window.require("electron");
const TitleBar = () => {
   const [internetStatus, setInternetStatus] = useState("checking");
   useEffect(() => {
      ipcRenderer.send("giveMeInternetStatus", "Hey main, give me internet status");
      const timer = setInterval(() => {
         // console.log("This will run after 1 second!");
         ipcRenderer.send("giveMeInternetStatus", "Hey main, give me internet status");
      }, 1000 * 30);
      return () => clearInterval(timer);
   }, []);

   ipcRenderer.on("statusReply", (event, args) => {
      setInternetStatus(args ? "Online" : "Offline");
   });
   let style, circleStyle;
   if (internetStatus === "Online") {
      style = {
         color: "#22bb33",
         // backgroundColor: "#22bb33",
         filter: "brightness(1)",
      };
      circleStyle = {
         backgroundColor: "#22bb33",
      };
   } else if (internetStatus === "Offline") {
      style = {
         color: "red",
         // backgroundColor: "red",
      };
      circleStyle = {
         backgroundColor: "#22bb33",
      };
   }

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
            }}>
            <div style={style} className='titlebar__status'>
               <div className='titlebar__text'>{internetStatus}</div>
            </div>
         </div>
      );
   } else {
      return <div></div>;
   }
};
export default TitleBar;
