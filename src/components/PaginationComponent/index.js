import React, { Component } from "react";

import Slider from "react-slick";

class PaginationComponent extends Component {
  state = {
    activeItem: 5,
    prevIndex: null,
    total: 20
  };
  componentDidMount() {
    this.slider.slickGoTo(this.state.activeItem - 1);
  }
  renderItems = () => {
    const { activeItem, total } = this.state;
    let template = [];
    for (let i = 1; i <= total; i++) {
      template.push(
        <div
          className="sample"
          onClick={() =>
            this.setState({
              activeItem: i
            })
          }
          key={i}
        >
          <div className={`textArea ${activeItem === i ? "active" : ""}`}>
            <span>{i}</span>
          </div>
        </div>
      );
    }
    return template;
  };
  afterChange = currentIndex => {
    console.log("currentIndex", currentIndex);
    const { prevIndex } = this.state;
    if (currentIndex > prevIndex) {
      this.setState({
        activeItem: this.state.activeItem + 1
      });
    } else {
      this.setState({
        activeItem: this.state.activeItem - 1
      });
    }
    console.log("activeItem", this.state.activeItem);
  };
  beforeChange = prevIndex => {
    console.log("prevIndex", prevIndex);
    this.setState({
      prevIndex
    });
  };
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 10,
      slidesToScroll: 1,
      afterChange: this.afterChange,
      beforeChange: this.beforeChange,
      swipeToSlide: true
      // focusOnSelect: true,
    };
    return (
      <div
        style={{
          width: 500,
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)"
        }}
      >
        <Slider ref={c => (this.slider = c)} {...settings}>
          {this.renderItems()}
        </Slider>
      </div>
    );
  }
}

export default PaginationComponent;
