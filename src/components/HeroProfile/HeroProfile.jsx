import React, { Component } from "react";
import styled from "styled-components";
import fire from "../../firebase";
import LoadingScreen from "../LoadingScreen/LoadingScreen";
import HeroBackground from "./HeroBackground";
import HeroSkills from "./HeroSkills";
import HeroSkins from "./HeroSkins";
class HeroProfile extends Component {
  state = { isLoading: true };

  componentDidMount() {
    const db = fire.firestore();
    db.settings({
      timestampsInSnapshots: true
    });

    db.collection("heroes")
      .doc(this.props.match.params.name)
      .get()
      .then(querySnapshot => {
        const {
          name,
          type,
          background_image,
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
          background_image,
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
      border: 1px solid #272521;
    `;
    const DivContentAbility = styled.div`
      background-color: #edd7a6;
      display: grid;
      grid-template-columns: auto auto auto auto;
      grid-gap: 3em;
      padding: 5em 7em;
    `;
    const DivContentSkins = styled.div`
      background-color: #271912;
      padding: 5em 2em 2em;
    `;

    return (
      <React.Fragment>
        {this.state.isLoading ? (
          <LoadingScreen isloading={this.state.isLoading} />
        ) : (
          <DivHeroProfile>
            <HeroBackground state={this.state} />

            <DivContentAbility>
              <HeroSkills ability_type="passive" ability_num="ability_passive" ability={this.state.ability_passive} />
              <HeroSkills ability_type="1" ability_num="ability_one" ability={this.state.ability_one} />
              <HeroSkills ability_type="2" ability_num="ability_two" ability={this.state.ability_two} />
              <HeroSkills ability_type="3" ability_num="ability_three" ability={this.state.ability_three} />
            </DivContentAbility>

            <DivContentSkins>
              <HeroSkins skins={this.state.skins} />
            </DivContentSkins>
          </DivHeroProfile>
        )}
      </React.Fragment>
    );
  }
}

export default HeroProfile;
