import React from "react";
import { StyledTitle, StyledH2 } from "./Title.styles";

const Title = ({ color, fontSize, lineHeight, backgroundColor, children }) => {
  return (
    <StyledTitle $color={color} $backgroundColor={backgroundColor}>
      <StyledH2 $fontSize={fontSize} $lineHeight={lineHeight}>
        {children}
      </StyledH2>
    </StyledTitle>
  );
};

export default Title;
