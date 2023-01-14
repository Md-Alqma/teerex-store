import React from "react";
import "./Filter.css";
import SingleFilters from "../SIngleFilters/SingleFilters";
function Filter() {
  let colour = [{ name: "Red" }, { name: "Blue" }, { name: "Green" }];
  let gender = [{ name: "Men" }, { name: "Women" }];
  let price = [{ name: "0-Rs250" }, { name: "Rs251-Rs450" }, { name: "Rs450" }];
  let type = [{ name: "Polo" }, { name: "Hoodie" }, { name: "Basic" }];
  return (
    <div className="filter__container">
      <SingleFilters data={colour} title="Colour" />
      <SingleFilters data={gender} title="Gender" />
      <SingleFilters data={price} title="Price" />
      <SingleFilters data={type} title="Type" />
    </div>
  );
}

export default Filter;
