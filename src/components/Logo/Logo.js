import React from "react";
import Tilt from "react-tilt";
import face from "./face-detection.png";

const Logo = () => {
  return (
    <div className="ma4 center">
      <Tilt
        className="Tilt"
        options={{ max: 55 }}
        style={{ height: 200, width: 200 }}
      >
        <div className="Tilt-inner">
          {" "}
          <img src={face} alt="face-logo" />
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
