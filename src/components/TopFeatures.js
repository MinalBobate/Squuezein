
import React from "react";
import styled from "styled-components";

function TopFeatures(props) {
  return (
    <>
    <WrapperContainer >
   
    <Heading >Top<span style={{color:'rgba(37, 61, 78, 1)'}}> Features</span></Heading>


      <Wrapper >
      
      <MainContainer >
      <Container>
      <ImageContainer>
        <LazyImage
          loading="lazy"
          src="pana.png"
        />
      </ImageContainer>
      <DescriptionContainer>
        <Title>One-Click Reach</Title>
        <Description>
          Save time and eliminate the hassle of contacting multiple providers.
          With just one request, instantly connect with all relevant service
          providers in your area.
        </Description>
      </DescriptionContainer>
    </Container>
    <Container>
      <ImageContainer>
        <LazyImage
          loading="lazy"
          src="2.svg"
        />
      </ImageContainer>
      <DescriptionContainer>
        <Title>Effortless scheduling</Title>
        <Description>
        Combine real-time availability, personalized appointment settings, and secure booking for a hassle-free experience.
        </Description>
      </DescriptionContainer>
    </Container>
    <Container>
      <ImageContainer>
        <LazyImage
          loading="lazy"
          src="3.png"
        />
      </ImageContainer>
      <DescriptionContainer>
        <Title>Effortless scheduling</Title>
        <Description>
        Combine real-time availability, personalized appointment settings, and secure booking for a hassle-free experience.
        </Description>
      </DescriptionContainer>
    </Container>
    <Container>
      <ImageContainer>
        <LazyImage
          loading="lazy"
          src="new4.png"
        />
      </ImageContainer>
      <DescriptionContainer>
        <Title>User Preference</Title>
        <Description>
        Set wait time preferences and choose from favorite or nearby service providers for a tailored service experience.
        </Description>
      </DescriptionContainer>
    </Container>
    <Container>
      <ImageContainer>
        <LazyImage
          loading="lazy"
          src='5.png'
        />
      </ImageContainer>
      <DescriptionContainer>
        <Title>Swift scheduling</Title>
        <Description>
        Find and book your next appointment within minutes, not hours. SqueezeIn.Me cuts down the time you spend searching and waiting on calls.
        </Description>
      </DescriptionContainer>
    </Container>
    <Container>
      <ImageContainer>
        <LazyImage
          loading="lazy" src="6.svg"
        />
      </ImageContainer>
      <DescriptionContainer>
        <Title>Local Discovery</Title>
        <Description>
        Explore new and nearby service providers you might not know yet. Our app connects you to a diverse range of professionals in your area..
        </Description>
      </DescriptionContainer>
    </Container>
    </MainContainer>
      <BtnContainer >
<Button>See More Freatures</Button>

      </ BtnContainer>
      </Wrapper>
  
    </WrapperContainer>
    </>
   
  );
}

const BtnContainer=styled.div`
text-align: center;
padding-top: 3.75rem;
@media (max-width:576px){
  padding-top: 0;
}
`;




const WrapperContainer=styled.div`
padding:1.875rem 7.56rem;
@media (max-width:576px){
  padding:1.875rem 1rem;
}
`;

const Heading=styled.div`
color:rgba(91, 192, 232, 1); 
  font-size:1.875rem;
  margin-bottom:1.875rem;
  font-weight:500;
  @media (max-width:576px){
    font-size: 1.5rem;
    line-height: 1.875rem;
    text-align: center;
  }

`;
 

const Wrapper=styled.div`
background:rgba(91, 192, 232, 0.03);
padding: 2.5rem 5.625rem;
@media (max-width:576px){
  padding:0;
}
`;

const MainContainer=styled.div`
display:grid;
grid-template-rows:auto auto;
grid-template-columns:auto auto auto;
grid-gap: 2.5rem;
@media (max-width:576px){
 display:block;
}
`;
const Button=styled.button`
background: rgb(91, 192, 232);
  border: rgb(91, 192, 232) solid 1px;
  border-radius: 3.125rem;
  padding: 1rem 0;
  cursor:pointer;
  width: 15.438rem;
  margin: 1.875rem auto;
  color: white;
  font-size: 1.125rem;

`;

const Container = styled.div`
  display: flex;
  width: 20.625rem;
  flex-direction: column;
  align-items: center;
  text-align: center;
  @media (max-width:576px){
padding:1.25rem 0.625rem 0.625rem 0.625rem;

width: 100%;
  }
`;

const ImageContainer = styled.div`
  justify-content: center;
  align-items: center;
  border-radius: 12.5rem;
  box-shadow: 0px 4px 4px 0px rgba(37, 61, 78, 0.15);
  backdrop-filter: blur(0px);
  overflow-x: auto;
  background-color: rgba(255, 255, 255, 0.3);
  display: flex;
  width: 10.75rem;
  flex-direction: column;
  height: 10.75rem;
  padding: 0 0.5rem;
`;

const LazyImage = styled.img`
  aspect-ratio: 1.64;
  object-fit: contain;
  object-position: center;
  width: 100%;
  overflow: hidden;
`;

const DescriptionContainer = styled.div`
  border-radius: 1.25rem;
  background-color: rgba(91, 192, 232, 0.08);
  align-self: stretch;
  display: flex;
  margin-top: 0.625rem;
  // width: 33.125rem;
  height: 12.5rem;
  flex-direction: column;
  justify-content: center;
  padding: 1.75rem 1px;
  box-shadow: 0 3px rgba(150, 162, 166, 0.19);
  @media (max-width:576px){
    width: 100%;
    padding:1.25rem 1px;
    height:auto;
  }
`;

const Title = styled.div`
  color: #253d4e;
  white-space: nowrap;
  font: 500 1.375rem/127% Quicksand, sans-serif;
`;

const Description = styled.div`
  color: #6c798d;
  text-align: center;
  align-self: stretch;
  margin-top: 0.625rem;
  font: 500 1.063rem/1.5rem Quicksand, sans-serif;
  padding:0 0.938rem;
`;

export default TopFeatures;