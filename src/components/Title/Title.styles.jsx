import styled from "styled-components";

const getColor = ({ $color }) => {
  if (!$color) return "#FFFFFF";
  return $color.startsWith("--") ? `var(${$color})` : $color;
};

const getFontSize = ({ $fontSize }) => {
  if (!$fontSize) return "32px";
  return $fontSize.startsWith("--") ? `var(${$fontSize})` : $fontSize;
};

const getLineHeight = ({ $lineHeight }) => {
  if (!$lineHeight) return "37.5px";
  return $lineHeight.startsWith("--") ? `var(${$lineHeight})` : $lineHeight;
};

const getBackgroundColor = ({ $backgroundColor }) => {
  if (!$backgroundColor) return "transparent";
  return $backgroundColor.startsWith("--")
    ? `var(${$backgroundColor})`
    : $backgroundColor;
};

const StyledTitle = styled.div`
  display: inline-block;
  border-radius: 15px;
  text-align: center;
  background-color: ${getBackgroundColor};
  height: auto;
  width: fit-content;
  width: -moz-fit-content;
  padding: 10px 50px;
  color: ${getColor};
`;

const StyledH2 = styled.h2`
  display: inline;
  font-family: var(--font-bold);
  font-size: ${getFontSize};
  line-height: ${getLineHeight};
`;

export { StyledTitle, StyledH2 };
