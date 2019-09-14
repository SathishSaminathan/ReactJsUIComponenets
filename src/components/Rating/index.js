import React, { Component, useState } from "react";

import "./Rating.css";

function Rating({ totalStars = 5, onSelect, color, disabledColor, size }) {
  const [count, setCount] = useState(totalStars);
  const [activeRate, setActiveRate] = useState(0);

  const renderStars = () => {
    let template = [];
    for (let i = 1; i <= count; i++) {
      template.push(
        <i
          key={i}
          className={`fas fa-star start_style ${
            i <= activeRate ? "active" : ""
          }`}
          onClick={() => {
            setActiveRate(i);
            onSelect(i);
          }}
        ></i>
      );
    }
    return template;
  };

  return (
    <div
      className="rate_container"
      style={{
        "--selected_color": color,
        "--disabled_color": disabledColor,
        "--icon_size": size
      }}
    >
      {renderStars()}
    </div>
  );
}

export default Rating;
