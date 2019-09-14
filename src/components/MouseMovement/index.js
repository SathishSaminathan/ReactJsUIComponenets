import React, { useState } from "react";

import "./mouse.css";

function MouseMovement(props) {
  const [x, setXaxis] = useState(0);
  const [y, setYaxis] = useState(0);

  const handleMouse = e => {
    console.log(e.screenX);
    setXaxis(e.screenX - 25 + "px");
    setYaxis(e.screenY - 71 - 25 + "px");
  };

  return (
    <div
      className="mouse_container"
      style={{ "--x": x, "--y": y }}
      onMouseMove={e => handleMouse(e)}
    >
      <div className="moving_object"></div>
    </div>
  );
}
export default MouseMovement;
