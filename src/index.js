import React from "react";
import ReactDOM from "react-dom/client";
import FormRegistration from "./App";
import "./index.css";
import { BrowserRouter,Routes,} from "react-router-dom";
import './tailwind.css';
import {Toaster} from "react-hot-toast";




const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <BrowserRouter>
          <FormRegistration/> 
          <Toaster/>
    </BrowserRouter>
);
