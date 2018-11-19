import React, { Component } from "react";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import CloudUpload from "@material-ui/icons/CloudUpload";
import CloudDone from "@material-ui/icons/CloudDone";
import CircularProgress from "@material-ui/core/CircularProgress";
import fire from "../../firebase";

const DivUploadImage = styled.div`
  background-color: transparent;
`;
class UploadImage extends Component {
  state = {
    loading: false,
    success: false,
    url: "",
    id: 0
  };

  handleChange = e => {
    const { propUploadType, propHeroName } = this.props;
    if (e.target.files[0] !== undefined) {
      this.setState({
        success: false,
        loading: true
      });

      var file = e.target.files[0];
      var storageRef = fire
        .storage()
        .ref(
          "images123/heroes/" +
            propUploadType +
            "/" +
            propHeroName +
            "/" +
            file.name
        );
      storageRef.put(file);

      var task = storageRef.put(file);
      task.on(
        "state_changed",
        snapshot => {},
        error => {},
        () => {
          storageRef.getDownloadURL().then(url => {
            this.setState({
              url: url,
              success: true,
              loading: false
            });
          });
        }
      );
    }
    // var event = new Event("input", { bubbles: true });
    // e.target.dispatchEvent(event);
  };

  // static getDerivedStateFromProps(props, current_state) {
  //   console.log("props", props);
  //   console.log("current_state", current_state);
  //   // if (current_state.id !== props.propIdx) {
  //   //   return {
  //   //     id: props.propIdx
  //   //   };
  //   // }
  //   return null;
  // }

  render() {
    const { loading, success, url } = this.state;
    const { propOnChange, propLabel, propPlaceholder, propIdx } = this.props;

    return (
      <React.Fragment>
        <DivUploadImage>
          <TextField
            id={"txtId" + this.props.propIdx}
            onChange={propOnChange}
            value={url}
            label={propLabel}
            style={{ margin: 8, width: "80%" }}
            placeholder={propPlaceholder}
            margin="normal"
            variant="outlined"
            required
            disabled
          />
          <input
            onChange={this.handleChange}
            accept="image/*"
            id={"contained-button-file" + this.props.propIdx}
            multiple
            type="file"
            style={{ display: "none" }}
          />
          <label htmlFor={"contained-button-file" + this.props.propIdx}>
            {loading ? (
              <CircularProgress
                size={50}
                style={{ marginTop: "8px", marginLeft: "27px" }}
              />
            ) : (
              <Button
                id={"btn" + propIdx}
                style={{ width: "16%", height: "54px", marginTop: "8px" }}
                name="btnUpload"
                variant="contained"
                component="span"
                color={success ? "secondary" : "primary"}
              >
                {success ? <CloudDone /> : <CloudUpload />}
              </Button>
            )}
          </label>
        </DivUploadImage>
      </React.Fragment>
    );
  }
}

export default UploadImage;
