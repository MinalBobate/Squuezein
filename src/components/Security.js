import React from "react";
import styled from "styled-components";

const Security = () => {
    return (
        <>
            <WrapperContainer>
            <Heading >Security<span style={{color:'rgba(37, 61, 78, 1)'}}> Matters!</span></Heading>

                <Wrapper>
                    <div>

                        <Container>
                            
                            <Description>
                                Secure communication and all data backed daily.
                            </Description>
                            <Features>
                                Features like HIPAA, SOAP, Password security and SSL will make sure your
                                data is safe with us. We also offer SSO and are ISO27001 compliant. On
                                top of that we have a dedicated security officer to make sure your
                                business remains safe with us.
                            </Features>
                        </Container>
                    </div>
                    <ImageWrapper>
                        <Image src="customerSupport.png" />
                    </ImageWrapper>
                </Wrapper>
               

                </WrapperContainer>
        </>

    );
};

const ImageWrapper=styled.div`

@media (max-width:576px){
text-align:center;
}
`;

const Image=styled.img`
width=525px;
height:395px;
@media (max-width:576px){
 width:192px;
 height:144px;
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
const WrapperContainer=styled.div`
padding:30px 121px 30px 121px;
@media (max-width:576px){
  padding:30px 16px;
}
`;


const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 100px;

  @media (max-width: 576px) {
    flex-direction: column-reverse;
    gap:0px
  }
`;

const Container = styled.div`
  display: flex;
  max-width: 509px;
  flex-direction: column;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 8px;
 

  @media (max-width: 576px) {
    max-width: 100%;
    flex-wrap: wrap;
  }
`;



const Description = styled.div`
  color: var(--Main_clr, #253d4e);
  margin-top: 54px;
  width: 100%;
  font: 500 22px/28px Quicksand, sans-serif;

  @media (max-width: 576px) {
    max-width: 100%;
    margin-top: 40px;
    font-size:18px;
  }
`;

const Features = styled.div`
  color: var(--subtext_clr, #6c798d);
  margin-top: 54px;
  width: 100%;
  font: 500 22px/28px Quicksand, sans-serif;

  @media (max-width: 576px) {
    width: 100%;
    margin-top: 40px;
    font:500 16px Quicksand,sans-serif;
  }
`;





export default Security;