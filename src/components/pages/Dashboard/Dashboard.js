//rafce
import React from "react";
import Body from "../../HOCs/Body";
// import { screen } from "electron";
const { remote } = window.require("electron");
const { screen } = remote;
//css
import "./Dashboard.scss";
const Dashboard = () => {
   // console.log(screenSize);
   console.log(screen.getPrimaryDisplay());
   return (
      <Body>
         <section className='dashboard' style={{ color: "white" }}></section>
      </Body>
   );
};

export default Dashboard;
