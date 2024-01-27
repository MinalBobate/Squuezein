import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { PersonOutline, SearchOutlined, LocationOnOutlined, InsertInvitationOutlined, AccessTimeOutlined, KeyboardArrowDown } from '@mui/icons-material';
import Banner from "./Banner";




function Nav() {

  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 567);



  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 576);
    };

    window.addEventListener('resize', handleResize);


    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <Wrapper>
        <HeaderContainer style={{ width: '100%' }}>
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

          <div>
            {isLargeScreen ? (
              <UserInfo>
                <HelpText>Help &nbsp;</HelpText>
                <Separator />
                <HelpText> <p> &nbsp; List your service on SqueezeIn.Me &nbsp;</p> </HelpText>
                <Separator />
                <SignInText style={{ display: 'flex' }}> <p>&nbsp; Log in / Sign up </p>< KeyboardArrowDown /></SignInText>

              </UserInfo>
            ) : (
              <UserWrapper><PersonOutline /></UserWrapper>
            )}
          </div>



        </HeaderContainer>

        <StyledDiv>
          Your Time, Your Schedule: Effortless Booking with a Click for
          <span style={{ color: "rgba(252,175,23,1)", }}> <Banner /></span>

        </StyledDiv>
        <BannerSearchWrapper>
          <Form>
            <Container>
              <Section>

                <Label >
                  <SearchOutlined color="#253D4E" />
                  <InputBase placeholder="Search for technicians, painters, etc."
                 />
                </Label>
              </Section>

              <Divider />
              <Section>

                <Label >
                  <LocationOnOutlined color="#253D4E"/>
                  <InputBase placeholder='City or Zipcode'
                   />
                </Label>
              </Section>
              <Divider />
              <Section>

                <Label>
                  <InsertInvitationOutlined color="#253D4E"/>
                  <InputBase 
                 placeholder='Date'
                  />
                </Label>
              </Section>
              <Divider />
              <Section>

                <Label>
                  <AccessTimeOutlined color="#253D4E"/>
                  <InputBase 
                   placeholder='Time'
                  />
                </Label>
              </Section>

              <Button>GET STARTED</Button>
            </Container>
          </Form>
          <BannerContainer>
          <Div>
            <Text>
            Experience the convenience of connecting with local experts effortlessly — no calls, no hassle. Just simple, streamlined scheduling for all your needs.
            </Text>
          </Div>
          </BannerContainer>
        </BannerSearchWrapper>
      </Wrapper>
    </>

  );
}

const InputBase = styled.input`
 
  font-size: 16px;
  width: 100%;
  border: none;
  &::placeholder {
   color: black;
   
  }
  &:focus {
    outline: none;
  }
`;




const Wrapper = styled.div`
text-align:center;
background: linear-gradient(to bottom right,rgba(91, 192, 232, 0.20),rgba(252, 175, 23, 0.15));

@media (max-width: 576px) {

}
`;
const BannerContainer=styled.div`
@media (max-width: 576px) {
   padding:0 1.63rem;
}

`;

const BannerSearchWrapper = styled.div`
display:flex;
flex-direction:column;
@media (max-width: 576px) {
  flex-direction:column-reverse;
  }
`;
const Text = styled.p`
color: #FFF;
text-align: center;
font-family: Roboto;
font-size: 1.7rem;
font-style: normal;
font-weight: 500;
line-height: 2.5rem; /* 125% */
width: 49%;
  @media (max-width: 576px){
    width: 78%;
    font-size: 0.9rem;
    line-height: 1rem; /* 125% */
  }

`;

const UserWrapper = styled.div`
border: 2.6px solid #253D4E;
  border-radius: 50%;
  display: flex;
  width: 43.71px;
  height: 43.543px;
  justify-content: center;
  align-items: center;
  cursor:pointer;
`;

const Div = styled.div`
background: url("./Banner3.png");
width:100%;
height:20rem;

  background-repeat: no-repeat;
  background-size: contain;
  text-align: center;
  background-position: center;
  
  color:black;
  justify-content:center;
  
  display: flex;
  
  flex-direction: column;
 
  align-items: center;
  @media (max-width: 576px){
    height:10rem;
   
  }
`;

