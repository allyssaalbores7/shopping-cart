/* eslint-env browser */
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

const container = document.getElementById("root");

const root = ReactDOM.createRoot(container);

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
