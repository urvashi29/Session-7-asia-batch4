import React from "react";
import { Parallax, Background } from "react-parallax";
import parallexBackground from "../../../images/download.jfif";


const insideStyles = {
  background: "white",
  padding: 20,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
};

const Banner = () => {
  return (
    <div>
      <Parallax bgImage={parallexBackground} strength={500}>
        <div style={{ height: 500 }}>
          <div style={insideStyles}>HTML inside the parallax</div>
        </div>
      </Parallax>
    </div>
  );
};

export default Banner;
