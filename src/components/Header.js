import React from "react";
import styled from "styled-components";
import {SearchOutlined,LocationOnOutlined,InsertInvitationOutlined,AccessTimeOutlined,KeyboardArrowDown} from '@mui/icons-material';


function Header() {
  return (
    <>
    <Wrapper>
    <HeaderContainer style={{width:'100%'}}>
      <LogoContainer>
        <Logo1
          loading="lazy"
          src="/logo.png"
        />
        <Logo2
          loading="lazy"
          src="/logo2.png"
        />
      </LogoContainer>
      <UserInfo>
        <HelpText>Help &nbsp;</HelpText>
        <Separator />
        <HelpText> <p> &nbsp; List your service on SqueezeIn.Me &nbsp;</p> </HelpText>
        <Separator />
        <SignInText> <p>&nbsp; Log in / Sign up </p>< KeyboardArrowDown /></SignInText>
       
      </UserInfo>
      {/* <EndSpacing /> */}
    </HeaderContainer>
    <StyledDiv>
      Your Time, Your Schedule: Effortless Booking with a Click for <br />
      <span style={{ color: "rgba(252,175,23,1)" }}>Hair Stylist</span>
    </StyledDiv>
    <Form>
      <Container>
      <SearchOutlined />
        <SearchInput>
          Search for technicians, painters, etc.
        </SearchInput>
      </Container>
      <Divider />
      <Section>
        
        <Label>
          <LocationOnOutlined />
          <Input>City or Zipcode</Input>
        </Label>
      </Section>
      <Divider />
      <Section>
        
        <Label>
          <InsertInvitationOutlined />
          <Input>Date</Input>
        </Label>
      </Section>
      <Divider />
      <Section>
        
        <Label>
          <AccessTimeOutlined />
          <Input>Time</Input>
        </Label>
      </Section>
      <Divider />
      <Button>GET STARTED</Button>
    </Form>
    <Div>
      <Text>
    Experience the convenience of connecting with local experts effortlessly — no calls, no hassle. Just simple, streamlined scheduling for all your needs.
    </Text>
    </Div>
    </Wrapper>
    </>
    
  );
}
const Wrapper=styled.div`
text-align:center;
background: linear-gradient(to bottom right,rgba(91, 192, 232, 0.20),rgba(252, 175, 23, 0.15));
padding:80px 121px;
`;

const Text=styled.p`
margin:0 auto;
margin-top:20px;
  width: 632px;
  color: #FFF;
 
  font-family: "Roboto";
  font-size: 28px;
  font-style: normal;
  font-weight: 600;
  line-height: 33px;
`;

const Div=styled.div`
background: url("./Frame153(1).png");
margin-top: 40px;
width: auto;
  height: 280px;
  background-repeat: no-repeat;
  background-size: contain;
  text-align: center;
  background-position: center;
  background-size: contain;
  color:black;
  display:flex;
  align-items: center;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  @media (max-width: 991px) {
    flex-wrap: wrap;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  gap: 20px;
`;

const Logo1 = styled.img`
  aspect-ratio: 1.73;
  object-fit: contain;
  object-position: center;
  width: 64px;
  overflow: hidden;
  max-width: 100%;
`;

const Logo2 = styled.img`
  aspect-ratio: 7.84;
  object-fit: contain;
  object-position: center;
  width: 196px;
  overflow: hidden;
  align-self: center;
  max-width: 100%;
  margin: auto 0;
`;

const UserInfo = styled.div`
  align-self: center;
  display: flex;
  flex-direction: row;
  margin: auto 0;
  padding: 1px 0;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const HelpText = styled.div`
  color: var(--Main_clr, #253d4e);
  align-self: stretch;
  white-space: nowrap;
  font: 500 20px/120% Quicksand, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const Separator = styled.div`
  background-color: var(--Main_clr, #253d4e);
  align-self: stretch;
  display: flex;
  width: 1px;
  height: 24px;
  flex-direction: column;
`;



const SignInText = styled.div`
  color: var(--Main_clr, #253d4e);
  font: 500 20px/120% Quicksand, sans-serif;
`;

const UserIcon = styled.img`
  aspect-ratio: 1.63;
  object-fit: contain;
  object-position: center;
  width: 13px;
  overflow: hidden;
  align-self: center;
  max-width: 100%;
  margin: auto 0;
`;

const EndSpacing = styled.div`
  background-color: var(--Main_clr, #253d4e);
  align-self: end;
  display: flex;
  margin-right: 20px;
  width: 153px;
  height: 1px;
  flex-direction: column;
  @media (max-width: 991px) {
    margin-right: 10px;
  }
`;

export default Header;




const StyledDiv = styled.div`
  
text-align: center;
  max-width: 827px;
  margin: 0 auto;
  padding: 65px 0;
  color: rgb(37, 61, 78);
  letter-spacing: 0.7px;
  font-size: 48px;
  font-family: Quicksand,sans-serif;
  font-weight: 600;
  line-height: 63px;
}

  @media (max-width: 991px) {
    font-size: 40px;
    line-height: 52px;
  }
`;


  

const Form = styled.form`
  border-radius: 100px;
  border: 1px solid var(--grey, #d3d3d3);
  background-color: var(--white, #fff);
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 20px;
  padding: 13px 15px 13px 48px;
  
  @media (max-width: 991px) {
    flex-wrap: wrap;
    padding-left: 20px;
  }
`;

const Container = styled.div`
  align-items: center;
  align-self: center;
  display: flex;
  gap: 16px;
  margin: auto 0;
`;

const Logo = styled.span`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 20px;
  overflow: hidden;
  max-width: 100%;
  margin: auto 0;
`;

const SearchInput = styled.div`
  color: var(--Main_clr, #253d4e);
  align-self: stretch;
  flex-grow: 1;
  white-space: nowrap;
  font: 500 20px/120% Quicksand, sans-serif;
  
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const Section = styled.div`
  justify-content: space-between;
  align-self: center;
  display: flex;
  gap: 20px;
  margin: auto 0;
`;

const Divider = styled.div`
  background-color: var(--grey, #d3d3d3);
  display: flex;
  width: 2px;
  height: 50px;
  flex-direction: column;
`;

const Label = styled.label`
  color: var(--Main_clr, #253d4e);
  align-self: stretch;
  flex-grow: 1;
  white-space: nowrap;
  font: 500 20px/120% Quicksand, sans-serif;
  
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const Image = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 20px;
  overflow: hidden;
  max-width: 100%;
  margin: auto 0;
`;

const Input = styled.div`
  color: var(--Main_clr, #253d4e);
  align-self: stretch;
  flex-grow: 1;
  white-space: nowrap;
  font: 500 20px/120% Quicksand, sans-serif;
  
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const Button = styled.button`
  color: #fff;
  white-space: nowrap;
  justify-content: center;
  border-radius: 100px;
  background-color: #5bc0e8;
  align-self: stretch;
  padding: 10px 40px;
  font: 500 21px/117% Roboto,sans-serif;
  border: skyblue;
  
  @media (max-width: 991px) {
    white-space: initial;
    padding: 0 20px;
  }
`;

