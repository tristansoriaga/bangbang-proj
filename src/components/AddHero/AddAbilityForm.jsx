import React from "react";
import styled from "styled-components";
import UploadImage from "./UploadImage";
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
          value={props.state.ability_passive.ability_passive_name}
          onChange={props.onHandleAbilityPassiveChange}
          name="ability_passive_name"
          placeholder="Name"
          label="Name"
          margin="normal"
          variant="outlined"
          fullWidth
          required
          style={{ margin: 8 }}
        />
        <TextField
          value={props.state.ability_passive.ability_passive_description}
          onChange={props.onHandleAbilityPassiveChange}
          name="ability_passive_description"
          label="Description"
          style={{ margin: 8 }}
          placeholder="Description"
          fullWidth
          margin="normal"
          variant="outlined"
          required
        />
        <UploadImage
          value={props.state.ability_passive.ability_passive_image}
          style={{ margin: 8 }}
          propUploadType="ability"
          propHeroName={props.state.name.toLowerCase()}
          propPlaceholder="Passive Image"
          propLabel="Passive Image"
          propIdx="passive"
          onHandleImageUpload={props.onHandleImageUpload}
        />
      </DivAbility>
      <DivAbility>
        <h2 style={{ margin: 8 }}>Ability One</h2>
        <TextField
          value={props.state.ability_one.ability_one_name}
          onChange={props.onHandleAbilityOneChange}
          name="ability_one_name"
          label="Name"
          style={{ margin: 8 }}
          placeholder="Name"
          fullWidth
          margin="normal"
          variant="outlined"
          required
        />
        <TextField
          value={props.state.ability_one.ability_one_description}
          onChange={props.onHandleAbilityOneChange}
          name="ability_one_description"
          label="Description"
          style={{ margin: 8 }}
          placeholder="Description"
          fullWidth
          margin="normal"
          variant="outlined"
          multiline
          required
        />
        <UploadImage
          value={props.state.ability_one.ability_one_image}
          style={{ margin: 8 }}
          propUploadType="ability"
          propHeroName={props.state.name.toLowerCase()}
          propPlaceholder="Ability One Image"
          propLabel="Ability One Image"
          propIdx="one"
          onHandleImageUpload={props.onHandleImageUpload}
        />
        <TextField
          value={props.state.ability_one.ability_one_manacost}
          onChange={props.onHandleAbilityOneChange}
          name="ability_one_manacost"
          label="Mana Cost"
          style={{ margin: 8 }}
          type="number"
          placeholder="Mana Cost"
          fullWidth
          margin="normal"
          variant="outlined"
          required
        />
        <TextField
          value={props.state.ability_one.ability_one_cooldown}
          onChange={props.onHandleAbilityOneChange}
          name="ability_one_cooldown"
          label="Cool Down"
          style={{ margin: 8 }}
          type="number"
          placeholder="Cool Down"
          fullWidth
          margin="normal"
          variant="outlined"
          required
        />
      </DivAbility>
      <DivAbility>
        <h2 style={{ margin: 8 }}>Ability Two</h2>
        <TextField
          value={props.state.ability_two.ability_two_name}
          onChange={props.onHandleAbilityTwoChange}
          name="ability_two_name"
          label="Name"
          style={{ margin: 8 }}
          placeholder="Name"
          fullWidth
          margin="normal"
          variant="outlined"
          required
        />
        <TextField
          value={props.state.ability_two.ability_two_description}
          onChange={props.onHandleAbilityTwoChange}
          name="ability_two_description"
          label="Description"
          style={{ margin: 8 }}
          placeholder="Description"
          fullWidth
          margin="normal"
          variant="outlined"
          multiline
          required
        />
        <UploadImage
          value={props.state.ability_two.ability_two_image}
          style={{ margin: 8 }}
          propUploadType="ability"
          propHeroName={props.state.name.toLowerCase()}
          propPlaceholder="Ability Two Image"
          propLabel="Ability Two Image"
          propIdx="two"
          onHandleImageUpload={props.onHandleImageUpload}
        />
        <TextField
          value={props.state.ability_two.ability_two_manacost}
          onChange={props.onHandleAbilityTwoChange}
          name="ability_two_manacost"
          label="Mana Cost"
          style={{ margin: 8 }}
          type="number"
          placeholder="Mana Cost"
          fullWidth
          margin="normal"
          variant="outlined"
          required
        />
        <TextField
          value={props.state.ability_two.ability_two_cooldown}
          onChange={props.onHandleAbilityTwoChange}
          name="ability_two_cooldown"
          label="Cool Down"
          style={{ margin: 8 }}
          type="number"
          placeholder="Cool Down"
          fullWidth
          margin="normal"
          variant="outlined"
          required
        />
      </DivAbility>
      <DivAbility>
        <h2 style={{ margin: 8 }}>Ability Three</h2>
        <TextField
          value={props.state.ability_three.ability_three_name}
          onChange={props.onHandleAbilityThreeChange}
          name="ability_three_name"
          label="Name"
          style={{ margin: 8 }}
          placeholder="Name"
          fullWidth
          margin="normal"
          variant="outlined"
          required
        />
        <TextField
          value={props.state.ability_three.ability_three_description}
          onChange={props.onHandleAbilityThreeChange}
          name="ability_three_description"
          label="Description"
          style={{ margin: 8 }}
          placeholder="Description"
          fullWidth
          margin="normal"
          variant="outlined"
          multiline
          required
        />
        <UploadImage
          value={props.state.ability_three.ability_three_image}
          style={{ margin: 8 }}
          propUploadType="ability"
          propHeroName={props.state.name.toLowerCase()}
          propPlaceholder="Ability Three Image"
          propLabel="Ability Three Image"
          propIdx="three"
          onHandleImageUpload={props.onHandleImageUpload}
        />
        <TextField
          value={props.state.ability_three.ability_three_manacost}
          onChange={props.onHandleAbilityThreeChange}
          name="ability_three_manacost"
          label="Mana Cost"
          type="number"
          style={{ margin: 8 }}
          placeholder="Mana Cost"
          fullWidth
          margin="normal"
          variant="outlined"
          required
        />
        <TextField
          value={props.state.ability_three.ability_three_cooldown}
          onChange={props.onHandleAbilityThreeChange}
          name="ability_three_cooldown"
          label="Cool Down"
          type="number"
          style={{ margin: 8 }}
          placeholder="Cool Down"
          fullWidth
          margin="normal"
          variant="outlined"
          required
        />
      </DivAbility>
    </React.Fragment>
  );
};

export default AddAbilityForm;
