import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import {CartContext} from "./Context/CartContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CartContext>
    <Router>
      <App />
    </Router>
  </CartContext>
);
