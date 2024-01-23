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
width:280px;
height:160px;
@media (max-width:576px){
   width:100%; 
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

const Button = styled.button`
background: rgb(91, 192, 232);
  border: rgb(91, 192, 232) solid 1px;
  border-radius: 50px;
  padding: 16px 0;
  width: 175px;
  margin: 30px auto;
  cursor:pointer;
  color: white;
  font-size: 18px;
  font-Weight:600;

`;

const WrapperContainer=styled.div`
padding:30px 121px 30px 121px;
@media (max-width:576px){
  padding:30px 16px;
}
`;
const Wrapper=styled.div`
display: grid;
grid-gap:50px ;
grid-template-columns: auto auto auto auto;
 grid-template-rows: auto auto auto;

@media (max-width:576px){
    display: block;
}
`;

const Container = styled.div`
  display: flex;
  width: 280px;
  flex-direction: column;
  @media (max-width:576px){
    width:100%;
    margin-top:40px;
}
`;

const Image = styled.img`
border: 1px solid #D3D3D3;
 border-radius:15px;
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
`;

const DiscountBanner = styled.span`
position: relative;
bottom: 37px;
margin-left: auto;
  color: var(--white, #fff);
  white-space: nowrap;
  justify-content: center;
  border-radius: 5px 0px;
  background-color: #253d4e;
 
  padding: 8px 10px;
  font: 600 16px/125% Quicksand, sans-serif;
`;

const Specials = styled.div`
  color: var(--Main_clr, #253d4e);
  margin-top: -30px;
  width: 100%;
  height: 45px;
  font: 600 18px/22px Quicksand, sans-serif;
`;

const Location = styled.div`
  display: flex;
  margin-top: 10px;
  width: 100%;
  justify-content: space-between;
  gap: 20px;
 
`;

const LocationName = styled.div`
  color: var(--Main_clr, #253d4e);
  letter-spacing: 1px;
  font: 500 17px/118% Quicksand, sans-serif;
`;

const Distance = styled.div`
  color: var(--Main_clr, #253d4e);
  text-align: right;
  letter-spacing: 0.2px;
  font: 500 13px/154% Quicksand, sans-serif;
`;

export default Deals
