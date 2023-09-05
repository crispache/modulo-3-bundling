
import React from "react";
import { createRoot } from "react-dom/client";
import { HelloComponent } from "./components/hello/helloComponent";
import { ByeComponent } from "./components/bye/byeComponent";
import logo from "./assets/logo_1.png";


const root = createRoot(document.getElementById("root"));
root.render(
  <div>
    <h1>Hola Mundo</h1>
    <img src={logo} alt="Logo" width="200" height="200" />
    <HelloComponent />
    <br/>
    <br/>
    <ByeComponent /> 
  </div>
);