import React, { useContext } from "react";
import {
  StyledBannerCard,
  StyledDiv,
  StyledH3,
  StyledP,
} from "./BannerCard.styles";
import { GlobalContext } from "../../context/GlobalContext";
import Title from "../Title";
import CardImg from "../CardImg";

const BannerCard = () => {
  const { videos } = useContext(GlobalContext);

  return (
    <StyledBannerCard>
      <StyledDiv>
        <Title
          color="--white"
          fontSize="48px"
          lineHeight="56px"
          backgroundColor="#6BD1FF"
        >
          Front End
        </Title>
        <div>
          <StyledH3>Challenge React</StyledH3>
          <StyledP>
            Este challenge es una forma de aprendizaje. Es un mecanismo donde
            podrás comprometerte en la resolución de un problema para poder
            aplicar todos los conocimientos adquiridos en la formación React.
          </StyledP>
        </div>
      </StyledDiv>
      <div>
        {videos
          .filter((video) => video.category === "banner")
          .map((video) => {
            return (
              <CardImg
                outline="#6bd1ff"
                borderRadius="15px"
                src={video.banner}
                alt={video.title}
                key={video.id}
              />
            );
          })}
        {/* {videos && videos.length > 0 && (
          
        )} */}
      </div>
    </StyledBannerCard>
  );
};

export default BannerCard;
