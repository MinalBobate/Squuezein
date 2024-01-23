
import React from 'react'
import styled from "styled-components";
import { InputBase,InputAdornment  } from '@mui/material';

function CustomerSupport() {
  return (
    <div>
      <MainWrapper>
        <ContactWrapper>
          <Heading>Contact <span style={{color:'rgba(37, 61, 78, 1)'}}>Us</span></Heading>

          <ContactUs>

            <Lorem>Lorem ipsum dolor sit amet consectetur.</Lorem>
            
              <Container2>
                <Wrapper>
                  <ContactInfo>
                    

                      <InputBase
                        placeholder='E-mail id'
                        startAdornment={
                          <InputAdornment position="start">
                            <Image
                              loading="lazy" src="email.png"
                            />
                          </InputAdornment>
                        }
                      />
                    
                  </ContactInfo>
                  <Divider />
                  <ContactInfo>
                    

                      <InputBase placeholder='City or Zipcode'
                        startAdornment={
                          <InputAdornment position="start">
                            <Image
                              loading="lazy" src='location.png'
                            />
                          </InputAdornment>
                        }

                      />

                  </ContactInfo>

                </Wrapper>
                <ContactOptions>
                  <ContactButton>CHAT WITH US</ContactButton>
                  <ContactButton>Call us</ContactButton>
                </ContactOptions>
              </Container2>
            
          </ContactUs>
        </ContactWrapper>
        <WrapperContainer>
          <Heading1>SqueezeIn <span style={{ color: 'rgba(91, 192, 232, 1)' }}> For Business </span></Heading1>

          <BusinessWrapper>
            <div>

              {/* <Container> */}

              <Description>
                Supercharge your business for free with the world's top booking platform
                for salons and spas. Independently voted no. 1 by industry
                professionals.
              </Description>
              {/* </Container> */}
            </div>
            <ImageWrapper>
              <Image1 src="/frame149.png" alt="farme149" />
            </ImageWrapper>
          </BusinessWrapper>

        </WrapperContainer>
      </MainWrapper>
    </div>
  )
}
const ContactWrapper = styled.div`
width:100%;
@media (max-width:576px){
  
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

const Lorem = styled.div`
color:white;
font-family: Quicksand;
font-size: 54px;
font-weight: 700;
line-height: 70px; /* 129.63% */
margin:auto 0;
@media (max-width:576px){
 font-size: 28px;
line-height: 50px; /* 178.571% */
margin:0px;
}
`;
const ImageWrapper = styled.div`

@media (max-width:576px){
  text-align:center;
}
`;
const Heading1 = styled.div`
color: var(--Main_clr, #253D4E);
width:521px;
/* heading1 */
font-family: Roboto;
font-size: 62px;
font-style: normal;
font-weight: 500;
line-height: 70px; /* 112.903% */
letter-spacing: 0.62px;
@media (max-width:576px){
margin-bottom:20px;
font-size: 28px;
text-align:center;
line-height: 40px; /* 142.857% */
letter-spacing: 0.28px;
width:auto;
}
`;
const Image1 = styled.img`
width:770px;
height:623px;
margin-top:-140px;
@media (max-width:576px){
  width:192px;
  height:155px;
  margin-top: 0;
}
`;
const BusinessWrapper = styled.div`
display: flex;
direction:row;
@media (max-width:576px){
  flex-direction:column-reverse;
}
`;

// const Container = styled.div`
//                 display: flex;
//                 max-width: 553px;
//                 flex-direction: column;
//                 padding: 0 20px;
// `;

const WrapperContainer = styled.div`
                padding:30px 121px 30px 121px;
                @media (max-width:576px){
                  padding:30px 16px;
                }
                `;

const Heading = styled.div`
color:rgba(91, 192, 232, 1); 
  font-size:30px;
  margin-bottom:30px;
  font-weight:500;
  padding-left:121px;
  @media (max-width:576px){
    font-size: 24px;
    line-height: 30px;
    text-align: center;
    padding-left:0px;
  }

`;

const Title = styled.h1`
                color: #5bc0e8;
                letter-spacing: 0.62px;
                width: 100%;
                font: 500 62px/70px Roboto, sans-serif;

                @media (max-width: 991px) {
                    max - width: 100%;
                font-size: 40px;
                line-height: 50px;
  }
                `;

const Description = styled.p`
                color: var(--subtext_clr, #6c798d);
                margin-top: 92px;
                width: 70%;
  font: 500 20px/26px Quicksand,sans-serif;

                @media (max-width: 576px) {
                    width: 100%;
                margin-top: 20px;
                font: 500 16px Quicksand, sans-serif;
                line-height:20px;
                text-align:justify;
  }
                `;

const Span = styled.span`
                color: ${(props) => props.color};
                `;
const ContactUs = styled.div`
                background: url("./contactUs.png");
                background-size:cover;
                background-position:center;
                background-repeat:no-repeat;
                display:flex;
                direction:row;
                justify-content:space-around;
                height:343px;
                border-radius: 50px;
                padding: 0 70px;

               @media (max-width:576px){
                width: 100%;
                height: 318px;
                border-radius:28px;
                flex-direction:column;
                padding:0px 16px;
               }
 `;
const Title1 = styled.div`
  color: #5bc0e8;
  flex-grow: 1;
  flex-basis: auto;
  font: 500 40px/125% Quicksand, sans-serif;
`;

const Subtitle = styled.div`
  color: var(--Main_clr, #253d4e);
  flex-grow: 1;
  flex-basis: auto;
  font: 500 40px/125% Quicksand, sans-serif;
`;

const Container2 = styled.div`
  justify-content: center;
  display: flex;
  max-width: 755px;
  flex-direction: column;
  align-self:center;
`;

const Wrapper = styled.div`
 display:flex;
 flex-direction:row;

width: 700px;
height: 70px;
padding: 15px 74px;
align-items: center;
gap: 100px;
 border-radius: 100px;
 border: 1px solid #D3D3D3;
 background: #FFF;



  @media (max-width: 576px) {
    width: 398px;
height: 56px;

  }
`;
const MainWrapper = styled.div`
display:flex;
flex-direction:column;

 @media (max-width: px) {
   flex-direction:column-reverse;
 }
`;
const ContactInfo = styled.div`
  display: flex;
  gap: 16px;
  margin: auto 0;
`;

const Image = styled.img`
 
  
`;

const Input = styled.input`
  color: var(--Main_clr, #253d4e);
  font: 500 20px/120% Quicksand, sans-serif;
`;

const ContactOptions = styled.div`
  align-self: center;
  display: flex;
  margin-top: 43px;
 
  
  justify-content: space-between;
  gap: 20px;

  @media (max-width: 991px) {
    width: 100%;
    
    
    margin-top: 20px;
  }
`;

const ContactButton = styled.button`
  color: #253d4e;
  text-align: center;
  white-space: nowrap;
  justify-content: center;
  border-radius: 50px;
  flex-grow: 1;
  cursor:pointer;
  font: 600 20px/110% Roboto, sans-serif;
  
  &:nth-child(1) {
    background-color: #fff852;
    padding: 15px 19px;
  }
  
  &:nth-child(2) {
    background-color: #FFB7F4;
    padding: 0 60px;
    color: #253D4E;
    text-transform: uppercase;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 576px) {
   
  }
}`;




export default CustomerSupport