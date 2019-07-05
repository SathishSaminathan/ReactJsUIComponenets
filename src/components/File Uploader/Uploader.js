import React, { Component } from "react";

import "./uploader.css";
import firebase from "../../firebase";

class Uploader extends Component {
  state = {
    image: null,
    storageRef: firebase.storage().ref("images"),
    url: null,
    progress: 0,
    imageLoaded: false
  };
  handleChange = e => {
    console.log("",e.target.files[0]);
    this.setState(
      {
        image: e.target.files[0],
        imageLoaded: false
      },
      () => console.log("image..", this.state.image.name)
    );
    console.log(this.state.image);
    const upload = this.state.storageRef.child("lal").put(e.target.files[0], {
      contentType: this.state.image && this.state.image.type
    });
    upload.on(
      "state_changed",
      snapshot => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        this.setState({
          progress
        });
      },
      err => {
        console.log(err);
      },
      () => {
        console.log("completed");
        this.state.storageRef
          .child("lal")
          .getDownloadURL()
          .then(url => {
            this.setState({ url, progress: 0 });
          });
      }
    );
  };
  render() {
    const { url, progress, imageLoaded } = this.state;
    return (
      <div className="container">
        {/* {progress !== 0 && <progress value={progress} max="100" />} */}
        <progress value={progress} max="100" />
        <br />
        <input type="file" onChange={e => this.handleChange(e)} />
        {/* <button>upload</button> */}
        <br />

        <img
          className={`image ${!imageLoaded && "blueImage"}`}
          src={url || "https://via.placeholder.com/400x300"}
          onLoad={() => this.setState({ imageLoaded: true })}
        />
      </div>
    );
  }
}

export default Uploader;
