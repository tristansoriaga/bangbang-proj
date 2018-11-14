import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import UploadImage from "./UploadImage";
import styled from "styled-components";

const DivSkins = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  background-color: red;
`;

const AddSkinsForm = props => {
  return (
    <React.Fragment>
      <h2>Skins</h2>

      {props.state.skins.map((skin, idx) => (
        <div key={idx} className="skin">
          <DivSkins>
            <div style={{ width: "200px" }}>
              <TextField
                style={{ margin: 8 }}
                id="skin-name"
                label={`Skin name #${idx + 1}`}
                placeholder={`Skin name #${idx + 1}`}
                variant="outlined"
                value={skin.name}
                onChange={props.onHandleSkinNameChange(idx)}
                required
              />
            </div>

            {/* <TextField
            id="skin-image"
            label="Image"
            style={{ margin: 8, width: "60%" }}
            placeholder={`Skin image #${idx + 1}`}
            margin="normal"
            variant="outlined"
            value={skin.image}
            onChange={props.onHandleSkinImageChange(idx)}
            required
          /> */}
            <div style={{ width: "300px" }}>
              <UploadImage
                style={{ margin: 8 }}
                propValue={skin.image}
                propPlaceholder={`Skin image #${idx + 1}`}
                propLabel={`Skin image #${idx + 1}`}
              />
            </div>
            <div style={{ width: "80px" }}>
              <Button
                type="button"
                style={{ padding: 20, marginTop: "6px" }}
                variant="contained"
                color="primary"
                onClick={props.onHandleRemoveSkin(idx)}
              >
                &mdash;
              </Button>
            </div>
          </DivSkins>
        </div>
      ))}

      <div style={{ width: "300px" }}>
        <Button
          type="button"
          style={{ margin: 8 }}
          variant="contained"
          color="primary"
          onClick={props.onHandleAddSkinChange}
        >
          Add
        </Button>
      </div>
    </React.Fragment>
  );
};

export default AddSkinsForm;
