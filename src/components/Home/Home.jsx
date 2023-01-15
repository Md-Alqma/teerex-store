import React, { useState, useEffect } from "react";
import "./Home.css";
import ProductList from "../ProductList/ProductList";
import Filter from "../Filter/Filter";

function Home() {
  const [productsData, setProductsData] = useState([]);
  useEffect(() => {
    getData().then((data) => setProductsData(data));
  }, []);

  const getData = async () => {
    try {
      const response = await fetch(
        "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json"
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  };

  let filterArray = [];
  const filterData = (filterName) => {
    filterArray.push(filterName);
    console.log(filterArray);
  };

  return (
    <div className="home__container">
      <Filter filterData={filterData} />
      <ProductList productsData={productsData} />
    </div>
  );
}

export default Home;
