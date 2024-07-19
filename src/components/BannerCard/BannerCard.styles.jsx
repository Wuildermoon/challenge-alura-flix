import styled from "styled-components";

const StyledBannerCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
  position: inherit;
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const StyledH3 = styled.h3`
  font-family: var(--font-regular);
  display: inline;
  font-size: 46px;
  font-weight: 400;
  line-height: 54px;
  text-align: left;
`;

const StyledP = styled.p`
  font-family: var(--font-light);
  font-size: 18px;
  font-weight: 300;
  line-height: 21px;
  text-align: left;
`;

export { StyledBannerCard, StyledDiv, StyledH3, StyledP };
