import styled from "styled-components";
import banner from "../../assets/img/banner.png";

const StyledBanner = styled.section`
  height: 85vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${banner});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: right bottom;
  position: relative;
  box-sizing: border-box;
  padding: 0 50px;
  color: var(--white);
`;

const StyledGradient = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 100%;
  width: 100%;
  opacity: 0.5;
  background: #001233;
`;

export { StyledBanner, StyledGradient };
