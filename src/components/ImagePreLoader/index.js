import React, { Component } from "react";

import "./ImagePreLoader.css";
import CircularSpinner from "./CircularSpinner";

class ImagePreloader extends Component {
  state = {
    src: `https://placeimg.com/295/295/any/tech?=${new Date().getMilliseconds()}`,
    loading: true
  };

  imageLoaded = () => {
    this.setState(
      {
        loading: false
      },
      console.log("loaded")
    );
  };

  render() {
    const { src, loading } = this.state;
    console.log(this.state.src);
    return (
      <div className="container">
        <div className="image_container">
          <img
            src={src}
            className={`image-container-overlay ${loading && "blurImage"}`}
            onLoad={this.imageLoaded}
          />
          {loading && <CircularSpinner />}
        </div>
      </div>
    );
  }
}

export default ImagePreloader;
