import React from "react";
import "./Filter.css";
import SingleFIlters from "../SIngleFilters/SingleFIlters";
function Filter() {
  let colour = [{ name: "Red" }, { name: "Blue" }, { name: "Green" }];
  let gender = [{ name: "Men" }, { name: "Women" }];
  let price = [{ name: "0-Rs250" }, { name: "Rs251-Rs450" }, { name: "Rs450" }];
  let type = [{ name: "Polo" }, { name: "Hoodie" }, { name: "Basic" }];
  return (
    <div className="filter__container">
      <SingleFIlters data={colour} title="Colour" />
      <SingleFIlters data={gender} title="Gender" />
      <SingleFIlters data={price} title="Price" />
      <SingleFIlters data={type} title="Type" />
    </div>
  );
}

export default Filter;
