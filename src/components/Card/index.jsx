import React, { useContext } from "react";
import { StyledButton, StyledCard, StyledDiv } from "./Card.styles";
import CardImg from "../CardImg";
import { GlobalContext } from "../../context/GlobalContext";

const Card = ({ width, outline, borderRadius, src, alt, video }) => {
  const { toggleModal } = useContext(GlobalContext);

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
            <img src="/images/icons/icon-delete.png" alt="Icono Borrar" />
          </span>
          borrar
        </StyledButton>
        <StyledButton onClick={() => toggleModal(video)}>
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
