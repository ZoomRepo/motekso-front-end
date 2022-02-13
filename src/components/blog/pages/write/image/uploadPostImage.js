import React, { Component } from "react";
import {
    uploadFile,
    getFile,
  } from "../../../../../services/blogController/fileController/FileController";

class UploadPostImage extends Component {
  onFileChange = (event) => {
    // Update the state
    const formData = new FormData();

    // Update the formData object
    formData.append(
      "myFile",
      event.target.files[0],
      event.target.files[0].name
    );

    // Request made to the backend api
    // Send formData object
    uploadFile(formData)
      .then((res) => {
        if (res) {
          this.props.updatePostImage(res);
        }
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div>
        {" "}
        <label htmlFor="fileUpload">
          <i class="upload-icon fas fa-plus"></i>
        </label>
        {/* {this.state.Post.title ? <p>{this.state.Post.title}</p>:  <p>"No Post data"</p> } */}
        <input
          type="file"
          id="fileUpload"
          hidden="true"
          onChange={(e) => this.onFileChange(e)}
        />{" "}
      </div>
    );
  }
}

export default UploadPostImage;
