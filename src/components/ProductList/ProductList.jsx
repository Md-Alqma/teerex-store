import React, { useState, useEffect } from "react";
import Products from "../Products/Products";
import "./ProductList.css";
function ProductList() {
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

  console.log(productsData);
  return (
    <div className="cards__container">
      {productsData?.map((product, index) => (
        <Products key={index} product={product} />
      ))}
    </div>
  );
}

export default ProductList;
