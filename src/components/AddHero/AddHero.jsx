import React, { Component } from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import fire from "../../firebase";
import AddInfoForm from "./AddInfoForm";
import AddAbilityForm from "./AddAbilityForm";
import AddSkinsForm from "./AddSkinsForm";
import CustomizedSnackbars from "../Snackbar/Snackbar";

const DivAddHero = styled.div`
  background-color: white;
  padding: 5em 7em;
`;
class AddHero extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }
  state = {
    open: false,
    name: "",
    profile_image: "",
    background_image: "",
    background_story: "",
    type: "",
    theme: "",
    ability_passive: {
      ability_passive_name: "",
      ability_passive_description: "",
      ability_passive_image: ""
    },
    ability_one: {
      ability_one_name: "",
      ability_one_description: "",
      ability_one_image: "",
      ability_one_manacost: 0,
      ability_one_cooldown: 0
    },
    ability_two: {
      ability_two_name: "",
      ability_two_description: "",
      ability_two_image: "",
      ability_two_manacost: 0,
      ability_two_cooldown: 0
    },
    ability_three: {
      ability_three_name: "",
      ability_three_description: "",
      ability_three_image: "",
      ability_three_manacost: 0,
      ability_three_cooldown: 0
    },
    skins: [{ name: "", image: "" }]
  };

  componentDidMount() {
    if (this.props.match.params.id) {
      console.log("asdf");
      const db = fire.firestore();
      db.settings({
        timestampsInSnapshots: true
      });

      db.collection("heroes")
        .doc(this.props.match.params.id)
        .get()
        .then(querySnapshot => {
          const {
            name,
            profile_image,
            background_image,
            background_story,
            type,
            theme,
            ability_passive,
            ability_one,
            ability_two,
            ability_three,
            skins
          } = querySnapshot.data();
          this.setState({
            id: querySnapshot.id,
            name,
            profile_image,
            background_image,
            background_story,
            type,
            theme,
            ability_passive,
            ability_one,
            ability_two,
            ability_three,
            skins
          });
        });
    }
  }

  /*Add skins eventhandlers*/
  handleSkinNameChange = idx => e => {
    const newskins = this.state.skins.map((skin, sidx) => {
      if (idx !== sidx) return skin;
      return { ...skin, name: e.target.value };
    });

    this.setState({ skins: newskins });
  };

  handleSkinUpload = (url, idx) => {
    const newskins = this.state.skins.map((skin, sidx) => {
      if (idx !== sidx) return skin;
      return { ...skin, image: url };
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

  handleImageUpload = (imgType, url) => {
    if (imgType === "background") this.setState({ background_image: url });
    else if (imgType === "profile_image") this.setState({ profile_image: url });
    else
      switch (imgType) {
        case "ability_one":
          this.setState({
            ability_one: {
              ...this.state.ability_one,
              ability_one_image: url
            }
          });
          break;
        case "ability_two":
          this.setState({
            ability_two: {
              ...this.state.ability_two,
              ability_two_image: url
            }
          });
          break;
        case "ability_three":
          this.setState({
            ability_three: {
              ...this.state.ability_three,
              ability_three_image: url
            }
          });
          break;
        default:
          this.setState({
            ability_passive: {
              ...this.state.ability_passive,
              ability_passive_image: url
            }
          });
      }
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
    if (e.target.name === "ability_one_manacost" || e.target.name === "ability_one_cooldown") {
      this.setState({
        ability_one: {
          ...this.state.ability_one,
          [e.target.name]: parseFloat(e.target.value)
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
    if (e.target.name === "ability_two_manacost" || e.target.name === "ability_two_cooldown") {
      this.setState({
        ability_two: {
          ...this.state.ability_two,
          [e.target.name]: parseFloat(e.target.value)
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
    if (e.target.name === "ability_three_cooldown" || e.target.name === "ability_three_cooldown") {
      this.setState({
        ability_three: {
          ...this.state.ability_three,
          [e.target.name]: parseFloat(e.target.value)
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
      .doc(this.state.name.toLowerCase())
      .set({
        name: this.state.name.toLowerCase(),
        profile_image: this.state.profile_image,
        background_image: this.state.background_image,
        background_story: this.state.background_story,
        type: this.state.type,
        theme: this.state.theme,
        ability_passive: {
          name: this.state.ability_passive.ability_passive_name,
          description: this.state.ability_passive.ability_passive_description,
          image: this.state.ability_passive.ability_passive_image
        },
        ability_one: {
          name: this.state.ability_one.ability_one_name,
          description: this.state.ability_one.ability_one_description,
          image: this.state.ability_one.ability_one_image,
          manacost: this.state.ability_one.ability_one_manacost,
          cooldown: this.state.ability_one.ability_one_cooldown
        },
        ability_two: {
          name: this.state.ability_two.ability_two_name,
          description: this.state.ability_two.ability_two_description,
          image: this.state.ability_two.ability_two_image,
          manacost: this.state.ability_two.ability_two_manacost,
          cooldown: this.state.ability_two.ability_two_cooldown
        },
        ability_three: {
          name: this.state.ability_three.ability_three_name,
          description: this.state.ability_three.ability_three_description,
          image: this.state.ability_three.ability_three_image,
          manacost: this.state.ability_three.ability_three_manacost,
          cooldown: this.state.ability_three.ability_three_cooldown
        },
        skins: this.state.skins
      })
      .then(function() {
        this.setState({ open: true, ...this.state.open });
        this.actualChild.handleClick(true);
      })
      .catch(function(error) {
        console.error("Error writing document: ", error);
        this.actualChild.handleClick(false);
      });
  };

  render() {
    return (
      <React.Fragment>
        <DivAddHero>
          <h1 style={{ margin: 8 }}>Add Hero</h1>
          <form onSubmit={this.handleSubmit}>
            <AddInfoForm
              state={this.state}
              onHandleChange={this.handleChange}
              onHandleImageUpload={this.handleImageUpload}
            />
            <AddAbilityForm
              state={this.state}
              onHandleImageUpload={this.handleImageUpload}
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
              onHandleSkinUpload={this.handleSkinUpload}
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
          <CustomizedSnackbars onRef={actualChild => (this.actualChild = actualChild)} />
        </DivAddHero>
      </React.Fragment>
    );
  }
}

export default AddHero;
