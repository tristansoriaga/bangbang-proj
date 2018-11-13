import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import CheckIcon from "@material-ui/icons/Check";
import SaveIcon from "@material-ui/icons/Save";
import CircularProgress from "@material-ui/core/CircularProgress";
import fire from "../../firebase";

class UploadImage extends Component {
  state = {
    loading: false,
    success: false
  };

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

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
      <div>
        <input
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
            color="secondary"
            onClick={this.handleButtonClick}
          >
            Upload
          </Button>
        </label>
        <div>
          <Button
            variant="fab"
            color="primary"
            onClick={this.handleButtonClick}
          >
            {success ? <CheckIcon /> : <SaveIcon />}
          </Button>
          {loading && <CircularProgress size={68} />}
        </div>
      </div>
    );
  }
}

export default UploadImage;
