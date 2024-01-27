import React from "react";
import styled from "styled-components";

function Deals() {
    return (
        <WrapperContainer>
            <div>
            <Heading >Great Deals in<span style={{color:'rgba(37, 61, 78, 1)'}}> Bothell</span></Heading>

            </div>
            <Wrapper>
                <Container>
                    <ImageContainer><Image loading="lazy" src='deal1.png' /></ImageContainer>
                    <DiscountBanner>UP TO $30 OFF</DiscountBanner>
                    <Specials>Best Eyelash Extensions in San Francisco</Specials>
                    <Location>
                        <LocationName>Bothell, WA</LocationName>
                        <Distance>10 mi</Distance>
                    </Location>
                </Container>
                <Container>
                <ImageContainer ><Image loading="lazy" src='deal2.png'  /></ImageContainer>
                    <DiscountBanner>UP TO $18 OFF</DiscountBanner>
                    <Specials>Specials!</Specials>
                    <Location>
                        <LocationName>Bothell, WA</LocationName>
                        <Distance>10 mi</Distance>
                    </Location>
                </Container>
                <Container>
                <ImageContainer><Image loading="lazy" src='deal3.png' /></ImageContainer>
                    <DiscountBanner>UP TO $18 OFF</DiscountBanner>
                    <Specials>Revitalize your ride without leaving your driveway!</Specials>
                    <Location>
                        <LocationName>Bothell, WA</LocationName>
                        <Distance>10 mi</Distance>
                    </Location>
                </Container>
                <Container>
                <ImageContainer><Image loading="lazy" src='deal4.png' /></ImageContainer>
                    <DiscountBanner>UP TO $18 OFF</DiscountBanner>
                    <Specials>For all your carpentry needs </Specials>
                    <Location>
                        <LocationName>Bothell, WA</LocationName>
                        <Distance>10 mi</Distance>
                    </Location>
                </Container>
                <Container>
                <ImageContainer><Image loading="lazy" src='deal4.png' /></ImageContainer>
                    <DiscountBanner>UP TO $18 OFF</DiscountBanner>
                    <Specials>Specials!</Specials>
                    <Location>
                        <LocationName>Bothell, WA</LocationName>
                        <Distance>10 mi</Distance>
                    </Location>
                </Container>
                <Container>
                <ImageContainer><Image loading="lazy" src='deal3.png' /> </ImageContainer>
                    <DiscountBanner>UP TO $18 OFF</DiscountBanner>
                    <Specials>Specials!</Specials>
                    <Location>
                        <LocationName>Bothell, WA</LocationName>
                        <Distance>10 mi</Distance>
                    </Location>
                </Container>
                <Container>
                <ImageContainer><Image loading="lazy" src='deal1.png' /></ImageContainer>
                    <DiscountBanner>UP TO $18 OFF</DiscountBanner>
                    <Specials>Specials!</Specials>
                    <Location>
                        <LocationName>Bothell, WA</LocationName>
                        <Distance>10 mi</Distance>
                    </Location>
                </Container>
                <Container>
                <ImageContainer><Image loading="lazy" src='deal2.png' /></ImageContainer>
                    <DiscountBanner>UP TO $18 OFF</DiscountBanner>
                    <Specials>Renew Brighten Skin</Specials>
                    <Location>
                        <LocationName>Bothell, WA</LocationName>
                        <Distance>10 mi</Distance>
                    </Location>
                </Container>
                <Container>
                <ImageContainer><Image loading="lazy" src='deal9.png' /></ImageContainer>
                    <DiscountBanner>UP TO $18 OFF</DiscountBanner>
                    <Specials>Specials!</Specials>
                    <Location>
                        <LocationName>Bothell, WA</LocationName>
                        <Distance>10 mi</Distance>
                    </Location>
                </Container>
                <Container>
                <ImageContainer><Image loading="lazy" src='deal10.png' /></ImageContainer>
                    <DiscountBanner>UP TO $18 OFF</DiscountBanner>
                    <Specials>Specials!</Specials>
                    <Location>
                        <LocationName>Bothell, WA</LocationName>
                        <Distance>10 mi</Distance>
                    </Location>
                </Container>



            </Wrapper>
            <div style={{textAlign:'center'}}>
                <Button>SEE MORE</Button>
            </div>

        </WrapperContainer>
    )
}

const ImageContainer=styled.div`
width:17.5rem;
height:10rem;
@media (max-width:576px){
   width:100%; 
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

const Button = styled.button`
background: rgb(91, 192, 232);
  border: rgb(91, 192, 232) solid 1px;
  border-radius: 3.125rem;
  padding: 1rem 0;
  width: 11rem;
  margin: 1.875rem auto;
  cursor:pointer;
  color: white;
  font-size: 1.125rem;
  font-Weight:600;

`;

const WrapperContainer=styled.div`
padding:1.875rem 7.56rem 1.875rem 7.56rem;
@media (max-width:576px){
  padding:1.875rem 1rem;
}
`;
const Wrapper=styled.div`
display: grid;
grid-gap:3.125rem ;
grid-template-columns: auto auto auto auto;
 grid-template-rows: auto auto auto;

@media (max-width:576px){
    display: block;
}
`;

const Container = styled.div`
  display: flex;
  width: 17.5rem;
  flex-direction: column;
  @media (max-width:576px){
    width:100%;
    margin-top:2.5rem;
}
`;

const Image = styled.img`
border: 1px solid #D3D3D3;
 border-radius:0.938rem;
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
`;

const DiscountBanner = styled.span`
position: relative;
bottom: 2.313rem;
margin-left: auto;
  color: var(--white, #fff);
  white-space: nowrap;
  justify-content: center;
  border-radius: 0.313rem 0;
  background-color: #253d4e;
 
  padding: 0.5rem 0.625rem;
  font: 600 1rem/125% Quicksand, sans-serif;
`;

const Specials = styled.div`
  color: var(--Main_clr, #253d4e);
  margin-top: -1.875rem;
  width: 100%;
  height: 2.813rem;
  font: 600 1.125rem/1.375rem Quicksand, sans-serif;
`;

const Location = styled.div`
  display: flex;
  margin-top: 0.625rem;
  width: 100%;
  justify-content: space-between;
  gap: 1.25rem;
 
`;

const LocationName = styled.div`
  color: var(--Main_clr, #253d4e);
  letter-spacing: 1px;
  font: 500 1.063rem/118% Quicksand, sans-serif;
`;

const Distance = styled.div`
  color: var(--Main_clr, #253d4e);
  text-align: right;
  letter-spacing: 0.2px;
  font: 500 0.813rem/154% Quicksand, sans-serif;
`;

export default Deals
