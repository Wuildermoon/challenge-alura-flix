import React, { useContext } from "react";
import StyledBannerCard from "./BannerCard.styles";
import { GlobalContext } from "../../context/GlobalContext";
import Title from "../Title";
import CardImg from "../CardImg";

const BannerCard = () => {
  const { videos } = useContext(GlobalContext);

  return (
    <StyledBannerCard>
      <div>
        <Title
          height="5.5em"
          width="18em"
          color="--white"
          fontSize="3.5rem"
          backgroundColor="#6BD1FF"
        >
          Front End
        </Title>
        <div>
          <h3>Challenge React</h3>
          <p>
            Este challenge es una forma de aprendizaje. Es un mecanismo donde
            podrás comprometerte en la resolución de un problema para poder
            aplicar todos los conocimientos adquiridos en la formación React.
          </p>
        </div>
      </div>
      <div>
        {videos && videos.length > 0 && (
          <CardImg
            width="35rem"
            outline="#6bd1ff"
            src={videos[0].banner}
            alt={videos[0].title}
          />
        )}
      </div>
    </StyledBannerCard>
  );
};

export default BannerCard;
