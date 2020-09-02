//rafce
import React from "react";
import Body from "../../HOCs/Body";

import Spinner from "../../ui/Spinner/Spinner";
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
         <section
            className='dashboard'
            style={{ width: "100%", height: "100%", position: "relative" }}>
            <Spinner />
         </section>
      </Body>
   );
};

export default Dashboard;
