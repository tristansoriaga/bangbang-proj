import React, { Component } from "react";
import "./herofilter.css";

class HeroFilter extends Component {
  render() {
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
            <input onChange={this.props.onChangeSearch} />
            <select defaultValue="all" onChange={this.props.onChangeOption}>
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
  }
}

export default HeroFilter;
