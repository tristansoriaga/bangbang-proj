import React, { Component } from "react";
import "./herolist.css";
import Herofilter from "./herofilter.jsx";

class Herolist extends Component {
  state = {
    heroes: [
      {
        id: 1,
        name: "akai",
        type: "tank"
      },
      {
        id: 2,
        name: "aldous",
        type: "fighter"
      },
      {
        id: 3,
        name: "alice",
        type: "mage"
      },
      {
        id: 4,
        name: "alpha",
        type: "fighter"
      },
      {
        id: 5,
        name: "alucard",
        type: "fighter"
      },
      {
        id: 6,
        name: "angela",
        type: "support"
      },
      {
        id: 7,
        name: "argus",
        type: "fighter"
      },
      {
        id: 8,
        name: "aurora",
        type: "mage"
      }
    ]
  };
  render() {
    return (
      <div>
        <div>
          <Herofilter />
        </div>
        <div className="herolist">
          {this.state.heroes.map(val => (
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
