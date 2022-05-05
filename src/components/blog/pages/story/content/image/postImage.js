import React, { Component, useEffect, useState } from "react";
import { Image } from "react-bootstrap";
import {
  uploadFile,
  getFile,
} from "../../../../../../services/blogController/fileController/FileController";
import tempImage from '../../../../../../assets/images/who-are-we.jpg'

function PostImage({ Post }) {
  const [image, setImage] = useState();

  React.useEffect(() => {
    if (Post.image) {
      console.log(Post)
      getFile(Post.image).then((res) =>
        setImage(`data:image/jpeg;base64,${res.data}`)
      );
    }
  });

  return (
    <div>
      {Post.image ? (
        <img src={image} class="post-image" />
      ) : (
         <img class="post-image" src={tempImage} alt="Post Image"/>
      )}
    </div>
  );
}

export default PostImage;
