import React from "react";
import StyledFooter from "./Footer.styles";
import logo from "../../assets/img/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <StyledFooter>
      <Link to="/">
        <img src={logo} alt="Logo de AluraFlix" style={{ height: "40px" }} />
      </Link>
      <p>&copy; Desarrollado por Wuilderman Berrios</p>
    </StyledFooter>
  );
};

export default Footer;
