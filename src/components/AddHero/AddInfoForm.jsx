import React from "react";
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
      <TextField
        onChange={props.onHandleChange}
        name="image"
        label="Image"
        style={{ margin: 8 }}
        placeholder="Image"
        fullWidth
        margin="normal"
        variant="outlined"
        required
      />
      <TextField
        onChange={props.onHandleChange}
        name="bg_img"
        label="Bg Img"
        style={{ margin: 8 }}
        placeholder="Bg Img"
        fullWidth
        margin="normal"
        variant="outlined"
        required
      />
      <TextField
        onChange={props.onHandleChange}
        name="background_story"
        label="Background Story"
        style={{ margin: 8, paddingBottom: "20px" }}
        placeholder="Background Story"
        fullWidth
        margin="normal"
        variant="outlined"
        multiline
        required
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
