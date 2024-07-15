import styled from "styled-components";

const getColor = ({ color }) => {
  if (!color) return "#000000";
  return color.startsWith("--") ? `var(${color})` : color;
};

const getShadow = ({ shadow }) => {
  if (!shadow) return "";
  return `inset 0px 0px 12px 4px ${
    shadow.startsWith("--") ? `var(${shadow})` : shadow
  }`;
};

const getWeight = ({ weight }) => {
  if (!weight) return "var(--font-regular)";
  const lowerCaseWeight = weight.toLowerCase();

  switch (lowerCaseWeight) {
    case "italic":
      return "var(--font-italic)";
    case "italic-bold":
      return "var(--font-italic-bold)";
    case "bold":
      return "var(--font-bold)";
    case "light":
      return "var(--font-light)";
    default:
      return "var(--font-regular)";
  }
};

const getBackground = ({ background }) => {
  if (!background) return "transparent";
  return background.startsWith("--") ? `var(${background})` : background;
};

const StyledButton = styled.button`
  font-family: ${getWeight};
  height: 54px;
  width: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${getBackground};
  box-shadow: ${getShadow};
  border-radius: 10px;
  border: 2px solid ${getColor};
  color: ${getColor};
  text-transform: uppercase;
  text-align: center;
  cursor: pointer;
  transition: 200ms;

  &:hover {
    opacity: 0.8;
    transform: scale(0.95);
  }
`;

export default StyledButton;
