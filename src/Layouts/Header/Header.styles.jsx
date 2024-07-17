import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  margin: auto 0;
  padding: 10px 20px;
  background-color: var(--black);
  border-bottom: 4px solid var(--blue);
  box-shadow: 0px 5px 29px 0px #2271D1B2;
  position: relative;
  z-index: 3;
`;

const StyledNav = styled.nav`
  display: flex;
  gap: 20px;
`;

export { StyledHeader, StyledNav };
