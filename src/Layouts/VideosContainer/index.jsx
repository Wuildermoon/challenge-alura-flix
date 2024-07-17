import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import Card from "../../components/Card";
import Title from "../../components/Title";
import {
  StyledContainer,
  StyledDiv,
  StyledSection,
} from "./VideosContainer.styles";

const VideosContainer = () => {
  const { videos, categories } = useContext(GlobalContext);

  return (
    <StyledContainer>
      {categories.map((category) => {
        return (
          <StyledSection key={category.id}>
            <Title backgroundColor={category.color}>{category.title}</Title>
            <StyledDiv>
              {videos
                .filter((video) => video.category === category.title)
                .map((video) => (
                  <Card
                    key={video.id}
                    outline={category.color}
                    borderRadius={"15px 15px 0 0"}
                    src={video.banner}
                    alt={video.title}
                  />
                ))}
            </StyledDiv>
          </StyledSection>
        );
      })}
    </StyledContainer>
  );
};

export default VideosContainer;
