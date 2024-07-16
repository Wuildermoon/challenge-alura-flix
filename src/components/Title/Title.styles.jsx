import styled from "styled-components";

const getHeight = ({ $height }) => {
  if (!$height) return "auto";
  return $height.startsWith("--") ? `var(${$height})` : $height;
};

const getWidth = ({ $width }) => {
  if (!$width) return "auto";
  return $width.startsWith("--") ? `var(${$width})` : $width;
};

const getColor = ({ $color }) => {
  if (!$color) return "#FFFFFF";
  return $color.startsWith("--") ? `var(${$color})` : $color;
};

const getFontSize = ({ $fontSize }) => {
  if (!$fontSize) return "auto";
  return $fontSize.startsWith("--") ? `var(${$fontSize})` : $fontSize;
};

const getBackgroundColor = ({ $backgroundColor }) => {
  if (!$backgroundColor) return "transparent";
  return $backgroundColor.startsWith("--")
    ? `var(${$backgroundColor})`
    : $backgroundColor;
};

const StyledTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  text-align: center;
  background-color: ${getBackgroundColor};
  height: ${getHeight};
  width: ${getWidth};
  color: ${getColor};

  & h2 {
    font-family: var(--font-bold);
    font-size: ${getFontSize};
    line-height: 56px;
  }
`;

export default StyledTitle;
