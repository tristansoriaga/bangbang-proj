import React, { Component } from "react";
import _ from "underscore";
import "./heroes.css";
import Herolist from "./herolist.jsx";
import Herofilter from "./herofilter.jsx";
import heroData from "./heroes.json";

class Heroes extends Component {
  state = {
    filter: "all",
    search: "",
    heroes: []
  };

  //eventhandlers
  onChangeOption = e => {
    this.setState({ filter: e.target.value });
  };

  onChangeSearch = e => {
    this.setState({ search: e.target.value });
  };

  //lifecycle
  componentDidMount() {
    this.setState({ heroes: heroData.sort() });
  }

  render() {
    var heroes = _.sortBy(this.state.heroes, "name");

    if (this.state.filter !== "all") {
      heroes = heroes.filter(val => {
        return val.type === this.state.filter;
      });
    }

    if (this.state.search !== "") {
      heroes = heroes.filter(val => {
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
