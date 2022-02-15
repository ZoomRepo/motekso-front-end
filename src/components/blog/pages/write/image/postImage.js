import React, { Component, useEffect, useState } from "react";
import tempPostImage from "../../../../../assets/images/who-are-we.jpg";
import { Image } from "react-bootstrap";
import {
  uploadFile,
  getFile,
} from "../../../../../services/blogController/fileController/FileController";

function PostImage({ postImage }) {
  const [image, setImage] = useState();

  React.useEffect(() => {
    if (postImage) { 
      getFile(postImage).then((res) =>
        setImage(`data:image/jpeg;base64,${res.data}`)
      );
    }
  });

  return (
    <div>
      {postImage && image ? (
        <img src={image} class="story-image"/>
      ) : (
        <img id="story-image" class="story-image" src={tempPostImage} alt="" />
      )}
    </div>
  );
}

export default PostImage;
