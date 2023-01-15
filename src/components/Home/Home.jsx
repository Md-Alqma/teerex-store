import React, { useState, useEffect, useRef } from "react";
import "./Home.css";
import ProductList from "../ProductList/ProductList";
import Filter from "../Filter/Filter";
import { useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

function Home() {
  const searchData = useRef();
  let navigate = useNavigate();
  let [searchParams, setSearchParams] = useSearchParams();
  let searchResult = searchParams.get("query");
  const [productsData, setProductsData] = useState([]);
  useEffect(() => {
    getData();
  }, [searchParams]);

  const getData = async () => {
    let response = await fetch(
      "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json"
    );
    let data = await response.json();
    if (searchResult) {
      data = data.filter((item) => {
        searchResult = searchResult.toLowerCase();
        return (
          item.color.toLowerCase().includes(searchResult) ||
          item.name.toLowerCase().includes(searchResult) ||
          item.type.toLowerCase().includes(searchResult)
        );
      });
    }
    setProductsData(data);
  };
  return (
    <>
      <div>
        <input ref={searchData} type="text" placeholder="search" />
        <button
          onClick={() => {
            navigate(`/?query=${searchData.current.value}`);
          }}>
          search
        </button>
      </div>
      <div className="home__container">
        <Filter />
        <ProductList productsData={productsData} />
      </div>
    </>
  );
}

export default Home;
