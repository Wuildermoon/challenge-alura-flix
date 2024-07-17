import React from "react";
import { StyledButton, StyledCard, StyledDiv } from "./Card.styles";
import CardImg from "../CardImg";

const Card = ({ width, outline, borderRadius, src, alt }) => {
  return (
    <StyledCard>
      <CardImg
        outline={outline}
        borderRadius={borderRadius}
        src={src}
        alt={alt}
      />
      <StyledDiv $outline={outline}>
        <StyledButton>
          <span>
            <img
              src="/images/icons/icon-delete.png"
              alt="Icono Editar"
            />
          </span>
          borrar
        </StyledButton>
        <StyledButton>
          <span>
            <img src="/images/icons/icon-edit.png" alt="Icono Editar" />
          </span>
          editar
        </StyledButton>
      </StyledDiv>
    </StyledCard>
  );
};

export default Card;
