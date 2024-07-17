import styled from "styled-components";

const StyledFooter = styled.footer`
  height: 120px;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  padding: 1%;
  background-color: var(--black);
  border-top: 4px solid var(--blue);
  box-shadow: 0px -5px 29px 0px #2271d1b2;
  color: var(--white);
  font-size: 14px;
  position: relative;
  z-index: 3;
`;

export default StyledFooter;
