import React from "react";
import "./herolist.css";
import FlipMove from "react-flip-move";
import { NavLink } from "react-router-dom";

const HeroList = props => {
  return (
    <FlipMove className="herolist">
      {props.heroes.map(val => (
        <NavLink
          to={{
            pathname: `/hero/${val.name}`,
            heroid: val.id
          }}
        >
          <div className="hero-box" key={val.id}>
            <div className="hero-image">
              <img
                src={val.image}
                alt={val.name}
                width="156px"
                height="150px"
              />
            </div>
            <div className="hero-caption">
              <h2>{val.name}</h2>
            </div>
          </div>
        </NavLink>
      ))}
    </FlipMove>
  );
};

export default HeroList;
