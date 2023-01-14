import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Cart from "./components/Cart/Cart";
import Home from "./components/Home/Home";
function App() {
  return (
      <div className="App">
        {/*-------- Navbar Component --------*/}
        <Navbar />
        {/*-------- Routings Setup --------*/}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
  );
}

export default App;
