import React, { Component } from "react";
import "./heroes.css";
import Herolist from "./herolist.jsx";
import Herofilter from "./herofilter.jsx";

class Heroes extends Component {
  state = {
    filter: "all",
    search: "",
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
  };

  onChangeSearch = e => {
    this.setState({ search: e.target.value });
  };

  render() {
    var heroes = this.state.heroes;

    if (this.state.filter !== "all") {
      heroes = this.state.heroes.filter(val => {
        return val.type === this.state.filter;
      });
    }

    if (this.state.search !== "") {
      heroes = this.state.heroes.filter(val => {
        return (
          val.name
            .toLocaleLowerCase()
            .indexOf(this.state.search.toLowerCase()) !== -1
        );
      });
    }

    return (
      <div>
        <Herofilter
          onChangeSearch={this.onChangeSearch}
          onChangeOption={this.onChangeOption}
        />
        <Herolist heroes={heroes} />
      </div>
    );
  }
}

export default Heroes;
