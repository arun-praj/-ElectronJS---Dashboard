import React from "react";
import { render } from "react-dom";
import { HashRouter } from "react-router-dom";
import { ToastContainer, Slide } from "react-toastify";

//css
import "react-toastify/dist/ReactToastify.css";

import App from "./App";

// Since we are using HtmlWebpackPlugin WITHOUT a template, we should create our own root node in the body element before rendering into it
let root = document.createElement("div");

root.id = "root";
document.body.appendChild(root);

// Now we can render our application into it
render(
   <HashRouter>
      <App />
      <ToastContainer transition={Slide} />
   </HashRouter>,
   document.getElementById("root")
);
