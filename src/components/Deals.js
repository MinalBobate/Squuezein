import React from "react";
import styled from "styled-components";

function Deals() {
    return (
        <div style={{padding:'30px 121px'}}>
            <div>
                <div style={{ color: 'rgba(37, 61, 78, 1)', fontSize: '30px',fontWeight:600, marginBottom: '30px', fontFamily: 'Quicksand' }}>Great Deals in <span style={{ color: 'rgba(91, 192, 232, 1)' }}>Bothell </span></div>
            </div>
            <div style={{ display: 'grid',gridGap:'50px', gridTemplateColumns: 'auto auto auto auto', gridTemplateRows: 'auto auto auto' }}>
                <Container>
                    <div style={{width:'280px',height:'160px'}}><Image loading="lazy" src='deal1.png'  /></div>
                    <DiscountBanner>UP TO $30 OFF</DiscountBanner>
                    <Specials>Best Eyelash Extensions in San Francisco</Specials>
                    <Location>
                        <LocationName>Bothell, WA</LocationName>
                        <Distance>10 mi</Distance>
                    </Location>
                </Container>
                <Container>
                <div style={{width:'280px',height:'160px'}}><Image loading="lazy" src='deal2.png'  /></div>
                    <DiscountBanner>UP TO $18 OFF</DiscountBanner>
                    <Specials>Specials!</Specials>
                    <Location>
                        <LocationName>Bothell, WA</LocationName>
                        <Distance>10 mi</Distance>
                    </Location>
                </Container>
                <Container>
                <div style={{width:'280px',height:'160px'}}><Image loading="lazy" src='deal3.png'  /></div>
                    <DiscountBanner>UP TO $18 OFF</DiscountBanner>
                    <Specials>Revitalize your ride without leaving your driveway!</Specials>
                    <Location>
                        <LocationName>Bothell, WA</LocationName>
                        <Distance>10 mi</Distance>
                    </Location>
                </Container>
                <Container>
                <div style={{width:'280px',height:'160px'}}><Image loading="lazy" src='deal4.png'  /></div>
                    <DiscountBanner>UP TO $18 OFF</DiscountBanner>
                    <Specials>For all your carpentry needs </Specials>
                    <Location>
                        <LocationName>Bothell, WA</LocationName>
                        <Distance>10 mi</Distance>
                    </Location>
                </Container>
                <Container>
                <div style={{width:'280px',height:'160px'}}><Image loading="lazy" src='deal4.png'  /></div>
                    <DiscountBanner>UP TO $18 OFF</DiscountBanner>
                    <Specials>Specials!</Specials>
                    <Location>
                        <LocationName>Bothell, WA</LocationName>
                        <Distance>10 mi</Distance>
                    </Location>
                </Container>
                <Container>
                <div style={{width:'280px',height:'160px'}}><Image loading="lazy" src='deal3.png'  /></div>
                    <DiscountBanner>UP TO $18 OFF</DiscountBanner>
                    <Specials>Specials!</Specials>
                    <Location>
                        <LocationName>Bothell, WA</LocationName>
                        <Distance>10 mi</Distance>
                    </Location>
                </Container>
                <Container>
                <div style={{width:'280px',height:'160px'}}><Image loading="lazy" src='deal1.png'  /></div>
                    <DiscountBanner>UP TO $18 OFF</DiscountBanner>
                    <Specials>Specials!</Specials>
                    <Location>
                        <LocationName>Bothell, WA</LocationName>
                        <Distance>10 mi</Distance>
                    </Location>
                </Container>
                <Container>
                <div style={{width:'280px',height:'160px'}}><Image loading="lazy" src='deal2.png'  /></div>
                    <DiscountBanner>UP TO $18 OFF</DiscountBanner>
                    <Specials>Renew Brighten Skin</Specials>
                    <Location>
                        <LocationName>Bothell, WA</LocationName>
                        <Distance>10 mi</Distance>
                    </Location>
                </Container>
                <Container>
                <div style={{width:'280px',height:'160px'}}><Image loading="lazy" src='deal9.png'  /></div>
                    <DiscountBanner>UP TO $18 OFF</DiscountBanner>
                    <Specials>Specials!</Specials>
                    <Location>
                        <LocationName>Bothell, WA</LocationName>
                        <Distance>10 mi</Distance>
                    </Location>
                </Container>
                <Container>
                <div style={{width:'280px',height:'160px'}}><Image loading="lazy" src='deal10.png'  /></div>
                    <DiscountBanner>UP TO $18 OFF</DiscountBanner>
                    <Specials>Specials!</Specials>
                    <Location>
                        <LocationName>Bothell, WA</LocationName>
                        <Distance>10 mi</Distance>
                    </Location>
                </Container>



            </div>
            <div style={{textAlign:'center'}}>
                <Button>SEE MORE</Button>
            </div>

        </div>
    )
}

const Button = styled.button`
background: rgb(91, 192, 232);
  border: rgb(91, 192, 232) solid 1px;
  border-radius: 50px;
  padding: 16px 0;
  width: 175px;
  margin: 30px auto;
  color: white;
  font-size: 18px;
  font-Weight:600;

`;

const Container = styled.div`
  display: flex;
  max-width: 280px;
  flex-direction: column;
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
