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
          value={props.state.HeroType}
          style={{ width: "150px" }}
          onChange={props.onHandleChange}
          inputProps={{
            name: "HeroType"
          }}
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
          value={props.state.HeroTheme}
          style={{ width: "150px" }}
          onChange={props.onHandleChange}
          inputProps={{
            name: "HeroTheme"
          }}
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
