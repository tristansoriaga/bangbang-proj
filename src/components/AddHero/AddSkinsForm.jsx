import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

class AddSkinsForm extends React.Component {
  state = {
    skins: [{ name: "" }]
  };

  handleSkinNameChange = idx => e => {
    const newskins = this.state.skins.map((skin, sidx) => {
      if (idx !== sidx) return skin;
      return { ...skin, name: e.target.value };
    });

    this.setState({ skins: newskins });
  };

  handleAddskin = () => {
    this.setState({
      skins: this.state.skins.concat([{ name: "" }])
    });
  };

  handleRemoveskin = idx => () => {
    this.setState({
      skins: this.state.skins.filter((s, sidx) => idx !== sidx)
    });
  };

  render() {
    return (
      <React.Fragment>
        <h2>Skins</h2>
        <Button
          type="button"
          style={{ textAlign: "right", margin: 8 }}
          variant="contained"
          color="primary"
          onClick={this.handleAddskin}
        >
          Add
        </Button>
        {this.state.skins.map((skin, idx) => (
          <div key={idx} className="skin">
            <TextField
              id="skin-name"
              label="Name"
              style={{ margin: 8 }}
              placeholder={`Skin name #${idx + 1}`}
              fullWidth
              margin="normal"
              variant="outlined"
              value={skin.name}
              onChange={this.handleSkinNameChange(idx)}
            />
            <Button
              type="button"
              style={{ textAlign: "right", margin: 8 }}
              variant="contained"
              color="primary"
              onClick={this.handleRemoveskin(idx)}
            >
              -
            </Button>
          </div>
        ))}
      </React.Fragment>
    );
  }
}

export default AddSkinsForm;
