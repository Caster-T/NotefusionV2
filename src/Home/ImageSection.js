import React from "react";
import myImage from "../assets/imagen1.png";

const ImageSection = () => {
  return (
    <img
      src={myImage}
      alt="Descripción de la imagen"
      style={{ width: "100%", height: "auto" }}
    />
  );
};

export default ImageSection;
