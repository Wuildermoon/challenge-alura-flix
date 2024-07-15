import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  margin: auto 0;
  padding: 10px 20px;
  background-color: #262626;
`;

const StyledNav = styled.nav`
  display: flex;
  gap: 20px;
`;

export { StyledHeader, StyledNav };
