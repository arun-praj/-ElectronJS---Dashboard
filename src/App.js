import React, { useEffect, useState } from "react";

import Routes from "./Routes";

// Components
import Titlebar from "./components/ui/Titlebar/TitleBar";
import SideNav from "./components/ui/SideNav/SideNav";
import { darkTheme, lightTheme } from "./components/ui/theme/theme";
import { Login, loadUser } from "./components/pages/Login/Login";
//css
import "./App.scss";

// electron
const { darkMode } = window.require("electron-util");

const App = () => {
   const [isauth, setIsAuth] = useState(false);
   useEffect(() => {
      loadUser(setIsAuth);
   }, []);

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
      // darkMode.isEnabled ? setTheme(darkTheme) : setTheme(lightTheme);
   }, [theme, themeStyle, darkMode.isEnabled]);

   darkMode.onChange(() => {
      if (themeStyle === "dark") {
         setTheme(lightTheme);
      } else {
         setTheme(darkTheme);
      }
   });

   console.log(isauth);
   if (isauth) {
      return (
         <div>
            <div style={{ height: "15px" }}></div>
            <Titlebar />
            <SideNav theme={theme} changeTheme={setTheme} />
            <Routes theme={theme} />
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
