import React, { Component } from "react";
import "./herolist.css";
import FlipMove from "react-flip-move";
import { NavLink } from "react-router-dom";

class HeroList extends Component {
  onMouseEnterHandler = () => {};
  render() {
    return (
      <FlipMove className="herolist">
        {this.props.heroes.map(val => (
          <div
            className="hero-box"
            key={val.id}
            onMouseEnter={this.onMouseEnterHandler}
          >
            <NavLink
              to={{
                pathname: `/hero/${val.name}`,
                heroid: val.id
              }}
            >
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
            </NavLink>
          </div>
        ))}
      </FlipMove>
    );
  }
}

export default HeroList;
