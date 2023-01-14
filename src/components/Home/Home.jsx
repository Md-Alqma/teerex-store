import React from "react";
import "./Home.css";
import ProductList from "../ProductList/ProductList";
import Filter from "../Filter/Filter";
function Home() {
  return (
    <div className="home__container">
      <Filter />
      <ProductList />
    </div>
  );
}

export default Home;
