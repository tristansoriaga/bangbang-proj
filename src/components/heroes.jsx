import React, { Component } from "react";
import _ from "underscore";
import "./heroes.css";
import Herolist from "./herolist.jsx";
import Herofilter from "./herofilter.jsx";
import heroData from "./heroes-data.json";
import fire from "../firebase";
class Heroes extends Component {
  state = {
    filter: "all",
    search: "",
    heroes: {}
  };

  //eventhandlers
  onChangeOption = e => {
    this.setState({ filter: e.target.value });
  };

  onChangeSearch = e => {
    this.setState({ search: e.target.value });
  };

  //lifecycle
  // componentDidMount() {
  //   this.setState({ heroes: heroData.sort() });
  // }

  componentDidMount() {
    /* Create reference to messages in Firebase Database */
    const db = fire.firestore();
    db.settings({
      timestampsInSnapshots: true
    });

    const heroesList = [];
    db.collection("heroes")
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          heroesList.push({
            name: doc.data().name,
            type: doc.data().type,
            image: doc.data().image
          });

          this.setState({
            heroes: heroesList
          });
        });
      });
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
      <div className="heroes">
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
