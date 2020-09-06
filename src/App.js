// import React, { useState, useEffect } from "react";
// import axios from "axios";

// import Routes from "./Routes";
// // import { is } from "electron-util";
// const { is } = window.require("electron-util");
// const { ipcRenderer } = window.require("electron");

// const App = () => {
//    const [isauth, setIsAuth] = useState(false);
//    const [authUser, setAuthUser] = useState({});
//    const [products, setProducts] = useState([]);
//    const [productsLoading, setProductLoading] = useState(false);

//    useEffect(() => {
//       ipcRenderer.send("get-token", "Gimee");
//       ipcRenderer.on("token-reply", (event, arg) => {
//          if (arg !== undefined) {
//             setIsAuth(true);
//          }
//          console.log(arg);
//       });
//       setProductLoading(true);

//    }, []);

//    return <div style={{ color: "red" }}>Hello chak</div>;
// };

// export default App;

import React, { useEffect, useState } from "react";
import axios from "axios";

import Routes from "./Routes";

// Components
import Titlebar from "./components/ui/Titlebar/TitleBar";
import SideNav from "./components/ui/SideNav/SideNav";
import { darkTheme, lightTheme } from "./components/ui/theme/theme";
import { Login } from "./components/pages/Login/Login";
import Spinner from "./components/ui/Spinner/Spinner";

//css
import "./App.scss";

// electron
const { is } = window.require("electron-util");
const { ipcRenderer } = window.require("electron");
const { darkMode } = window.require("electron-util");

const App = () => {
   const [isauth, setIsAuth] = useState(false);
   const [authUser, setAuthUser] = useState({});
   const [products, setProducts] = useState([]);
   const [productsLoading, setProductLoading] = useState(false);

   useEffect(() => {
      ipcRenderer.send("get-token", "Gimee");
      ipcRenderer.on("token-reply", (event, arg) => {
         if (arg !== undefined) {
            setIsAuth(true);
         }
         console.log(arg);
      });
      setProductLoading(true);
      axios.get("https://dhaushop.herokuapp.com/api/products").then((res) => {
         // console.log(res.data.data);
         setProducts((prev) => {
            setProductLoading(false);
            return [...prev, res.data.data];
         });
      });
   }, []);

   //theme related
   const [themeStyle, setThemeStyle] = useState("");
   const [theme, setTheme] = useState({});
   useEffect(() => {
      if (darkMode.isEnabled) {
         setTheme(darkTheme);
         setThemeStyle("dark");
      } else {
         setTheme(lightTheme);
         setThemeStyle("light");
      }
      if (!is.windows) {
         setTheme(darkTheme);
      }
   }, [theme, themeStyle, darkMode.isEnabled]);

   darkMode.onChange(() => {
      if (themeStyle === "dark") {
         setTheme(lightTheme);
      } else {
         setTheme(darkTheme);
      }
   });

   if (isauth) {
      return (
         <div>
            {productsLoading ? (
               <div
                  style={{
                     backgroundColor: "rgb(22,23,24)",
                     width: "100vw",
                     height: "100vh",
                  }}>
                  <Spinner />
               </div>
            ) : (
               <div>
                  <Titlebar />
                  <SideNav theme={theme} changeTheme={setTheme} />
                  <Routes theme={theme} products={products} setProducts={setProducts} />
               </div>
            )}
         </div>
      );
   } else {
      return (
         <div>
            <div style={{ height: "15px" }}></div>
            <Titlebar />
            <Login setAuth={setIsAuth} />
         </div>
      );
   }
};

export default App;
