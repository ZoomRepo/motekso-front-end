import React, { useEffect, useState } from "react";

import {getPost} from '../../../../../services/blogController/postController/postController'
function PostDetail({ changeEvent, Post }) {
  const [title, setTitle] = useState();
  const [story, setStory] = useState();

  React.useEffect(() => {
    if (Post) {
      getPost(Post.id).then(res => console.log(res))
    }
  });

  return (
    <div>
       <input
            class="title-text"
            name="title"
            type="text"
            placeholder="Title"
            onChange={(e) => {
              changeEvent(e);
            }}
            autoFocus="true"
          />
        <div class="form-collection">
          <textarea
            class="story-text"
            name="description"
            placeholder="Tell you story..."
            onChange={(e) => {
              changeEvent(e);
            }}
            type="text"
          ></textarea>
          </div>
    </div>
  );
}

export default PostDetail;
