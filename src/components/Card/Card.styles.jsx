import styled from "styled-components";

const getOutline = ({ $outline }) => {
  if (!$outline) return "";
  return $outline.startsWith("--") ? `var(${$outline})` : $outline;
};

const StyledCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column nowrap;
  width: 100%;
`;

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 60px;
  background-color: var(--black);
  border: 3px solid ${getOutline};
  border-top: none;
  border-radius: 0px 0px 15px 15px;
  box-shadow: 0px -2px 5px 3px ${getOutline} inset;
  box-sizing: border-box;
`;

const StyledButton = styled.button`
  font-family: var(--font-bold);
  display: flex;
  align-items: center;
  gap: 20px;
  border: none;
  background: transparent;
  color: var(--white);
  cursor: pointer;
  font-size: 16px;
  line-height: 18.75px;
  text-transform: uppercase;

  & img {
    height: 1.5em;
  }
`;

export { StyledCard, StyledDiv, StyledButton };
