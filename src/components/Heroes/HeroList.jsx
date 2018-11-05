import React from "react";
import "./herolist.css";
import _ from "underscore.string";
import FlipMove from "react-flip-move";
import { NavLink } from "react-router-dom";

const HeroList = props => {
  return (
    <FlipMove className="herolist">
      {props.heroes.map(val => (
        <div key={val.id}>
          <NavLink
            to={{
              pathname: `/hero/${val.name}`,
              heroid: val.id
            }}
            style={{ textDecoration: "none", color: "white" }}
          >
            <div className="hero-box">
              <div className="hero-image">
                <img
                  src={val.image}
                  alt={val.name}
                  width="156px"
                  height="150px"
                />
              </div>
              <div className="hero-caption">
                <h2>{_.capitalize(val.name)}</h2>
              </div>
            </div>
          </NavLink>
        </div>
      ))}
    </FlipMove>
  );
};

export default HeroList;
