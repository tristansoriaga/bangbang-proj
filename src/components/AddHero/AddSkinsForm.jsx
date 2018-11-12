import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const AddSkinsForm = props => {
  return (
    <React.Fragment>
      <h2>Skins</h2>
      {props.state.skins.map((skin, idx) => (
        <div key={idx} className="skin">
          <TextField
            id="skin-name"
            label="Name"
            style={{ margin: 8, width: "30%" }}
            placeholder={`Skin name #${idx + 1}`}
            margin="normal"
            variant="outlined"
            value={skin.name}
            onChange={props.onHandleSkinNameChange(idx)}
            required
          />
          <TextField
            id="skin-image"
            label="Image"
            style={{ margin: 8, width: "60%" }}
            placeholder={`Skin image #${idx + 1}`}
            margin="normal"
            variant="outlined"
            value={skin.image}
            onChange={props.onHandleSkinImageChange(idx)}
            required
          />
          <Button
            type="button"
            style={{ textAlign: "right", padding: 20, marginTop: "6px" }}
            variant="contained"
            color="primary"
            onClick={props.onHandleRemoveSkin(idx)}
          >
            &mdash;
          </Button>
        </div>
      ))}
      <Button
        type="button"
        style={{ textAlign: "right", margin: 8 }}
        variant="contained"
        color="primary"
        onClick={props.onHandleAddSkinChange}
      >
        Add
      </Button>
    </React.Fragment>
  );
};

export default AddSkinsForm;
