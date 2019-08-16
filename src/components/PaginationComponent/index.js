import React, { Component } from "react";

import Slider from "react-slick";

class PaginationComponent extends Component {
  renderItems = () => {
    let template = [];
    for (let i = 1; i <= 20; i++) {
      template.push(
        <div className="sample" onClick={() => console.log(i)}>
          <h3>{i}</h3>
        </div>
      );
    }
    return template;
  };
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 10,
      slidesToScroll: 1
    };
    return (
      <div
        style={{
          width: 500,
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          backgroundColor: "red"
        }}
      >
        <Slider {...settings}>{this.renderItems()}</Slider>
      </div>
    );
  }
}

export default PaginationComponent;
