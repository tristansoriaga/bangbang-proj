import React, { Component } from "react";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";

const DivAbility = styled.div`
  background-color: white;
`;

class AddAbilityForm extends Component {
  render() {
    return (
      <React.Fragment>
        <DivAbility>
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
        </DivAbility>
        <DivAbility>
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
        </DivAbility>
        <DivAbility>
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
        </DivAbility>
        <DivAbility>
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
        </DivAbility>
      </React.Fragment>
    );
  }
}

export default AddAbilityForm;
