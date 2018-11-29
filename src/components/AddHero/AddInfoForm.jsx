import React from "react";
import UploadImage from "./UploadImage";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";

const HeroType = [
  { value: "tank" },
  { value: "fighter" },
  { value: "assassin" },
  { value: "mage" },
  { value: "marksman" },
  { value: "support" }
];

const HeroTheme = [{ value: "dark" }, { value: "light" }];

const AddInfoForm = props => {
  return (
    <React.Fragment>
      <TextField
        value={props.state.name}
        onChange={props.onHandleChange}
        name="name"
        label="Name"
        style={{ margin: 8 }}
        placeholder="Name"
        fullWidth
        margin="normal"
        variant="outlined"
        required
      />
      <UploadImage
        value={props.state.profile_image}
        style={{ margin: 8 }}
        propUploadType="profile_image"
        propHeroName={props.state.name.toLowerCase()}
        propPlaceholder="Profile Image"
        propLabel="Profile Image"
        propIdx={1}
        onHandleImageUpload={props.onHandleImageUpload}
      />
      <UploadImage
        value={props.state.background_image}
        style={{ margin: 8 }}
        propUploadType="background"
        propHeroName={props.state.name.toLowerCase()}
        propPlaceholder="Background Image"
        propLabel="Background Image"
        propIdx={2}
        onHandleImageUpload={props.onHandleImageUpload}
      />
      <TextField
        value={props.state.background_story}
        onChange={props.onHandleChange}
        name="background_story"
        placeholder="Background Story"
        label="Background Story"
        margin="normal"
        variant="outlined"
        fullWidth
        multiline
        required
        style={{ margin: 8, paddingBottom: "20px" }}
      />
      <TextField
        required
        select
        label="Hero Type"
        name="type"
        variant="outlined"
        value={props.state.type}
        style={{ width: "150px", margin: "0 18px 0 8px" }}
        onChange={props.onHandleChange}
      >
        {HeroType.map(option => (
          <MenuItem key={option.value} value={option.value}>
            {option.value}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        required
        select
        label="Hero Theme"
        name="theme"
        variant="outlined"
        value={props.state.theme}
        style={{ width: "150px" }}
        onChange={props.onHandleChange}
      >
        {HeroTheme.map(option => (
          <MenuItem key={option.value} value={option.value}>
            {option.value}
          </MenuItem>
        ))}
      </TextField>
    </React.Fragment>
  );
};

export default AddInfoForm;
