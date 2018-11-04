import React, { Component } from "react";
import fire from "../../firebase";
import HeroSkills from "./HeroSkills";
import HeroStats from "./HeroStats";

class HeroProfile extends Component {
  state = {};

  componentDidMount() {
    const db = fire.firestore();
    db.settings({
      timestampsInSnapshots: true
    });
    // .doc("IFmaqpsXxdHxa5VV3cSQ")
    //.doc(this.props.location.heroid)
    db.collection("heroes")
      .doc("IFmaqpsXxdHxa5VV3cSQ")
      .get()
      .then(querySnapshot => {
        this.setState({
          id: querySnapshot.id,
          name: querySnapshot.data().name,
          type: querySnapshot.data().type,
          ability_passive: querySnapshot.data().ability_passive,
          ability_one: querySnapshot.data().ability_one,
          ability_two: querySnapshot.data().ability_two,
          ability_three: querySnapshot.data().ability_three,
          stats: querySnapshot.data().stats
        });
      });
  }

  render() {
    return (
      <React.Fragment>
        {this.state.name && (
          <div>
            <h1>{this.state.name.toUpperCase()}</h1>
            <h2>{this.state.type}</h2>
            <HeroSkills
              ability_num="passive"
              ability={this.state.ability_passive}
            />
            <HeroSkills ability_num="1" ability={this.state.ability_one} />
            <HeroSkills ability_num="2" ability={this.state.ability_two} />
            <HeroSkills ability_num="3" ability={this.state.ability_three} />
            <HeroStats stats={this.state.stats} />
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default HeroProfile;
