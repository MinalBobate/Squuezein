import React ,{ useState, useEffect }from "react";
import styled from "styled-components";
import {PersonOutline,SearchOutlined,LocationOnOutlined,InsertInvitationOutlined,AccessTimeOutlined,KeyboardArrowDown} from '@mui/icons-material';
import { InputBase, } from '@mui/material';
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
                            <SignInText style={{display:'flex'}}> <p>&nbsp; Log in / Sign up </p>< KeyboardArrowDown /></SignInText>

                        </UserInfo>
                    ) : (
                        <UserWrapper><PersonOutline /></UserWrapper>
                    )}
                </div>



            </HeaderContainer>
 
    <StyledDiv>
      Your Time, Your Schedule: Effortless Booking with a Click for 
      <span style={{ color: "rgba(252,175,23,1)" }}> <Banner/></span>
      
    </StyledDiv>
    <BannerSearchWrapper>
    <Form>
      <Container>
      <Section>
        
        <Label >
      <SearchOutlined />
        <InputBase placeholder='Search for services' />
        </Label>
      </Section>
      
      <Divider />
      <Section>
        
        <Label >
          <LocationOnOutlined />
          <InputBase placeholder='City or Zipcode'  />
        </Label>
      </Section>
      <Divider />
      <Section>
        
        <Label>
          <InsertInvitationOutlined />
          <InputBase placeholder='City or Zipcode'  />
        </Label>
      </Section>
      <Divider />
      <Section>
        
        <Label>
          <AccessTimeOutlined />
          <InputBase placeholder='Time'  />
        </Label>
      </Section>
      
      <Button>GET STARTED</Button>
      </Container>
    </Form>
    <Div>
      <Text>
    Experience the convenience of connecting with local experts — no calls, no hassle. Just simple scheduling for all your needs.
    </Text>
    </Div>
    </BannerSearchWrapper>
    </Wrapper>
    </>
    
  );
}


const Wrapper=styled.div`
text-align:center;
background: linear-gradient(to bottom right,rgba(91, 192, 232, 0.20),rgba(252, 175, 23, 0.15));
padding:80px 121px;
@media (max-width: 576px) {
padding:40px 16px;
}
`;

const BannerSearchWrapper =styled.div`
display:flex;
flex-direction:column;
@media (max-width: 576px) {
  flex-direction:column-reverse;
  }
`;
const Text =styled.p`
margin:0 auto;
margin-top:20px;
  width: 632px;
  color: #FFF;
 
  font-family:Roboto;
  font-size: 32px;
  font-style: normal;

  text-align: center;
  
  font-weight: 500;
  line-height: 40px;

  @media (max-width: 576px){
  margin:0;
    width: 263px;
    
    text-align: center;
   
    font-size: 14px;
    
    font-weight: 500;
    line-height: 15px; /* 125% */
  }

`;

const UserWrapper=styled.div`
border: 2.6px solid #253D4E;
  border-radius: 50%;
  display: flex;
  width: 43.71px;
  height: 43.543px;
  justify-content: center;
  align-items: center;
  cursor:pointer;
`;

const Div=styled.div`
background: url("./Frame153(1).png");
margin-top: 40px;

  background-repeat: no-repeat;
  background-size: contain;
  text-align: center;
  background-position: center;
  
  color:black;
 
  
  display: flex;
  width: 1274.72px;
  height: 339.753px;
  padding: 94.815px 98.72px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 576px){
    margin: 0 auto;
    margin-top: 0;
    width: 100%;
    height: 146px;
    padding:20px 0;
  }
`;

const HeaderContainer = styled.div`
display: flex;
align-items: center;
  justify-content: space-between;
  gap: 20px;
  @media (max-width: 576px) {
  padding:0 24px;
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






const StyledDiv = styled.div`
  
text-align: center;
  max-width: 780px;
  margin: 0 auto;
  padding: 65px 0;
  color: #253D4E;
  letter-spacing: 0.7px;
  font-size: 48px;
  font-family: Roboto;
  font-weight: 600;
  line-height: 63px;


  @media (max-width: 576px) {
    width: 100%;
    padding-bottom:0;

font-family: Roboto;
font-size: 26px;
font-style: normal;
font-weight: 500;
line-height: 40px; /* 142.857% */
   
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
  
  @media (max-width: 576px) {
    border-radius: 0px;
    border: none;
    background-color: transparent;
    justify-content: center;
    padding:0;
  }
`;

const Container = styled.div`
  align-items: center;
  align-self: center;
  display: flex;
  gap: 16px;
  margin: auto 0;
  @media (max-width: 576px) {
    flex-direction:column;
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
  width: 375px;
  height: 50px;
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