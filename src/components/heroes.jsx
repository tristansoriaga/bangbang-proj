import React, { Component } from "react";
import "./heroes.css";
import Herolist from "./herolist.jsx";
import Herofilter from "./herofilter.jsx";

class Heroes extends Component {
  state = {
    filter: "all",
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

  onChangeOption = e => {
    this.setState({ filter: e.target.value });
    console.log(e.target.value);
  };

  render() {
    var heroesFilter = this.state.heroes;
    if (this.state.filter !== "all") {
      heroesFilter = this.state.heroes.filter(option => {
        return option.type === this.state.filter;
      });
    }

    return (
      <div>
        <Herofilter onChangeOption={this.onChangeOption} />
        <Herolist heroes={heroesFilter} />
      </div>
    );
  }
}

export default Heroes;
