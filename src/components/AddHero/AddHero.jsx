import React, { Component } from "react";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import fire from "../../firebase";
class AddHero extends Component {
  state = {
    HeroType: "",
    HeroTheme: ""
  };

  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
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
    const HeroType = [
      { value: "tank" },
      { value: "fighter" },
      { value: "assassin" },
      { value: "mage" },
      { value: "marksman" },
      { value: "support" }
    ];

    const HeroTheme = [{ value: "dark" }, { value: "light" }];

    const DivAddHero = styled.div`
      background-color: white;
      padding: 5em 7em;
    `;

    return (
      <DivAddHero>
        <h1 style={{ margin: 8 }}>Add Hero</h1>
        <form onSubmit={this.handleSubmit}>
          <TextField
            id="name"
            label="Name"
            style={{ margin: 8 }}
            placeholder="Name"
            fullWidth
            margin="normal"
            variant="outlined"
          />
          <TextField
            id="image"
            label="Image"
            style={{ margin: 8 }}
            placeholder="Image"
            fullWidth
            margin="normal"
            variant="outlined"
          />
          <TextField
            id="bg_img"
            label="Bg Img"
            style={{ margin: 8 }}
            placeholder="Bg Img"
            fullWidth
            margin="normal"
            variant="outlined"
          />
          <TextField
            id="background_story"
            label="Background Story"
            style={{ margin: 8 }}
            placeholder="Background Story"
            fullWidth
            margin="normal"
            variant="outlined"
            multiline
          />
          <TextField
            id="hero_type"
            select
            label="Hero Type"
            margin="normal"
            variant="outlined"
            value={this.state.HeroType}
            onChange={this.handleChange("HeroType")}
            style={{ width: "200px", margin: 8 }}
          >
            {HeroType.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.value}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            id="hero_theme"
            select
            label="Hero Theme"
            margin="normal"
            variant="outlined"
            value={this.state.HeroTheme}
            onChange={this.handleChange("HeroTheme")}
            style={{ width: "200px", margin: 8 }}
          >
            {HeroTheme.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.value}
              </MenuItem>
            ))}
          </TextField>
          <div>
            <h2 style={{ margin: 8 }}>Ability Passive</h2>
            <TextField
              id="ability-passive-name"
              label="Name"
              style={{ margin: 8 }}
              placeholder="Name"
              fullWidth
              margin="normal"
              variant="outlined"
            />
            <TextField
              id="ability-passive-description"
              label="Description"
              style={{ margin: 8 }}
              placeholder="Description"
              fullWidth
              margin="normal"
              variant="outlined"
            />
            <TextField
              id="ability-passive-image"
              label="Image"
              style={{ margin: 8 }}
              placeholder="Image"
              fullWidth
              margin="normal"
              variant="outlined"
            />
          </div>
          <div>
            <h2 style={{ margin: 8 }}>Ability One</h2>
            <TextField
              id="ability-one-name"
              label="Name"
              style={{ margin: 8 }}
              placeholder="Name"
              fullWidth
              margin="normal"
              variant="outlined"
            />
            <TextField
              id="ability-one-description"
              label="Description"
              style={{ margin: 8 }}
              placeholder="Description"
              fullWidth
              margin="normal"
              variant="outlined"
              multiline
            />
            <TextField
              id="ability-one-image"
              label="Image"
              style={{ margin: 8 }}
              placeholder="Image"
              fullWidth
              margin="normal"
              variant="outlined"
            />
            <TextField
              id="ability-one-manacost"
              label="Mana Cost"
              style={{ margin: 8 }}
              placeholder="Mana Cost"
              fullWidth
              margin="normal"
              variant="outlined"
            />
            <TextField
              id="ability-one-cooldown"
              label="Cool Down"
              style={{ margin: 8 }}
              placeholder="Cool Down"
              fullWidth
              margin="normal"
              variant="outlined"
            />
          </div>
          <div>
            <h2 style={{ margin: 8 }}>Ability Two</h2>
            <TextField
              id="ability-two-name"
              label="Name"
              style={{ margin: 8 }}
              placeholder="Name"
              fullWidth
              margin="normal"
              variant="outlined"
            />
            <TextField
              id="ability-two-description"
              label="Description"
              style={{ margin: 8 }}
              placeholder="Description"
              fullWidth
              margin="normal"
              variant="outlined"
              multiline
            />
            <TextField
              id="ability-two-image"
              label="Image"
              style={{ margin: 8 }}
              placeholder="Image"
              fullWidth
              margin="normal"
              variant="outlined"
            />
            <TextField
              id="ability-two-manacost"
              label="Mana Cost"
              style={{ margin: 8 }}
              placeholder="Mana Cost"
              fullWidth
              margin="normal"
              variant="outlined"
            />
            <TextField
              id="ability-two-cooldown"
              label="Cool Down"
              style={{ margin: 8 }}
              placeholder="Cool Down"
              fullWidth
              margin="normal"
              variant="outlined"
            />
          </div>
          <div>
            <h2 style={{ margin: 8 }}>Ability Three</h2>
            <TextField
              id="ability-three-name"
              label="Name"
              style={{ margin: 8 }}
              placeholder="Name"
              fullWidth
              margin="normal"
              variant="outlined"
            />
            <TextField
              id="ability-three-description"
              label="Description"
              style={{ margin: 8 }}
              placeholder="Description"
              fullWidth
              margin="normal"
              variant="outlined"
              multiline
            />
            <TextField
              id="ability-three-image"
              label="Image"
              style={{ margin: 8 }}
              placeholder="Image"
              fullWidth
              margin="normal"
              variant="outlined"
            />
            <TextField
              id="ability-three-manacost"
              label="Mana Cost"
              style={{ margin: 8 }}
              placeholder="Mana Cost"
              fullWidth
              margin="normal"
              variant="outlined"
            />
            <TextField
              id="ability-three-cooldown"
              label="Cool Down"
              style={{ margin: 8 }}
              placeholder="Cool Down"
              fullWidth
              margin="normal"
              variant="outlined"
            />
          </div>
          <div>
            <h2 style={{ margin: 8 }}>Skins</h2>
            <TextField
              id="skin-name"
              label="Name"
              style={{ margin: 8 }}
              placeholder="Name"
              fullWidth
              margin="normal"
              variant="outlined"
            />
            <TextField
              id="skin-image"
              label="Image"
              style={{ margin: 8 }}
              placeholder="Image"
              fullWidth
              margin="normal"
              variant="outlined"
            />
          </div>
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
