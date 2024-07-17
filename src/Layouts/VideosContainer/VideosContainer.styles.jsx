import styled from "styled-components";

const StyledContainer = styled.section`
  display: flex;
  align-items: center;
  flex-flow: column nowrap;
  box-sizing: border-box;
  padding: 2rem 3rem;
`;

const StyledSection = styled.section`
  display: flex;
  flex-flow: column nowrap;
  gap: 25px;
  margin-bottom: 50px;
`;

const StyledDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2em;
  width: 100%;
  box-sizing: border-box;
`;

export { StyledContainer, StyledSection, StyledDiv };
