import React, { useContext } from "react";
import Header from "../../Layouts/Header";
import Footer from "../../Layouts/Footer";
import Banner from "../../Layouts/Banner";
import VideosContainer from "../../Layouts/VideosContainer";
import StyledMain from "./Home.styles";
import PopUpWindow from "../../Layouts/PopUpWindow";
import { GlobalContext } from "../../context/GlobalContext";

const Home = () => {
  const { isModalOpen } = useContext(GlobalContext);
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
      {isModalOpen && <PopUpWindow />}
    </>
  );
};

export default Home;
