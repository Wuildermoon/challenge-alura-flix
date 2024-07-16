import React from "react";
import StyledTitle from "./Title.styles";

const Title = ({
  height,
  width,
  color,
  fontSize,
  backgroundColor,
  children,
}) => {
  return (
    <StyledTitle
      $height={height}
      $width={width}
      $color={color}
      $fontSize={fontSize}
      $backgroundColor={backgroundColor}
    >
      <h2>{children}</h2>
    </StyledTitle>
  );
};

export default Title;
