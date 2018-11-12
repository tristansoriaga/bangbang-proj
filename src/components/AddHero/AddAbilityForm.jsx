import React from "react";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";

const DivAbility = styled.div`
  background-color: white;
`;

const AddAbilityForm = props => {
  return (
    <React.Fragment>
      <DivAbility>
        <h2 style={{ margin: 8 }}>Ability Passive</h2>
        <TextField
          onChange={props.onHandleAbilityPassiveChange}
          name="name"
          label="Name"
          style={{ margin: 8 }}
          placeholder="Name"
          fullWidth
          margin="normal"
          variant="outlined"
        />
        <TextField
          onChange={props.onHandleAbilityPassiveChange}
          name="description"
          label="Description"
          style={{ margin: 8 }}
          placeholder="Description"
          fullWidth
          margin="normal"
          variant="outlined"
        />
        <TextField
          onChange={props.onHandleAbilityPassiveChange}
          name="image"
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
          onChange={props.onHandleAbilityOneChange}
          name="name"
          label="Name"
          style={{ margin: 8 }}
          placeholder="Name"
          fullWidth
          margin="normal"
          variant="outlined"
        />
        <TextField
          onChange={props.onHandleAbilityOneChange}
          name="description"
          label="Description"
          style={{ margin: 8 }}
          placeholder="Description"
          fullWidth
          margin="normal"
          variant="outlined"
          multiline
        />
        <TextField
          onChange={props.onHandleAbilityOneChange}
          name="image"
          label="Image"
          style={{ margin: 8 }}
          placeholder="Image"
          fullWidth
          margin="normal"
          variant="outlined"
        />
        <TextField
          onChange={props.onHandleAbilityOneChange}
          name="manacost"
          label="Mana Cost"
          style={{ margin: 8 }}
          placeholder="Mana Cost"
          fullWidth
          margin="normal"
          variant="outlined"
        />
        <TextField
          onChange={props.onHandleAbilityOneChange}
          name="cooldown"
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
          onChange={props.onHandleAbilityTwoChange}
          name="name"
          label="Name"
          style={{ margin: 8 }}
          placeholder="Name"
          fullWidth
          margin="normal"
          variant="outlined"
        />
        <TextField
          onChange={props.onHandleAbilityTwoChange}
          name="description"
          label="Description"
          style={{ margin: 8 }}
          placeholder="Description"
          fullWidth
          margin="normal"
          variant="outlined"
          multiline
        />
        <TextField
          onChange={props.onHandleAbilityTwoChange}
          name="image"
          label="Image"
          style={{ margin: 8 }}
          placeholder="Image"
          fullWidth
          margin="normal"
          variant="outlined"
        />
        <TextField
          onChange={props.onHandleAbilityTwoChange}
          name="manacost"
          label="Mana Cost"
          style={{ margin: 8 }}
          placeholder="Mana Cost"
          fullWidth
          margin="normal"
          variant="outlined"
        />
        <TextField
          onChange={props.onHandleAbilityTwoChange}
          name="cooldown"
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
          onChange={props.onHandleAbilityThreeChange}
          name="name"
          label="Name"
          style={{ margin: 8 }}
          placeholder="Name"
          fullWidth
          margin="normal"
          variant="outlined"
        />
        <TextField
          onChange={props.onHandleAbilityThreeChange}
          name="description"
          label="Description"
          style={{ margin: 8 }}
          placeholder="Description"
          fullWidth
          margin="normal"
          variant="outlined"
          multiline
        />
        <TextField
          onChange={props.onHandleAbilityThreeChange}
          name="image"
          label="Image"
          style={{ margin: 8 }}
          placeholder="Image"
          fullWidth
          margin="normal"
          variant="outlined"
        />
        <TextField
          onChange={props.onHandleAbilityThreeChange}
          name="manacost"
          label="Mana Cost"
          style={{ margin: 8 }}
          placeholder="Mana Cost"
          fullWidth
          margin="normal"
          variant="outlined"
        />
        <TextField
          onChange={props.onHandleAbilityThreeChange}
          name="cooldown"
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
};

export default AddAbilityForm;
