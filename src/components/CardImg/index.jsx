import React from "react";
import StyledImg from "./CardImg.styles";

const CardImg = ({ width, outline, borderRadius, src, alt }) => {
  return (
    <StyledImg $width={width} $outline={outline} $borderRadius={borderRadius}>
      <img src={src} alt={alt} />
    </StyledImg>
  );
};

export default CardImg;
