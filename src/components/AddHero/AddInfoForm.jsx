import React, { Component } from "react";
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

class AddInfoForm extends Component {
  state = {
    HeroType: "",
    HeroTheme: ""
  };

  render() {
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
          onChange={() => this.handleChange}
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
          onChange={() => this.handleChange}
          style={{ width: "200px", margin: 8 }}
        >
          {HeroTheme.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.value}
            </MenuItem>
          ))}
        </TextField>
      </React.Fragment>
    );
  }
}

export default AddInfoForm;
