import React, { Component } from "react";
import "./herolist.css";
import FlipMove from "react-flip-move";

class Herolist extends Component {
  onMouseEnterHandler = () => {};
  render() {
    return (
      <FlipMove className="herolist">
        {this.props.heroes.map((val, index) => (
          <div
            className="hero-box"
            key={index}
            onMouseEnter={this.onMouseEnterHandler}
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
          </div>
        ))}
      </FlipMove>
    );
  }
}

export default Herolist;