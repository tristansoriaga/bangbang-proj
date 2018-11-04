import React from "react";
import "./herofilter.css";

const HeroFilter = props => {
  const filterProperties = [
    "tank",
    "fighter",
    "assassin",
    "mage",
    "marksman",
    "support"
  ];
  return (
    <div className="herofilter">
      <div className="filter-options">
        <div className="filter-option">
          <label>Filter</label>
          <input onChange={props.onChangeSearch} />
          <select defaultValue="all" onChange={props.onChangeOption}>
            <option value="all">All</option>
            {filterProperties.map(val => (
              <option key={val} value={val}>
                {val}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default HeroFilter;
