import React from "react";
import StyledImg from "./CardImg.styles";

const CardImg = ({ width, outline, src, alt }) => {
  return (
    <StyledImg $width={width} $outline={outline}>
      <img src={src} alt={alt} />
    </StyledImg>
  );
};

export default CardImg;
