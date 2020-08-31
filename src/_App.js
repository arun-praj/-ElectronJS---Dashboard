import React, { useEffect, useState } from "react";

//data
// import Data from "../data/dummy.json";

const electron = window.require("electron");
const ipcRenderer = electron.ipcRenderer;
const os = require("os");
const fs = window.require("fs");
const path = require("path");

const App = () => {
   const [persons, setPersons] = useState([]);
   useEffect(() => {
      const res = fs.readFileSync("src/components/dummy.json", "utf8");

      setPersons(...persons, JSON.parse(res));
   }, []);
   console.log(electron);
   return (
      <div className='app'>
         <h1 onClick={(e) => showFilePath()}>React Electron Boilerplate</h1>
         <p>{os.homedir()}</p>
         <div>
            {persons.map((person) => {
               return <li key={person._id}>{person.name}</li>;
            })}
         </div>
      </div>
   );
};

export default App;
