import React from "react";
import Header from "../../Layouts/Header";
import Footer from "../../Layouts/Footer";
import Banner from "../../Layouts/Banner";
import VideosContainer from "../../Layouts/VideosContainer";
import StyledMain from "./Home.styles";

const Home = () => {
  return (
    <>
      <Header />
      <StyledMain>
        <section>
        <Banner />
        <VideosContainer />
        </section>
      </StyledMain>
      <Footer />
    </>
  );
};

export default Home;
