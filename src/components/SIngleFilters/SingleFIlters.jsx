import React from "react";
import "./SingleFilters.css";
function SingleFilters({ data, title }) {
  return (
    <div>
      <h3>{title}</h3>
      <div className="wrapper">
        {data?.map((el, index) => (
          <div key={index} className="switch_box box">
            <input type="checkbox" className="switch" />
            <label>{el.name}</label>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SingleFilters;
