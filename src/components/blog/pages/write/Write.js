import React, { Component } from "react";
import { canUseEventListeners } from "react-twitter-embed";
import tempPostImage from "../../../../assets/images/who-are-we.jpg";
import parseJwt from "../../../../utils/parseJwt";

export class Write extends Component {
  state = {
    title: "",
    description: "",
    author: "ollie",
    date: "",
  };

  fillAndSubmit() {}

  componentDidMount() {
    var username = parseJwt(this.props.Token)["username"];
    if (username) {
      const pathname = window.location.pathname;
      const lastItem = pathname.substring(pathname.lastIndexOf("/") + 1);

      if (lastItem !== "write") {
        this.setState({ _id: lastItem });
      }
      
      this.setState({ author: username });
      this.setState({ date: Date().toLocaleString() });
    }
  }

  changeEvent = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <div class="write">
        <img class="story-image" src={tempPostImage} alt="" />
        <form class="form">
          <div class="form-collection">
            <label htmlFor="fileUpload">
              <i class="upload-icon fas fa-plus"></i>
            </label>
            <input type="file" id="fileUpload" hidden="true" />
            <input
              class="title-text"
              name="title"
              type="text"
              placeholder="Title"
              onChange={(e) => {
                this.changeEvent(e);
              }}
              autoFocus="true"
            />
          </div>
          <div class="form-collection">
            <textarea
              class="story-text"
              name="description"
              placeholder="Tell you story..."
              onChange={(e) => {
                this.changeEvent(e);
              }}
              type="text"
            ></textarea>
            <button class="submit" onClick={() => this.fillAndSubmit}>
              Publish
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Write;
