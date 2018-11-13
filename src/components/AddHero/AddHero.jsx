import React, { Component } from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import fire from "../../firebase";
import AddInfoForm from "./AddInfoForm";
import AddAbilityForm from "./AddAbilityForm";
import AddSkinsForm from "./AddSkinsForm";

const DivAddHero = styled.div`
  background-color: white;
  padding: 5em 7em;
`;
class AddHero extends Component {
  state = {
    name: "",
    image: "",
    bg_img: "",
    background_story: "",
    type: "",
    theme: "",
    ability_passive: {
      name: "",
      description: "",
      image: ""
    },
    ability_one: {
      name: "",
      description: "",
      image: "",
      manacost: 0,
      cooldown: 0
    },
    ability_two: {
      name: "",
      description: "",
      image: "",
      manacost: 0,
      cooldown: 0
    },
    ability_three: {
      name: "",
      description: "",
      image: "",
      manacost: 0,
      cooldown: 0
    },
    skins: [{ name: "", image: "" }]
  };

  /*Add skins eventhandlers*/
  handleSkinNameChange = idx => e => {
    const newskins = this.state.skins.map((skin, sidx) => {
      if (idx !== sidx) return skin;
      return { ...skin, name: e.target.value };
    });

    this.setState({ skins: newskins });
  };

  handleSkinImageChange = idx => e => {
    const newskins = this.state.skins.map((skin, sidx) => {
      if (idx !== sidx) return skin;
      return { ...skin, image: e.target.value };
    });

    this.setState({ skins: newskins });
  };

  handleAddSkin = () => {
    this.setState({
      skins: this.state.skins.concat([{ name: "", image: "" }])
    });
  };

  handleRemoveSkin = idx => () => {
    if (idx >= 1) {
      this.setState({
        skins: this.state.skins.filter((s, sidx) => idx !== sidx)
      });
    }
  };

  /*Add info eventhandlers*/
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleAbilityPassiveChange = e => {
    this.setState({
      ability_passive: {
        ...this.state.ability_passive,
        [e.target.name]: e.target.value
      }
    });
  };

  handleAbilityOneChange = e => {
    if (e.target.name === "manacost" || e.target.name === "cooldown") {
      this.setState({
        ability_one: {
          ...this.state.ability_one,
          [e.target.name]: parseInt(e.target.value)
        }
      });
    } else {
      this.setState({
        ability_one: {
          ...this.state.ability_one,
          [e.target.name]: e.target.value
        }
      });
    }
  };

  handleAbilityTwoChange = e => {
    if (e.target.name === "manacost" || e.target.name === "cooldown") {
      this.setState({
        ability_two: {
          ...this.state.ability_two,
          [e.target.name]: parseInt(e.target.value)
        }
      });
    } else {
      this.setState({
        ability_two: {
          ...this.state.ability_two,
          [e.target.name]: e.target.value
        }
      });
    }
  };

  handleAbilityThreeChange = e => {
    if (e.target.name === "manacost" || e.target.name === "cooldown") {
      this.setState({
        ability_three: {
          ...this.state.ability_three,
          [e.target.name]: parseInt(e.target.value)
        }
      });
    } else {
      this.setState({
        ability_three: {
          ...this.state.ability_three,
          [e.target.name]: e.target.value
        }
      });
    }
  };

  /*Submit Event Handler*/
  handleSubmit = e => {
    e.preventDefault();
    const db = fire.firestore();
    db.settings({
      timestampsInSnapshots: true
    });
    db.collection("heroes")
      .doc(this.state.name)
      .set({
        name: this.state.name.toLowerCase(),
        image: this.state.image,
        bg_img: this.state.bg_img,
        background_story: this.state.background_story,
        type: this.state.type,
        theme: this.state.theme,
        ability_passive: {
          name: this.state.ability_passive.name,
          description: this.state.ability_passive.description,
          image: this.state.ability_passive.image
        },
        ability_one: {
          name: this.state.ability_one.name,
          description: this.state.ability_one.description,
          image: this.state.ability_one.image,
          manacost: this.state.ability_one.manacost,
          cooldown: this.state.ability_one.cooldown
        },
        ability_two: {
          name: this.state.ability_two.name,
          description: this.state.ability_two.description,
          image: this.state.ability_two.image,
          manacost: this.state.ability_two.manacost,
          cooldown: this.state.ability_two.cooldown
        },
        ability_three: {
          name: this.state.ability_three.name,
          description: this.state.ability_three.description,
          image: this.state.ability_three.image,
          manacost: this.state.ability_three.manacost,
          cooldown: this.state.ability_three.cooldown
        },
        skins: this.state.skins
      })
      .then(function() {
        console.log("Document successfully written!");
      })
      .catch(function(error) {
        console.error("Error writing document: ", error);
      });
  };

  render() {
    return (
      <DivAddHero>
        <h1 style={{ margin: 8 }}>Add Hero</h1>
        <form onSubmit={this.handleSubmit}>
          <AddInfoForm state={this.state} onHandleChange={this.handleChange} />
          <AddAbilityForm
            onHandleAbilityPassiveChange={this.handleAbilityPassiveChange}
            onHandleAbilityOneChange={this.handleAbilityOneChange}
            onHandleAbilityTwoChange={this.handleAbilityTwoChange}
            onHandleAbilityThreeChange={this.handleAbilityThreeChange}
          />
          <AddSkinsForm
            state={this.state}
            onHandleSkinNameChange={e => this.handleSkinNameChange(e)}
            onHandleSkinImageChange={e => this.handleSkinImageChange(e)}
            onHandleAddSkinChange={this.handleAddSkin}
            onHandleRemoveSkin={e => this.handleRemoveSkin(e)}
          />
          <hr style={{ margin: "50px 0" }} />
          <Button
            type="submit"
            style={{
              textAlign: "right",
              margin: "0 auto",
              display: "block"
            }}
            variant="contained"
            color="secondary"
          >
            Submit
          </Button>
        </form>
      </DivAddHero>
    );
  }
}

export default AddHero;
