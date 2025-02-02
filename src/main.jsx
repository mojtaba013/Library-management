import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import "./index.css";
import { cssTransition, ToastContainer } from "react-toastify";
import BookList from "./components/BooksList";



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
 
    <ToastContainer toastStyle={{ fontFamily: "iranyekan" }}/>
  </React.StrictMode>
);
