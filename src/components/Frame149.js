import React from "react";
import styled from "styled-components";

function Frame149() {
  return (
    <>
    <div style={{display:'flex',direction:'row'}}>
    <div>
    <Container>
      <Title>
        SqueezeIn for <Span color="rgba(91, 192, 232, 1)">Business</Span>
      </Title>
      <Description>
        Supercharge your business for free with the world's top booking platform
        for salons and spas. Independently voted no. 1 by industry
        professionals.
      </Description>
    </Container>
    </div>
    <div>
        <img src="/frame149.png" alt="farme149" />
    </div>
    </div>
   
    </>
  );
}

const Container = styled.div`
  display: flex;
  max-width: 553px;
  flex-direction: column;
  padding: 0 20px;
`;

const Title = styled.h1`
  color: #5bc0e8;
  letter-spacing: 0.62px;
  width: 100%;
  font: 500 62px/70px Roboto, sans-serif;

  @media (max-width: 991px) {
    max-width: 100%;
    font-size: 40px;
    line-height: 50px;
  }
`;

const Description = styled.p`
  color: var(--subtext_clr, #6c798d);
  margin-top: 92px;
  width: 100%;
  font: 500 22px/28px Quicksand, sans-serif;

  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
  }
`;

const Span = styled.span`
  color: ${(props) => props.color};
`;

export default Frame149;