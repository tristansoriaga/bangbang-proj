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
    HeroTheme: ""
  };

  // handleChange = prop => event => {
  //   console.log("asdfasdf");
  //   this.setState({ [prop]: event.target.value });
  // };

  handleChange = event => {
    console.log(event.target);
    this.setState({ [event.target.name]: event.target.value });
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
          <AddSkinsForm />
          <Button
            type="submit"
            style={{ textAlign: "right", margin: 8 }}
            variant="contained"
            color="primary"
          >
            Submit
          </Button>
        </form>
      </DivAddHero>
    );
  }
}

export default AddHero;
