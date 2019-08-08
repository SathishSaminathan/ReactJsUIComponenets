import React, { Component } from "react";
import { Modal } from "antd";

import "./image.css";

class ImageViewer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ImagesData: this.props.ImagesData,
      visible: false,
      selectedImages: []
    };
  }

  showModal = () => {
    this.setState({
      visible: true
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

  renderImages() {
    let imageTemplate = [];
    const { ImagesData } = this.state;
    let imageCount = ImagesData.length;

    console.log("ImagesData", ImagesData)

    for (let i = 0; i < imageCount; i++) {
      if (i < 4) {
        imageTemplate.push(
          <img
            className="image"
            onClick={() =>
              this.setState({
                visible: true,
                selectedImages: [ImagesData[i].imageURL]
              })
            }
            src={ImagesData[i].imageURL}
          />
        );
      } else {
        imageTemplate.push(
          <div
            className="overlayContent"
            onClick={() =>
              this.setState({
                visible: true,
                selectedImages: ImagesData
              })
            }
          >
            <div className="content">
              <span className="text">+{imageCount - 4} Images</span>
              <span className="seeMore">see all</span>
            </div>
          </div>
        );
        break;
      }
    }

    return imageTemplate;
  }

  render() {
    const { selectedImages } = this.state;
    console.log("selectedImages", selectedImages.length);
    return (
      <div className="wrapper">
        <div className="imageContainer"> {this.renderImages()} </div>
        <Modal
          //   title="Basic Modal"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={null}
          className="customModal"
          width="500px"
        >
          {selectedImages && selectedImages.length === 1 ? (
            <img className="singleImage" src={selectedImages} />
          ) : (
            selectedImages.map((image, i) => (
              <img className="multiImages" src={image.imageURL} />
            ))
          )}
        </Modal>
      </div>
    );
  }
}

export default ImageViewer;
