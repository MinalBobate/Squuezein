
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
padding:3.75rem 0;
@media (max-width:576px){
  padding: 3rem 0;
}
`;
const Divider = styled.div`
  background-color: var(--grey, #d3d3d3);
  display: flex;
  width: 0.125rem;
  height: 3.125rem;
  flex-direction: column;
  @media (max-width: 576px) {
    display:none;
  }
`;

const Lorem = styled.div`
color:white;
font-family: Quicksand;
font-size: 3.375rem;
font-weight: 700;
line-height: 4.375rem; /* 129.63% */
margin:auto 0;
@media (max-width:576px){
 font-size: 1.75rem;
line-height: 3.125rem; /* 178.571% */
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
width:32rem;
/* heading1 */
font-family: Roboto;
font-size: 3.4rem;
font-style: normal;
font-weight: 500;
line-height: 3.375rem; /* 112.903% */

@media (max-width:576px){
margin-bottom:1.25rem;
font-size: 1.75rem;
text-align:center;
line-height: 2.5rem; /* 142.857% */

width:auto;
}
`;
const Image1 = styled.img`
width:48.125rem;
height:38.938rem;
margin-top:-6.5rem;
@media (max-width:576px){
  width:12rem;
  height:9.688rem;
  margin-top: 0;
}
`;
const BusinessWrapper = styled.div`
display: flex;
direction:row;
gap:10.25rem;
@media (max-width:576px){
  flex-direction:column-reverse;
  gap:1.25rem;
}
`;

// const Container = styled.div`
//                 display: flex;
//                 max-width: 553px;
//                 flex-direction: column;
//                 padding: 0 1.25rem;
// `;

const WrapperContainer = styled.div`
                padding:3.725rem 7.56rem ;
                @media (max-width:576px){
                  padding:1.875rem 1rem;
                }
                `;

const Heading = styled.div`
color:rgba(91, 192, 232, 1); 
  font-size:1.875rem;
  margin-bottom:1.875rem;
  font-weight:500;
  padding-left:7.56rem;
  @media (max-width:576px){
    font-size: 1.5rem;
    line-height: 1.875rem;
    text-align: center;
    padding-left:0px;
  }

`;

const Title = styled.h1`
                color: #5bc0e8;
                letter-spacing: 0.62px;
                width: 100%;
                font: 500 3.875rem/4.375rem Roboto, sans-serif;

                @media (max-width: 991px) {
                    max - width: 100%;
                font-size: 2.5rem;
                line-height: 3.125rem;
  }
                `;

const Description = styled.p`
                color: var(--subtext_clr, #6c798d);
                margin-top: 5.75rem;
                // width: 70%;
  font: 500 1.25rem/1.625rem Quicksand,sans-serif;

                @media (max-width: 576px) {
                    width: 100%;
                margin-top: 1.25rem;
                font: 500 1rem Quicksand, sans-serif;
                line-height:1.25rem;
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
                gap:2.69rem;
                justify-content:space-around;
                height:21.438rem;
                border-radius: 3.125rem;
                padding: 0 4.375rem;

               @media (max-width:576px){
                width: 100%;
                height: 18.875rem;
                border-radius:1.75rem;
                flex-direction:column;
                padding:0px 1rem;
               }
 `;
const Title1 = styled.div`
  color: #5bc0e8;
  flex-grow: 1;
  flex-basis: auto;
  font: 500 2.5rem/125% Quicksand, sans-serif;
`;

const Subtitle = styled.div`
  color: var(--Main_clr, #253d4e);
  flex-grow: 1;
  flex-basis: auto;
  font: 500 2.5rem/125% Quicksand, sans-serif;
`;

const Container2 = styled.div`
  justify-content: center;
  display: flex;
  width:100%;
  flex-direction: column;
  align-self:center;
`;

const Wrapper = styled.div`
 display:flex;
 flex-direction:row;

width: 100%;
height: 4.375rem;
padding: 0.938rem 4.625rem;
align-items: center;
gap: 6.25rem;
 border-radius: 6.25rem;
 border: 1px solid #D3D3D3;
 background: #FFF;



  @media (max-width: 576px) {
    width: 100%;
height: 3.5rem;

  }
`;
const MainWrapper = styled.div`
display:flex;
flex-direction:column;

 @media (max-width: 576px) {
   flex-direction:column-reverse;
 }
`;
const ContactInfo = styled.div`
  display: flex;
  gap: 1rem;
  margin: auto 0;
`;

const Image = styled.img`
 
  
`;

const Input = styled.input`
  color: var(--Main_clr, #253d4e);
  font: 500 1.25rem/120% Quicksand, sans-serif;
`;

const ContactOptions = styled.div`
  align-self: center;
  display: flex;
  margin-top: 2.688rem;
 
  
  justify-content: space-between;
  gap: 1.25rem;

  @media (max-width: 576px) {
    width: 100%;
    
    
    margin-top: 1.25rem;
  }
`;

const ContactButton = styled.button`
  color: #253d4e;
  text-align: center;
  white-space: nowrap;
  justify-content: center;
  border-radius: 3.125rem;
  flex-grow: 1;
  cursor:pointer;
  font: 600 1.25rem/110% Roboto, sans-serif;
  
  &:nth-child(1) {
    background-color: #fff852;
    
    padding: 1rem;
  }
  
  &:nth-child(2) {
    background-color: #FFB7F4;
    padding: 0 3rem;
    color: #253D4E;
    text-transform: uppercase;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 576px) {
    &:nth-child(1) {
      width:50%;
      padding:1rem 0;
    }
    &:nth-child(2) {
      width:50%;
      padding:1rem 0;
    }
  }
}`;




export default CustomerSupport