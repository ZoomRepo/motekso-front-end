import React, { useEffect, useState } from "react";

function PostDetail({ changeEvent, Post }) {
  const [title, setTitle] = useState();
  const [story, setStory] = useState();

  React.useEffect(() => {
     setTitle(Post.title);
     setStory(Post.description);
  }, [Post]);

  return (
    <div>
       <input
            class="title-text"
            name="title"
            type="text"
            placeholder="Title"
            value={title}
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
            vale={story}
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
