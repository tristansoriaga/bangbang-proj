import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const AddSkinsForm = props => {
  return (
    <React.Fragment>
      <h2>Skins</h2>
      <Button
        type="button"
        style={{ textAlign: "right", margin: 8 }}
        variant="contained"
        color="primary"
        onClick={props.onHandleAddSkinChange}
      >
        Add
      </Button>
      {props.state.skins.map((skin, idx) => (
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
            onChange={props.onHandleSkinNameChange(idx)}
          />
          <Button
            type="button"
            style={{ textAlign: "right", margin: 8 }}
            variant="contained"
            color="primary"
            onClick={props.onHandleRemoveSkin(idx)}
          >
            -
          </Button>
        </div>
      ))}
    </React.Fragment>
  );
};

export default AddSkinsForm;
