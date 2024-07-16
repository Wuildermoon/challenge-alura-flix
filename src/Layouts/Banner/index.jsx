import React from "react";
import { StyledBanner, StyledGradient } from "./Banner.styles";
import BannerCard from "../../components/BannerCard";

const Banner = () => {
  return (
    <StyledBanner>
      <BannerCard />
      <StyledGradient />
    </StyledBanner>
  );
};

export default Banner;
