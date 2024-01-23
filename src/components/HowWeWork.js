import React from "react";
import styled from "styled-components";
// import {Divider} from '@mui/material'

const HowWeWork = (props) => {
  return (
    <>
<WrapperContainer >
<Heading >How We<span style={{color:'rgba(37, 61, 78, 1)'}}> Work</span></Heading>


    <Container>
      <LeftColumn>
        <Image
          loading="lazy"
          src="11.png" width='260px'
        />
      </LeftColumn>
      <RightColumn>
        <ContentWrapper>
          <TitleWrapper>
            <TitleNumber>1</TitleNumber>
            <TitleText>Log In & Select Service</TitleText>
          </TitleWrapper>
          <Description>
            Sign in to SqueezeIn and choose your desired service from a range of categories.
          </Description>
        </ContentWrapper>
      </RightColumn>
    </Container>
    <Divider />
    <Container>
      <LeftColumn>
        <Image
          loading="lazy"
          src="12.png" width='260px'
        />
      </LeftColumn>
      <RightColumn>
        <ContentWrapper>
          <TitleWrapper>
            <TitleNumber>2</TitleNumber>
            <TitleText>Specify Preference</TitleText>
          </TitleWrapper>
          <Description>
          Set your preferred date, time, and location, and add an optional tip to prioritize your request.
          </Description>
        </ContentWrapper>
      </RightColumn>
    </Container>
    <Divider />
    <Container>
      <LeftColumn>
        <Image
          loading="lazy"
          src="13.png" width='260px'
        />
      </LeftColumn>
      <RightColumn>
        <ContentWrapper>
          <TitleWrapper>
            <TitleNumber>3</TitleNumber>
            <TitleText>Broadcast Request</TitleText>
          </TitleWrapper>
          <Description>
          With one click, send your service request to all relevant providers in your area.          </Description>
        </ContentWrapper>
      </RightColumn>
    </Container>
    <Divider />
    <Container>
      <LeftColumn>
        <Image
          loading="lazy"
          src="14.png" width='260px'
        />
      </LeftColumn>
      <RightColumn>
        <ContentWrapper>
          <TitleWrapper>
            <TitleNumber>4</TitleNumber>
            <TitleText>Review Responses</TitleText>
          </TitleWrapper>
          <Description>
          Providers respond with their availability, any token amount, and potential wait times. Review and select the provider that best matches your needs.          </Description>
        </ContentWrapper>
      </RightColumn>
    </Container>
    <Divider />
    <Container>
      <LeftColumn>
        <Image
          loading="lazy"
          src="15.png" width='260px'
        />
      </LeftColumn>
      <RightColumn>
        <ContentWrapper>
          <TitleWrapper>
            <TitleNumber>5</TitleNumber>
            <TitleText>Confirm & Pay</TitleText>
          </TitleWrapper>
          <Description>
          Securely pay the token amount to confirm your appointment with the chosen provider.          </Description>
        </ContentWrapper>
      </RightColumn>
    </Container>

   </WrapperContainer >
    </>
  );
};

const WrapperContainer=styled.div`
padding:30px 121px 30px 121px;
@media (max-width:576px){
  padding:30px 16px;
}
`;

const Heading=styled.div`
color:rgba(91, 192, 232, 1); 
  font-size:30px;
  margin-bottom:30px;
  font-weight:500;
  @media (max-width:576px){
    font-size: 24px;
    line-height: 30px;
    text-align: center;
  }

`;

const Container = styled.div`
display:flex;
direction:row;
padding:50px 110px;
  @media (max-width: 576px) {
    padding:0;
    flex-direction:column;

  }
`;

const Image=styled.img`
width:260px;
@media (max-width: 576px) {
 width:182px;
 height:161px;
 align-self:center;
}
`;


const Divider=styled.div`
border: 2px solid rgba(211, 211, 211, 0.2);
  width: 50%;
  margin: 0 auto;
  @media (max-width: 576px) {
   margin: 30px auto; 
   width: 100%;
  }
`;

const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 39%;
  margin-left: 0px;

  @media (max-width: 991px) {
    width: 100%;
  }
`;

const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 61%;
  margin-left: 20px;

  @media (max-width: 991px) {
    width: 100%;
     margin-left: 0
     ;
  }
`;

const ContentWrapper = styled.span`
  display: flex;
  flex-direction: column;

  @media (max-width: 576px) {
    max-width: 100%;
    margin-top: 20px;
  }
`;

const TitleWrapper = styled.span`
  justify-content: space-between;
  display: flex;
  gap: 20px;

  @media (max-width: 576px) {
    max-width: 100%;
    
    flex-direction:row;
  }
`;

const TitleNumber = styled.span`
  color: var(--Main_clr, #253d4e);
  
  stroke-width: 2px;
  border: 2px solid black;
  border-radius: 50%;
  justify-content: center;
  padding: 13px 24px;
  font: 600 24px/125% Quicksand, sans-serif;

  @media (max-width: 576px) {
    white-space: initial;
   padding: 1px 12px;
  }
`;

const TitleText = styled.div`
  color: var(--Main_clr, #253d4e);
  align-self: center;
  flex-grow: 1;
  flex-basis: auto;
  margin: auto 0;
  font: 600 28px/114% Quicksand, sans-serif;

  @media (max-width: 576px) {
    max-width: 100%;
    font-size:18px;
  }
`;

const Description = styled.div`
  color: var(--subtext_clr, #6c798d);
  margin-top: 54px;
  font: 500 20px Quicksand, sans-serif;
width:500px;
  @media (max-width: 576px) {
    width: 100%;
    margin-top: 10px;
    text-align: center;
    font-size:16px;
  }
`;

export default HowWeWork;