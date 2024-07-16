import styled from "styled-components";

const getWidth = ({ $width }) => {
  if (!$width) return "auto";
  return $width.startsWith("--") ? `var(${$width})` : $width;
};

const getOutline = ({ $outline }) => {
  if (!$outline) return "";
  return $outline.startsWith("--") ? `var(${$outline})` : $outline;
};

const StyledImg = styled.div`
  display: inline-block;
  position: relative;
  overflow: hidden;
  border-radius: 20px;
  width: ${getWidth};

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border: 5px solid ${getOutline};
    border-radius: 20px;
    box-shadow: 0px 0px 17px 8px ${getOutline} inset;
    pointer-events: none;
  }

  & img {
    display: block;
    width: 100%;
    height: auto;
  }
`;

export default StyledImg;
