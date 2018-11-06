import React, { Component } from "react";
import styled from "styled-components";
import fire from "../../firebase";
import HeroSkills from "./HeroSkills";
import HeroStats from "./HeroStats";
import LoadingScreen from "../LoadingScreen/LoadingScreen";
import HeroBackground from "./HeroBackground";
import HeroSkins from "./HeroSkins";
class HeroProfile extends Component {
  state = { isLoading: true };

  componentDidMount() {
    const db = fire.firestore();
    db.settings({
      timestampsInSnapshots: true
    });

    db.collection("heroes")
      .doc(this.props.location.heroid)
      //.doc("IFmaqpsXxdHxa5VV3cSQ")
      //.doc("R9jzwNum54aPSgCxOP4c")
      .get()
      .then(querySnapshot => {
        const {
          name,
          type,
          bg_img,
          ability_passive,
          ability_one,
          ability_two,
          ability_three,
          stats,
          background_story,
          theme,
          skins
        } = querySnapshot.data();
        this.setState({
          id: querySnapshot.id,
          name,
          type,
          bg_img,
          ability_passive,
          ability_one,
          ability_two,
          ability_three,
          stats,
          background_story,
          skins,
          theme,
          isLoading: false
        });
      });
  }

  render() {
    const DivHeroProfile = styled.div`
      font-family: fantasy;
      font-weight: bold;
      font-size: 1em;
      text-align: center;
      color: black;
    `;
    const DivContentAbility = styled.div`
      background-color: #edd7a6;
      display: grid;
      grid-template-columns: auto auto auto auto;
      grid-gap: 3em;
      padding: 5em 7em;
    `;
    const DivContentSkins = styled.div`
      background-color: #1a0d06;
      padding: 5em 7em;
    `;
    const DivContentStats = styled.div`
      background-color: #1a0d06;
      padding: 5em 7em;
    `;
    return (
      <React.Fragment>
        {this.state.isLoading ? (
          <LoadingScreen isloading={this.state.isLoading} />
        ) : (
          <DivHeroProfile>
            <HeroBackground state={this.state} />

            <DivContentAbility>
              <HeroSkills
                ability_num="passive"
                ability={this.state.ability_passive}
              />
              <HeroSkills ability_num="1" ability={this.state.ability_one} />
              <HeroSkills ability_num="2" ability={this.state.ability_two} />
              <HeroSkills ability_num="3" ability={this.state.ability_three} />
            </DivContentAbility>

            <DivContentSkins>
              <HeroSkins skins={this.state.skins} />
            </DivContentSkins>

            {/* <DivContentStats>
              <HeroStats stats={this.state.stats} />
            </DivContentStats> */}
          </DivHeroProfile>
        )}
      </React.Fragment>
    );
  }
}

export default HeroProfile;
