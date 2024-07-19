import React from "react";
import StyledFooter from "./Footer.styles";
import logo from "/images/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <StyledFooter>
        <Link to="/">
          <figure>
            <img
              src={logo}
              alt="Logo de AluraFlix"
              style={{ height: "40px" }}
            />
          </figure>
        </Link>
        <p>&copy; Desarrollado por Wuilderman Berrios</p>
      </StyledFooter>
    </>
  );
};

export default Footer;
