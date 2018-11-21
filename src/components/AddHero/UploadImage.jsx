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
    url: ""
  };

  handleChange = e => {
    const { propUploadType, propHeroName, propIdx } = this.props;

    if (e.target.files[0] !== undefined) {
      this.setState({
        success: false,
        loading: true
      });

      var file = e.target.files[0];
      var storageRef = fire.storage().ref("images123/heroes/" + propUploadType + "/" + propHeroName + "/" + file.name);
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

            switch (propUploadType) {
              case "skins":
                this.props.onHandleSkinUpload(url, propIdx);
                break;
              case "background":
                this.props.onHandleImageUpload("background", url);
                break;
              case "profile_image":
                this.props.onHandleImageUpload("profile_image", url);
                break;
              default:
                this.props.onHandleImageUpload("ability_" + propIdx.toString(), url);
            }
          });
        }
      );
    }
  };

  render() {
    const { loading, success, url } = this.state;
    const { propLabel, propPlaceholder, propIdx, propUploadType } = this.props;

    return (
      <React.Fragment>
        <DivUploadImage>
          <TextField
            ref="myInput"
            id={"txt" + propUploadType + propIdx}
            value={url}
            label={propLabel}
            style={{ margin: 8, width: "80%" }}
            placeholder={propPlaceholder}
            margin="normal"
            variant="outlined"
            disabled
            required
          />
          <input
            id={"contained-button-file" + propUploadType + propIdx}
            onChange={this.handleChange}
            accept="image/*"
            type="file"
            style={{ display: "none" }}
          />
          <label htmlFor={"contained-button-file" + propUploadType + propIdx}>
            {loading ? (
              <CircularProgress size={50} style={{ marginTop: "8px", marginLeft: "27px" }} />
            ) : (
              <Button
                id={"btnUpload" + propUploadType + propIdx}
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
