import React from 'react'
import styled from 'styled-components'
function Footer() {
    return (
        <div style={{ background: 'rgba(207, 241, 255, 0.8)', padding: '30px 30px 30px 80px' }}>
            <Heading>SqueezeIn</Heading>
            <GridandSocialFlex>
                <StyledGrid>
                    <Column>
                        <Title>Company</Title>
                        <Item>About us</Item>
                        <Item>Terms &amp; conditions</Item>
                        <Item>Privacy policy</Item>
                        <Item>Anti-discrimination policy</Item>
                        <Item>Careers</Item>
                    </Column>
                    <Column>
                        <Title>For customers</Title>
                        <Item>Reviews</Item>
                        <Item>Categories near you</Item>
                        <Item>Blog</Item>
                        <Item>Contact us</Item>
                    </Column>
                    <Column>
                        <Title>For partners</Title>
                        <Item>Register as a professional</Item>
                    </Column>

                </StyledGrid>

                <Wrapper>
                    <Title>Social links</Title>
                    <LinksWrapper>
                        <IconDiv><Image loading="lazy" src="twitter.svg" style={{alignSelf:'center'}}/></IconDiv>
                        <IconDiv><Image loading="lazy" src="facebook.svg" style={{alignSelf:'center'}}/></IconDiv>
                        <IconDiv><Image loading="lazy" src="instagram.svg" style={{alignSelf:'center'}}/></IconDiv>
                        <IconDiv><Image loading="lazy" src="linkedin.svg" style={{alignSelf:'center'}}/></IconDiv>
                        
                        
                        
                    </LinksWrapper>
                    <OtherLinksWrapper>
                        <FifthImage loading="lazy"  src="footer1.png" />
                        <SixthImage loading="lazy"  src="footer2.png" />
                    </OtherLinksWrapper>
                </Wrapper>

            </GridandSocialFlex>

            <Divider></Divider>
            <Footer1>© Copyright 2023 SqueezeIn.Me. All rights reserved.</Footer1>
        </div>
    )
}

const Heading=styled.div`
color: var(--Main_clr, #253D4E);
font-family: Redressed;
font-size: 40px;
font-style: normal;
font-weight: 400;
line-height: normal;
margin-bottom:30px;

`;


const GridandSocialFlex = styled.div`
display:flex;
direction:row;
gap:200px;
margin-bottom: 50px;
`;

const Divider = styled.div`
width: 100%;
height: 2px;
flex-shrink: 0;
background:  #253D4E;
`;

const Footer1 = styled.div`
color:  #253D4E;
font-family: Quicksand;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 16px; /* 114.286% */
padding-top:30px;
`;

const Title = styled.div`
color: var(--Main_clr, #253D4E);
font-family: Quicksand;
font-size: 18px;
font-style: normal;
font-weight: 500;
line-height: 28px;
`;



const IconDiv=styled.div`
border:1px solid rgba(91, 192, 232, 1);
border-radius:50%;
background:white;
padding: 6px 6px;
display:flex;
`;





const Wrapper = styled.span`
  display: flex;
 
  flex-direction: column;
  padding: 0 20px;
`;

const Title1 = styled.div`
  color: var(--Main_clr, #253d4e);
  width: 100%;
  font: 500 20px/140% Quicksand, sans-serif;
`;

const LinksWrapper = styled.div`
  display: flex;
  margin-top: 21px;
  width: 100%;
  padding-right: 75px;
  justify-content: space-between;
  gap: 8px;
`;

const Image = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 100%;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  flex: 1;
`;

const FourthImage = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 100%;
  overflow: hidden;
  flex: 1;
`;

const OtherLinksWrapper = styled.div`
  display: flex;
  margin-top: 16px;
  width: 100%;
  justify-content: space-between;
  gap: 11px;
`;

const FifthImage = styled.img`
  aspect-ratio: 2.98;
  object-fit: contain;
  object-position: center;
  width: 100%;
  overflow: hidden;
  flex: 1;
`;

const SixthImage = styled.img`
  aspect-ratio: 2.98;
  object-fit: contain;
  object-position: center;
  width: 100%;
  overflow: hidden;
  flex: 1;
`;

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  justify-content: space-between;
  gap: 200px;
  @media (max-width: 400px) {
    flex-wrap: wrap;
    grid-template-columns: auto auto;
  }
`;

const Column = styled.span`
  display: flex;
  flex-direction: column;
  
`;

const Title2 = styled.div`
  color: var(--Main_clr, #253d4e);
  font: 500 20px/140% Quicksand, sans-serif;
`;

const Item = styled.div`
  color: var(--Main_clr, #253d4e);
  margin-top: 10px;
  font: 500 14px Quicksand, sans-serif;
  font-weight:500;
`;



export default Footer







