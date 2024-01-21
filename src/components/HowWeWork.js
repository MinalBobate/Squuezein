import React from "react";
import styled from "styled-components";
// import {Divider} from '@mui/material'

const HowWeWork = (props) => {
  return (
    <>
<div style={{padding:'30px 121px 30px 121px'}}>
<div style={{color:'rgba(37, 61, 78, 1)', fontSize:'30px',marginBottom:'30px'}}>How We <span style={{color:'rgba(91, 192, 232, 1)'}}>Work </span></div>

    <Container>
      <LeftColumn>
        <img
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
        <img
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
        <img
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
        <img
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
        <img
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

    </div>
    </>
  );
};

const Container = styled.div`
display:flex;
direction:row;
padding:50px 110px;
  @media (max-width: 991px) {
    padding-right: 20px;
  }
`;

const Divider=styled.div`
border: 2px solid rgba(211, 211, 211, 0.2);
  width: 500px;
  margin: 0 auto;
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
  }
`;

const ContentWrapper = styled.span`
  display: flex;
  flex-direction: column;

  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
  }
`;

const TitleWrapper = styled.span`
  justify-content: space-between;
  display: flex;
  gap: 20px;

  @media (max-width: 991px) {
    max-width: 100%;
    flex-wrap: wrap;
  }
`;

const TitleNumber = styled.span`
  color: var(--Main_clr, #253d4e);
  white-space: nowrap;
  stroke-width: 2px;
  border: 2px solid black;
  border-radius: 50%;
  justify-content: center;
  padding: 13px 24px;
  font: 600 24px/125% Quicksand, sans-serif;

  @media (max-width: 991px) {
    white-space: initial;
    padding: 0 20px;
  }
`;

const TitleText = styled.div`
  color: var(--Main_clr, #253d4e);
  align-self: center;
  flex-grow: 1;
  flex-basis: auto;
  margin: auto 0;
  font: 500 28px/114% Quicksand, sans-serif;

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Description = styled.div`
  color: var(--subtext_clr, #6c798d);
  margin-top: 54px;
  font: 500 20px/28px Quicksand, sans-serif;
width:500px;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
  }
`;

export default HowWeWork;