const HeaderContainer = styled.div`
display: flex;
align-items: center;
  justify-content: space-between;
  
  padding: 5.62rem 7.5rem;
  @media (max-width: 576px) {
    padding:1.5rem 1.7rem;
   
  }
`;

const LogoContainer = styled.div`
  display: flex;
  gap: 20px;
  height: 36px;
  width: 280px;
  @media (max-width: 576px) {
    height: 16px;
    width: 137px;
    gap: 10px;
  }
`;

const Logo1 = styled.img`
  aspect-ratio: 1.73;
  object-fit: contain;
  object-position: center;
  width: 64px;
  overflow: hidden;
  max-width: 100%;
  cursor:pointer;
  @media (max-width: 576px) {
    height: 16px;
    width: 24px;
    
  }
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
  cursor:pointer;
  @media (max-width: 576px) {
    height: 16px;
    width: 99px;
    
  }
`;

const UserInfo = styled.div`
  align-self: center;
  display: flex;
  flex-direction: row;
  margin: auto 0;
  padding: 1px 0;
  cursor:pointer;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const HelpText = styled.div`
  color: var(--Main_clr, #253D4E);
  align-self: stretch;
  white-space: nowrap;
  font: 500 20px/120% Quicksand, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const Separator = styled.div`
  background-color: var(--Main_clr, #253D4E);
  align-self: stretch;
  display: flex;
  width: 1px;
  height: 24px;
  flex-direction: column;
`;



const SignInText = styled.div`
  color: var(--Main_clr, #253D4E);
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






const StyledDiv = styled.div`
  
text-align: center;
width: 55rem;
color: #253D4E;
margin: 0 auto;
text-align: center;
font-family: Roboto;
font-size: 3.3rem;
font-weight: 500;
line-height: 4.375rem; /* 116.667% */
letter-spacing: 0.0375rem;


  @media (max-width: 576px) {
    margin-top:1.88rem;
padding: 0 1.5rem;
width: 100%;
font-family: Roboto;
font-size: 1.6rem;
font-style: normal;
font-weight: 500;
line-height: 2rem; /* 142.857% */
   
  }
`;




const Form = styled.form`
  border-radius: 100px;
  border: 1px solid var(--grey, #d3d3d3);
  background-color: var(--white, #fff);
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  // gap: 20px;
  margin: 3rem 7.56rem;
  
  @media (max-width: 576px) {
    border-radius: 0px;
    border: none;
    background-color: transparent;
    justify-content: center;
    padding:0;
    width:100%;
    margin:0;
  }
`;

const Container = styled.div`
  align-items: center;
  align-self: center;
  padding: 0.5rem ;
  display: flex;
  gap: 16px;
  margin: auto 0;
  @media (max-width: 576px) {
    flex-direction:column;
    padding:1.5rem;
    width:100%;
  }
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

const SearchInput = styled.input`
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
  @media (max-width: 576px) {
    width:100%;
  }
`;

const Divider = styled.div`
  background-color: var(--grey, #d3d3d3);
  display: flex;
  width: 2px;
  height: 50px;
  flex-direction: column;
  @media (max-width: 576px) {
    display:none;
  }
`;

const Label = styled.label`
  color: var(--Main_clr, #253d4e);
  align-self: stretch;
  flex-grow: 1;
  white-space: nowrap;
  font: 500 20px/120% Quicksand, sans-serif;
  display: flex;
  gap:10px;
  align-items: center;
  
  @media (max-width: 576px) {
    border-radius: 24px;
  border: 2px solid #5BC0E8;
  background: #FFF;
  // width:100%;
  height: 50px;
  padding: 0 1rem;
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

const Input = styled.input`
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
  cursor:pointer;
  font: 500 21px/117% Roboto,sans-serif;
  border: skyblue;
  
  @media (max-width: 991px) {
    padding: 14px 0;
    font: 500 20px/117% Roboto,sans-serif;
    border: skyblue;
    margin: 0 auto;
    width: 160px;
  }
`;

export default Nav;