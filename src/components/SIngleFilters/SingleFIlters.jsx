import React from "react";
import "./SingleFilters.css";
function SingleFilters({ data, title, filterData }) {
  return (
    <div>
      <h3 className="filter__title">{title}</h3>
      <div className="wrapper">
        {data?.map((el, index) => (
          <div key={index} className="switch_box box">
            <input
              onChange={(e) => {
                filterData(e.target.value);
              }}
              value={el.name}
              type="checkbox"
              className="switch"
            />
            <label>{el.name}</label>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SingleFilters;
