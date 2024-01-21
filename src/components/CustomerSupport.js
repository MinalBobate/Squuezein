import React from 'react'
import styled from "styled-components";
function CustomerSupport() {
    return (
        <div>
            <div>
            <ContactUs>
                    {/* <img src="/contactUs.png" alt="contact" /> */}
                    <div style={{color:'white'}}>Lorem ipsum dolor sit amet consectetur.</div>
                    <div>
                        <Container2>
                            <Wrapper>
                                <ContactInfo>
                                    <Image
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/1652a69a5061f1e0228426afd148ae59ecfbb84cd9c9a80b32770060d62042ad?apiKey=252fdac3ac61463cb0d2a2667f2e3068&"
                                    />
                                    <Label>E-mail id</Label>
                                </ContactInfo>
                                <ContactInfo>
                                    <Image
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/8050e400dda7de5d7f84d8693f8a600b900dbc4a60a28a974e58b7de25f991fd?apiKey=252fdac3ac61463cb0d2a2667f2e3068&"
                                    />
                                    <Label>City or Zipcode</Label>
                                </ContactInfo>
                            </Wrapper>
                            <ContactOptions>
                                <ContactButton>CHAT WITH US</ContactButton>
                                <ContactButton>Call us</ContactButton>
                            </ContactOptions>
                        </Container2>
                    </div>
                </ContactUs>
                <div>

                    <div style={{ display: 'flex', direction: 'row' }}>
                        <div>
                            <Container>
                                <Title>
                                    SqueezeIn for <Span color="rgba(91, 192, 232, 1)">Business</Span>
                                </Title>
                                <Description>
                                    Supercharge your business for free with the world's top booking platform
                                    for salons and spas. Independently voted no. 1 by industry
                                    professionals.
                                </Description>
                            </Container>
                        </div>
                        <div>
                            <img src="/frame149.png" alt="farme149" />
                        </div>
                    </div>

                </div>
                </div>
                </div>
                )
}

                const Container = styled.div`
                display: flex;
                max-width: 553px;
                flex-direction: column;
                padding: 0 20px;
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
                width: 100%;
                font: 500 22px/28px Quicksand, sans-serif;

                @media (max-width: 991px) {
                    max - width: 100%;
                margin-top: 40px;
  }
                `;

                const Span = styled.span`
                color: ${(props) => props.color};
                `;
                const ContactUs = styled.div`
                background: url("./contactUs.png");
                display:flex;
                direction:row;
                justify-content:space-around;
                
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
`;

const Wrapper = styled.div`
  border-radius: 100px;
  border: 1px solid var(--grey, #d3d3d3);
  background-color: var(--white, #fff);
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 15px 77px;

  @media (max-width: 991px) {
    max-width: 100%;
    flex-wrap: wrap;
    padding: 0 20px;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  gap: 16px;
  margin: auto 0;
`;

const Image = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 24px;
  overflow: hidden;
  max-width: 100%;
`;

const Label = styled.div`
  color: var(--Main_clr, #253d4e);
  font: 500 20px/120% Quicksand, sans-serif;
`;

const ContactOptions = styled.div`
  align-self: center;
  display: flex;
  margin-top: 43px;
  width: 100%;
  max-width: 564px;
  justify-content: space-between;
  gap: 20px;

  @media (max-width: 991px) {
    max-width: 100%;
    flex-wrap: wrap;
    margin-top: 40px;
  }
`;

const ContactButton = styled.div`
  color: #253d4e;
  text-align: center;
  white-space: nowrap;
  justify-content: center;
  border-radius: 50px;
  flex-grow: 1;
  font: 600 24px/117% Roboto, sans-serif;
  
  &:nth-child(1) {
    background-color: #fff852;
    padding: 21px 39px;
  }
  
  &:nth-child(2) {
    background-color: #5bc0e8;
    padding: 27px 60px;
    color: #fff;
    text-transform: uppercase;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 991px) {
    white-space: initial;
    padding: 0 20px;
  }
}`;




                export default CustomerSupport