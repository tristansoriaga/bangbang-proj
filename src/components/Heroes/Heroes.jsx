import React, { Component } from "react";
import _ from "underscore";
import HeroList from "./HeroList.jsx";
import HeroFilter from "./HeroFilter.jsx";
import fire from "../../firebase";
import LoadingScreen from "../LoadingScreen/LoadingScreen";

class Heroes extends Component {
  state = {
    isLoading: true,
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

  componentDidMount() {
    const db = fire.firestore();
    db.settings({
      timestampsInSnapshots: true
    });

    const heroesList = [];
    db.collection("heroes")
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          const { name, type, profile_image } = doc.data();
          heroesList.push({
            id: doc.id,
            name: name,
            type: type,
            profile_image: profile_image
          });

          this.setState({
            heroes: heroesList,
            isLoading: false
          });
        });
      });
  }

  render() {
    var heroes = this.state.heroes;
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
      <React.Fragment>
        {this.state.isLoading ? (
          <LoadingScreen isloading={this.state.isLoading} />
        ) : (
          <div className="heroes">
            <HeroFilter
              onChangeSearch={this.onChangeSearch}
              onChangeOption={this.onChangeOption}
            />
            <HeroList heroes={_.sortBy(heroes, "name")} />
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default Heroes;
