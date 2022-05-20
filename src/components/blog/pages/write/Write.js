import React, { Component, useState, useEffect } from "react";
import UploadPostImage from "./image/uploadPostImage";
import PostImage from "./image/postImage";
import { upsertPost, getPost } from "../../../../services/blogController/postController/postController";
import { getFile } from '../../../../services/blogController/fileController/FileController'
import PostDetail from './content/postDetails'
import parseJwt from '../../../../utils/parseJwt'

function Write({Token}) {
  const [post, setPost] = useState({Post:{}});

/*
  useEffect(() => {
    var username = parseJwt(Token)["username"];
    const pathname = window.location.pathname;
    const lastItem = pathname.substring(pathname.lastIndexOf("/") + 1);
    var Post = { ...post };

    if (username) {
      Post.author = username;
      Post.date = Date().toLocaleString();
    }

    if (lastItem !== "write") {
      getPost(lastItem).then((res) => {
        Post.title = res.title;
        Post.image = res.image;
        Post.date = res.date;
        Post.description = res.description;
      });
    }
    setPost({ Post });
  },[post]);
*/
  function updatePostImage(image) {
    setPost({
      Post: { ...post, image: image },
    });
  };
/*
  function changeEvent(e) {
    setPost({
      Post: { ...post, [e.target.name]: e.target.value },
    });
  };
*/
  function validatePostContent() {
    if (post.title !== "" && post.description !== "") {
      upsertPost(post)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    } else {
      alert(
        "Please write a story for me to Post... Stories don't write themselves..."
      );
    }
  };

    return (
      <div class="write">
        <PostImage Post={post} />
        <div class="form-collection">
          <UploadPostImage updatePostImage={updatePostImage} />
          <PostDetail changeEvent={changeEvent} Post={post} />
          <button class="submit" onClick={() => validatePostContent()}>
            Publish
          </button>
        </div>
        {/* <PostDetails/> */}
      </div>
    );
  }

export default Write;
