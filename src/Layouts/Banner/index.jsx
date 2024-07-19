import React from "react";
import { StyledBanner, StyledGradient } from "./Banner.styles";
import BannerCard from "../../components/BannerCard";

const Banner = () => {
  return (
    <>
      <StyledBanner>
        <StyledGradient />
        <BannerCard />
      </StyledBanner>
    </>
  );
};

export default Banner;
