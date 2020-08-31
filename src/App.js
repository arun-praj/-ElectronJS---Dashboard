import React, { useEffect, useState } from "react";

import Routes from "./Routes";

//Components
import Titlebar from "./components/ui/Titlebar/TitleBar";
import SideNav from "./components/ui/SideNav/SideNav";
import { darkTheme, lightTheme } from "./components/ui/theme/theme";
import Body from "./components/HOCs/Body";
//css
import "./App.scss";

//electron
const { darkMode } = require("electron-util");

const App = () => {
   const [themeStyle, setThemeStyle] = useState("");
   const [theme, setTheme] = useState({});
   // console.log(darkMode.isEnabled);
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

   return (
      <>
         <Titlebar />
         <SideNav theme={theme} changeTheme={setTheme} />
         <Routes theme={theme} />
         <Body theme={theme} />
      </>
   );
};

export default App;
