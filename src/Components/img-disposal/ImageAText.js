import React from "react";

const ImageAText = ({img}) => {
  return (
    <img
      src={img}
      alt="Descripción de la imagen"
      style={{ width: "100%", height: "auto" }}
    />
  );
};

export default ImageAText;
