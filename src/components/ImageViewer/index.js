import React, { Component } from "react";
import { Modal } from "antd";

import "./image.css";

class ImageViewer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ImagesData: this.props.ImagesData,
      visible: false,
      selectedImages: [],
      imageCount: this.props.imageCount
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
    const { ImagesData, imageCount } = this.state;
    let totalImages = ImagesData.length;

    console.log("ImagesData", ImagesData);

    for (let i = 0; i < totalImages; i++) {
      if (i < imageCount) {
        imageTemplate.push(
          <div className="image">
            <img src={ImagesData[i].imageURL} />
            <div
              className="overlay"
              onClick={() =>
                this.setState({
                  visible: true,
                  selectedImages: [ImagesData[i].imageURL]
                })
              }
            >
              <img
                className="eyeIcon"
                src="https://img.icons8.com/color/48/000000/visible.png"
              />
            </div>
          </div>
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
              <span className="text">+{totalImages - imageCount} Images</span>
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
    const { image_container_width } = this.props;
    const image_container_width_custom = {
      "--image_container_width": image_container_width
    };
    console.log("selectedImages", selectedImages.length);
    return (
      <div className="wrapper">
        <div className="imageContainer" style={image_container_width_custom}>
          {this.renderImages()}
        </div>
        <Modal
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={null}
          className="customModal"
          width="500px"
          destroyOnClose
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
