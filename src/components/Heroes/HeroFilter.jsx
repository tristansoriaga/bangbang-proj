import React from "react";
import styled from "styled-components";

const DivHeroFilter = styled.div`
  font-family: fantasy;
  font-weight: bold;
  font-size: 1em;
  text-align: center;
  padding: 2em 0;
`;

const filterProperties = [
  "tank",
  "fighter",
  "assassin",
  "mage",
  "marksman",
  "support"
];

const HeroFilter = props => {
  return (
    <DivHeroFilter>
      <label style={{ marginRight: "1em" }}>Filter</label>
      <input style={{ marginRight: "1em" }} onChange={props.onChangeSearch} />
      <select
        style={{ width: "80px" }}
        defaultValue="all"
        onChange={props.onChangeOption}
      >
        <option value="all">All</option>
        {filterProperties.map(val => (
          <option key={val} value={val}>
            {val}
          </option>
        ))}
      </select>
    </DivHeroFilter>
  );
};

export default HeroFilter;
