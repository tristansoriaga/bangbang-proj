import React from "react";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";

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
      />
      <FormControl variant="outlined" style={{ padding: 8 }}>
        <InputLabel>Hero Type</InputLabel>
        <Select
          name="type"
          value={props.state.type}
          style={{ width: "150px" }}
          onChange={props.onHandleChange}
        >
          {HeroType.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.value}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl variant="outlined" style={{ padding: 8 }}>
        <InputLabel>Hero Theme</InputLabel>
        <Select
          name="theme"
          value={props.state.theme}
          style={{ width: "150px" }}
          onChange={props.onHandleChange}
        >
          {HeroTheme.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.value}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </React.Fragment>
  );
};

export default AddInfoForm;
