import React, { Component } from "react";
import fire from "../../firebase";
import HeroSkills from "./HeroSkills";
import HeroStats from "./HeroStats";
import { ScaleLoader } from "react-spinners";
class HeroProfile extends Component {
  state = { isLoading: true };

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
        const {
          name,
          type,
          ability_passive,
          ability_one,
          ability_two,
          ability_three,
          stats
        } = querySnapshot.data();
        this.setState({
          id: querySnapshot.id,
          name: name,
          type: type,
          ability_passive: ability_passive,
          ability_one: ability_one,
          ability_two: ability_two,
          ability_three: ability_three,
          stats: stats,
          isLoading: false
        });
      });
  }

  render() {
    return (
      <React.Fragment>
        <ScaleLoader
          className="loading"
          sizeUnit={"px"}
          size={10}
          color={"black"}
          loading={this.state.isLoading}
        />
        {this.state.isLoading === false && (
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
