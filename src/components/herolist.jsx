import React, { Component } from "react";
import "./herolist.css";

class Herolist extends Component {
  render() {
    return (
      <div>
        <div className="herolist">
          {this.props.heroes.map(val => (
            <div className="hero-box" key={val.id}>
              <div className="hero-image">{val.name}</div>
              <div className="hero-caption">{val.type}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Herolist;
