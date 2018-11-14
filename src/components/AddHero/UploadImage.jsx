import React, { Component } from "react";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import CloudUpload from "@material-ui/icons/CloudUpload";
import CloudDone from "@material-ui/icons/CloudDone";
import CircularProgress from "@material-ui/core/CircularProgress";
import fire from "../../firebase";

const DivUploadImage = styled.div`
  width: 500px;
  background-color: white;
`;
class UploadImage extends Component {
  state = {
    loading: false,
    success: false,
    name: ""
  };

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

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

  handleButtonClick = () => {
    if (!this.state.loading) {
      this.setState(
        {
          success: false,
          loading: true
        },
        () => {
          this.timer = setTimeout(() => {
            this.setState({
              loading: false,
              success: true
            });
          }, 2000);
        }
      );
    }
  };

  onUploadClick = e => {
    var storageRef = fire.storage().ref();
    var uploadTask = storageRef.child("images/rivers.jpg").put(e.target.value);

    uploadTask.on(
      "state_changed",
      function(snapshot) {
        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case fire.storage.TaskState.PAUSED: // or 'paused'
            console.log("Upload is paused");
            break;
          case fire.storage.TaskState.RUNNING: // or 'running'
            console.log("Upload is running");
            break;
          default:
            console.log("error");
        }
      },
      function(error) {
        console.log(error);
      },
      function() {
        uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
          console.log("File available at", downloadURL);
        });
      }
    );
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
            style={{ margin: 8, width: "350px" }}
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
            <Button
              variant="contained"
              component="span"
              color={success ? "secondary" : "primary"}
            >
              {success ? <CloudDone /> : <CloudUpload />}
            </Button>
            {loading && <CircularProgress size={30} />}
          </label>
        </DivUploadImage>
      </React.Fragment>
    );
  }
}

export default UploadImage;
