import React, { Component } from "react";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import CloudUpload from "@material-ui/icons/CloudUpload";
import CloudDone from "@material-ui/icons/CloudDone";
import CircularProgress from "@material-ui/core/CircularProgress";
import fire from "../../firebase";

const DivUploadImage = styled.div`
  min-width: 500px;
  background-color: white;
`;
class UploadImage extends Component {
  state = {
    loading: false,
    success: false,
    name: ""
  };

  handleChange = e => {
    if (e.target.files[0] !== undefined) {
      this.setState({
        success: false,
        loading: true
      });

      var file = e.target.files[0];
      var storageRef = fire.storage().ref("images123/" + file.name);
      storageRef.put(file);

      var task = storageRef.put(file);
      task.on(
        "state_changed",
        snapshot => {
          switch (snapshot.state) {
            case "paused": // or 'paused'
              console.log("Upload is paused");
              break;
            case "running": // or 'running'
              console.log("Upload is running");

              break;
            default:
          }
        },
        error => {},
        () => {
          storageRef.getDownloadURL().then(url => {
            console.log(url);
            this.setState({
              name: url,
              success: true,
              loading: false
            });
          });
        }
      );
    }
  };

  render() {
    const { loading, success } = this.state;
    return (
      <React.Fragment>
        <DivUploadImage>
          <TextField
            value={this.state.name}
            name="name"
            label="Name"
            style={{ margin: 8, width: "90%" }}
            placeholder="Name"
            margin="normal"
            variant="outlined"
            required
          />
          <input
            onChange={this.handleChange}
            accept="image/*"
            id="contained-button-file"
            multiple
            type="file"
            style={{ display: "none" }}
          />
          <label htmlFor="contained-button-file">
            {loading ? (
              <CircularProgress
                size={50}
                style={{ marginTop: "8px", marginLeft: "27px" }}
              />
            ) : (
              <Button
                style={{ width: "105px", height: "54px", marginTop: "8px" }}
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
