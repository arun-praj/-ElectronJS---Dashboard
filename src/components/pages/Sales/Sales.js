import React from "react";

import Bump from "../../Charts/Bump/Bump";
import Body from "../../HOCs/Body";
import Tab from "../../ui/Tab/Tab";

const Sales = () => {
   return (
      <Body>
         {/* <div style={{ color: "#ffffff", fontSize: "16px", opacity: "0.7" }}>Sales Chart</div> */}
         <Tab />
         <div
            className='sales__container'
            style={{ padding: "16px", display: "flex", justifyContent: "center" }}>
            <div
               style={{
                  width: "95%",
                  height: "500px",
                  backgroundColor: "#212121",
                  borderRadius: "10px",
                  //   color: "#ffffff",
               }}>
               <Bump />
            </div>
         </div>
      </Body>
   );
};

export default Sales;
