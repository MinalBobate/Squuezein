
import React from "react";
import styled from "styled-components";

function TopFeatures(props) {
  return (
    <>
    <div style={{padding:'30px 121px 30px 121px'}}>
    <div style={{color:'rgba(37, 61, 78, 1)', fontSize:'30px',marginBottom:'30px',fontFamily:'Quicksand'}}>Top <span style={{color:'rgba(91, 192, 232, 1)'}}>Freatures </span></div>
   

      <div style={{background:'rgba(91, 192, 232, 0.03)',padding: '40px 90px'}}>
      
      <div style={{display:'grid',gridTemplateRows:'auto auto',gridTemplateColumns:'auto auto auto',gridGap: '40px',}}>
      <Container>
      <ImageContainer>
        <LazyImage
          loading="lazy"
          src="oneClickReach.png"
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
          src="2.png"
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
          src="4.png"
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
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/8ff7ae67657f1b1dc75ac32b1c152bdc37a9dbe0081cf49963e723b65721da6e?apiKey=252fdac3ac61463cb0d2a2667f2e3068&"
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
          loading="lazy" src="6.png"
        />
      </ImageContainer>
      <DescriptionContainer>
        <Title>Local Discovery</Title>
        <Description>
        Explore new and nearby service providers you might not know yet. Our app connects you to a diverse range of professionals in your area..
        </Description>
      </DescriptionContainer>
    </Container>
      </div>
      <div style={{
        textAlign: 'center',
        paddingTop: '60px'
      }}>
<Button>See More Freatures</Button>

      </div>
      </div>
  
    </div>
    </>
   
  );
}
const Button=styled.button`
background: rgb(91, 192, 232);
  border: rgb(91, 192, 232) solid 1px;
  border-radius: 50px;
  padding: 16px 0;
  width: 247px;
  margin: 30px auto;
  color: white;
  font-size: 18px;

`;

const Container = styled.div`
  display: flex;
  max-width: 378px;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const ImageContainer = styled.div`
  justify-content: center;
  align-items: center;
  border-radius: 200px;
  box-shadow: 0px 4px 4px 0px rgba(37, 61, 78, 0.15);
  backdrop-filter: blur(0px);
  overflow-x: auto;
  background-color: rgba(255, 255, 255, 0.3);
  display: flex;
  width: 172px;
  flex-direction: column;
  height: 172px;
  padding: 0 8px;
`;

const LazyImage = styled.img`
  aspect-ratio: 1.64;
  object-fit: contain;
  object-position: center;
  width: 100%;
  overflow: hidden;
`;

const DescriptionContainer = styled.div`
  border-radius: 20px;
  background-color: rgba(91, 192, 232, 0.08);
  align-self: stretch;
  display: flex;
  margin-top: 10px;
  width: 350px;
  height: 200px;
  flex-direction: column;
  justify-content: center;
  padding: 28px 1px;
  box-shadow: 0 3px rgba(150, 162, 166, 0.19);
`;

const Title = styled.div`
  color: #253d4e;
  white-space: nowrap;
  font: 500 22px/127% Quicksand, sans-serif;
`;

const Description = styled.div`
  color: #6c798d;
  text-align: center;
  align-self: stretch;
  margin-top: 10px;
  font: 500 17px/24px Quicksand, sans-serif;
  padding:0 15px;
`;

export default TopFeatures;