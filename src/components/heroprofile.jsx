import React, { Component } from "react";
import fire from "../firebase";

class HeroProfile extends Component {
  state = {};

  componentDidMount() {
    const db = fire.firestore();
    db.settings({
      timestampsInSnapshots: true
    });

    db.collection("heroes")
      .doc("IFmaqpsXxdHxa5VV3cSQ")
      .get()
      .then(querySnapshot => {
        this.setState({
          id: querySnapshot.id,
          name: querySnapshot.data().name,
          ability_passive: querySnapshot.data().ability_passive,
          ability_one: querySnapshot.data().ability_one,
          ability_two: querySnapshot.data().ability_two,
          ability_three: querySnapshot.data().ability_three
        });
      });
  }

  render() {
    return (
      <div>
        <h1>Name</h1>
        <h1>Skill</h1>
        {/* <p>{this.state.ability_passive}</p> */}
        <p>description 2</p>
        <p>description 3</p>
        <p>description 4</p>
        <h1>Stats</h1>
        <p>Movement</p>
        <p>Mana</p>
        <p>Physical Attack</p>
        <p>Attack Speed</p>
        <p>Magic Power</p>
        <p>HP Regen</p>
        <p>Armor</p>
        <p>Mana Regen</p>
        <p>Magic Resistance</p>
        <p>Physical Crit Rate</p>
        <p>Ability Crit Rate</p>
        <p>HP</p>
      </div>
    );
  }
}

export default HeroProfile;
