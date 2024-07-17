import styled from "styled-components";

const getOutline = ({ $outline }) => {
  if (!$outline) return "";
  return $outline.startsWith("--") ? `var(${$outline})` : $outline;
};

const getBorderRadius = ({ $borderRadius }) => {
  if (!$borderRadius) return "";
  return $borderRadius.startsWith("--")
    ? `var(${$borderRadius})`
    : $borderRadius;
};

const StyledImg = styled.div`
  display: inline-block;
  position: relative;
  overflow: hidden;
  border-radius: ${getBorderRadius};
  width: 100%;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border: 3px solid ${getOutline};
    border-radius: ${getBorderRadius};
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
