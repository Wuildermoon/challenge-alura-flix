import styled from "styled-components";

const getColor = ({ color }) => {
  return color === "" ? "" : color;
};

const getShadow = ({ shadow }) => {
  if (!shadow) return "";
  return `inset 0px 0px 12px 4px ${shadow}`;
};

const getWeight = ({ weight }) => {
  if (!weight) return "Source Sans Pro Regular";
  const lowerCaseWeight = weight.toLowerCase();

  switch (lowerCaseWeight) {
    case "italic":
      return "Source Sans Pro Italic";
    case "bold":
      return "Source Sans Pro Bold";
    case "light":
      return "Source Sans Pro Light";
    default:
      return "Source Sans Pro Regular";
  }
};

const getBackground = ({ background }) => {
  return !background ? "transparent" : background;
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
