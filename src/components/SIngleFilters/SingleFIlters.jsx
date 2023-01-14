import React from "react";
import "./SingleFilters.css";
function SingleFIlters({ data, title }) {
  return (
    <div>
      <h3>{title}</h3>
      <div className="wrapper">
        {data?.map((el) => (
          <div className="switch_box box">
            <input type="checkbox" className="switch" />
            <label>{el.name}</label>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SingleFIlters;
