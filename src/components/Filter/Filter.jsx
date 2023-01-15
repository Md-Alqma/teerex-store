import React from "react";
import "./Filter.css";
import SingleFilters from "../SIngleFilters/SingleFilters";
function Filter({filterData}) {
  let colour = [{ name: "Red" }, { name: "Blue" }, { name: "Green" }];
  let gender = [{ name: "Men" }, { name: "Women" }];
  let price = [{ name: "0-Rs250" }, { name: "Rs251-Rs450" }, { name: "Rs450" }];
  let type = [{ name: "Polo" }, { name: "Hoodie" }, { name: "Basic" }];

  return (
    <div className="filter__container">
      <SingleFilters filterData={filterData} data={colour} title="Colour" />
      <SingleFilters filterData={filterData} data={gender} title="Gender" />
      <SingleFilters filterData={filterData} data={price} title="Price" />
      <SingleFilters filterData={filterData} data={type} title="Type" />
    </div>
  );
}

export default Filter;
