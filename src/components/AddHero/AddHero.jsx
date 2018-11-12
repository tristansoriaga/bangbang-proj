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
    HeroType: "",
    HeroTheme: "",
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
      skins: this.state.skins.concat([{ name: "" }])
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

  handleSubmit = e => {
    e.preventDefault();
    const db = fire.firestore();
    db.settings({
      timestampsInSnapshots: true
    });
    var docData = {
      stringExample: "Hello world!",
      booleanExample: true,
      numberExample: 3.14159265,
      dateExample: new Date("December 10, 1815"),
      arrayExample: [5, true, "hello"],
      nullExample: null,
      objectExample: {
        a: 5,
        b: {
          nested: "foo"
        }
      }
    };
    db.collection("cities")
      .doc("qwe")
      .set({
        stringExample: "fdsa Hello world! asdf"
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
          <AddAbilityForm />
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
