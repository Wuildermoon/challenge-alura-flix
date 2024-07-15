import React from "react";
import Button from "../../components/Button";
import { StyledHeader, StyledNav } from "./Header.styles";
import logo from "../../assets/img/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <StyledHeader>
      <Link to="/">
        <h1 style={{ height: "40px" }}>
          <img src={logo} alt="Logo de AluraFlix" style={{ height: "40px" }} />
        </h1>
      </Link>
      <StyledNav>
        <Link to="/">
          <Button
            color="--blue"
            shadow="--blue"
            background="--black"
            weight="bold"
          >
            Home
          </Button>
        </Link>
        <Link to="/add">
          <Button color="--white" weight="bold">
            Nuevo Video
          </Button>
        </Link>
      </StyledNav>
    </StyledHeader>
  );
};

export default Header;
