import React from "react";
import styled from "styled-components";

function HomeImprovementComponent(props) {
  return (
    <Container>
      <ImageContainer>
        <LazyImage
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/4742e2eaf642a188e812fd99c671e50b888b437457eeffbd3fccdf9a55580d52?apiKey=252fdac3ac61463cb0d2a2667f2e3068&"
        />
      </ImageContainer>
      <Text>Home Improvement</Text>
    </Container>
  );
}

const Container = styled.div`
  border-radius: 28px;
  border: 2px solid #5bc0e8;
  background-color: rgba(91, 192, 232, 0.1);
  display: flex;
  max-width: 351px;
  flex-direction: column;
  align-items: center;
  padding: 48px 43px;
`;

const ImageContainer = styled.div`
  border-radius: 50%;
  display: flex;
  width: 160px;
  max-width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 32px;
`;

const LazyImage = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 100%;
  overflow: hidden;
`;

const Text = styled.div`
  color: var(--Main_clr, #253d4e);
  text-align: center;
  align-self: stretch;
  margin: 10px 0 19px;
  font: 500 30px/34px Quicksand, sans-serif;
`;

export default HomeImprovementComponent;