import React, { Component } from "react";
import "./herolist.css";
import FlipMove from "react-flip-move";

class Herolist extends Component {
  render() {
    return (
      <FlipMove className="herolist">
        {this.props.heroes.map(val => (
          <div className="hero-box" key={val.id}>
            <div className="hero-image">
              <img
                src={val.image}
                alt={val.name}
                width="104px"
                height="100px"
              />
            </div>
            <div className="hero-caption">{val.name}</div>
          </div>
        ))}
      </FlipMove>
    );
  }
}

export default Herolist;
