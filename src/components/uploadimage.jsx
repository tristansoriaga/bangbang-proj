import React, { Component } from "react";
import fire from "../firebase";

class UploadImage extends Component {
  onChangeHandler = e => {
    const file = e.target.files[0];
    var storageRef = fire.storage().ref("/test/" + file.name);
    var task = storageRef.put(file);
    task.on(
      "state_changed",
      function progress(snapshot) {
        var percentage =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        //this.textInput.current.value = percentage;
      },
      function error(err) {
        console.log(err);
      },
      function complete() {
        console.log("com");
        storageRef.getDownloadURL().then(function(url) {
          console.log(url);
        });
      }
    );
  };
  constructor(props) {
    super(props);
    // create a ref to store the textInput DOM element
    this.textInput = React.createRef();
  }

  render() {
    return (
      <div>
        <progress value="0" max="100" id="uploadProgress" ref={this.textInput}>
          0%
        </progress>
        <br />
        <input
          onChange={this.onChangeHandler}
          type="file"
          value=""
          id="fileButton"
        />
      </div>
    );
  }
}

export default UploadImage;
