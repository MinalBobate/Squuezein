import React,{useState,useEffect} from 'react'
import styled from 'styled-components'

function Footer() {

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
        <WrapperContainer >

<div>
                    {isLargeScreen ? (
                       <Heading>SqueezeIn</Heading>
                    ) : (
                      <Heading>SqueezeIn.Me</Heading>
                    )}
                </div>
            
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
                  <SocialWrapper>
                    <Title style={{width:'12.5rem'}}>Social links</Title>
                    <LinksWrapper>
                        <IconDiv><Image loading="lazy" src="twitter.svg" style={{alignSelf:'center'}}/></IconDiv>
                        <IconDiv><Image loading="lazy" src="facebook.svg" style={{alignSelf:'center'}}/></IconDiv>
                        <IconDiv><Image loading="lazy" src="instagram.svg" style={{alignSelf:'center'}}/></IconDiv>
                        <IconDiv><Image loading="lazy" src="linkedin.svg" style={{alignSelf:'center'}}/></IconDiv>
                        
                        
                        
                    </LinksWrapper>
                    </SocialWrapper>
                    <OtherLinksWrapper>
                        <FifthImage loading="lazy"  src="footer1.png" />
                        <SixthImage loading="lazy"  src="footer2.png" />
                    </OtherLinksWrapper>
                </Wrapper>

            </GridandSocialFlex>

            <Divider></Divider>
            <Footer1>© Copyright 2023 SqueezeIn.Me. All rights reserved.</Footer1>
        </WrapperContainer>
    )
}

const Heading=styled.div`
color: var(--Main_clr, #253D4E);
font-family: Redressed;
font-size: 2.5rem;
font-style: normal;
font-weight: 400;
line-height: normal;
margin-bottom:1.875rem;
@media (max-width:576px){
  
}
`;


const SocialWrapper=styled.div`
display:flex;
flex-direction:column;
flex-gap:0.62rem;
@media (max-width:576px){
  flex-direction:row; 
  align-items:center;
}`;

const WrapperContainer=styled.div`
background: rgba(207, 241, 255, 0.8);
 padding: 3rem 2.63rem 2.19rem 5.25rem;
@media (max-width:576px){
  padding:0.69rem 1rem 1.59rem 1rem;
}
`;


const GridandSocialFlex = styled.div`
display:flex;
direction:row;
gap:11rem;
margin-bottom: 3.125rem;
@media (max-width:576px){
  flex-direction:column;
  gap:2.5rem;
}
`;

const Divider = styled.div`
width: 100%;
height: 0.125rem;
flex-shrink: 0;
background:  #253D4E;
`;

const Footer1 = styled.div`
color:  #253D4E;
font-family: Quicksand;
font-size: 0.875;
font-style: normal;
font-weight: 400;
line-height: 1rem; /* 114.286% */
padding-top:1.875rem;
`;

const Title = styled.div`
color: var(--Main_clr, #253D4E);
font-family: Quicksand;
font-size: 1.125rem;
font-style: normal;
font-weight: 500;
line-height: 1.75rem;
`;



const IconDiv=styled.div`
border:0.063rem solid rgba(91, 192, 232, 1);
border-radius:50%;
background:white;
cursor:pointer;
padding:0.375rem;
display:flex;
@media (max-width: 576px) {
  padding:0.2rem;
 }
`;





const Wrapper = styled.span`
  display: flex;
 
  flex-direction: column;
  padding: 0 1.25rem;
  @media (max-width: 576px) {
   padding:0;
  }
`;

const Title1 = styled.div`
  color: var(--Main_clr, #253d4e);
  width: 100%;
  font: 500 1.25rem/140% Quicksand, sans-serif;
`;

const LinksWrapper = styled.div`
  display: flex;
  margin-top: 1.313rem;
  width: 100%;
  padding-right: 4.688rem;
  justify-content: space-between;
  gap: 0.5rem;

  @media (max-width:576px){
    margin-top:0;
    &:nth-child(3) {
display:none;
    }
 &:nth-child(4) {
  display:none;
    }}
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
  margin-top: 1rem;
  width: 100%;
  justify-content: space-between;
  gap: 0.688rem;
`;

const FifthImage = styled.img`
  aspect-ratio: 2.98;
  object-fit: contain;
  object-position: center;
  width: 100%;
  overflow: hidden;
  cursor:pointer;
  flex: 1;
`;

const SixthImage = styled.img`
  aspect-ratio: 2.98;
  object-fit: contain;
  object-position: center;
  width: 100%;
  overflow: hidden;
  cursor:pointer;
  flex: 1;
`;

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  justify-content: space-between;
  gap: 11rem;
  @media (max-width: 576px) {
    gap: 1.5rem;
    grid-template-columns: auto auto;
  }
`;

const Column = styled.span`
  display: flex;
  flex-direction: column;
  flex-gap:0.62rem;
  @media (max-width:576px){
    flex-gap:1.5rem;
  }
  
`;

const Title2 = styled.div`
  color: var(--Main_clr, #253d4e);
  font: 500 1.25rem/140% Quicksand, sans-serif;
`;

const Item = styled.div`
  color: var(--Main_clr, #253d4e);
  margin-top: 0.625rem;
  font: 500 0.875rem Quicksand, sans-serif;
  font-weight:500;
`;



export default Footer







