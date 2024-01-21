
import React from 'react'
import styled from "styled-components";

function FAQ() {
    return (
        <div style={{ padding: '30px 121px 0 121px' }}>
            <div >

                <Heading>Frequently asked questions(FAQs)</Heading>
                <QueAns>
                    <div>
                    <Container>
                        <Header>
                            <PlusIcon>+</PlusIcon>
                            <Title>Is there a fee for using SqueezeIn?</Title>
                        </Header>
                        <Description>
                        Yes, there is a small platform fee for each booking. This fee helps us maintain our servers and keep the platform running smoothly. We strive to keep this fee as minimal as possible to provide you with the best service.
                        </Description>
                    </Container>
                    </div>
                    <Divider />
                    <div>
                    <Container>
                        <Header>
                            <PlusIcon>+</PlusIcon>
                            <Title>Can I pay extra to get a preferred booking time?</Title>
                        </Header>
                        <Description>
                        Once a provider accepts your booking, they may request a token amount to secure your appointment. This amount will be deducted from your total service charge at the time of the appointment.
                        </Description>
                    </Container>
                    </div>
                    <Divider />
                    <div> 
                    <Container>
                        <Header>
                            <PlusIcon>+</PlusIcon>
                            <Title>Can providers offer appointments outside their regular hours?</Title>
                        </Header>
                        <Description>
                            Yes, providers have the flexibility to accept bookings outside of their standard appointment times. This feature allows for greater convenience and more options for you to find a suitable time.
                        </Description>
                    </Container>
                    </div>
                    <Divider />
                    <div> 
                    <Container>
                        <Header>
                            <PlusIcon>+</PlusIcon>
                            <Title>How do I know if my appointment is confirmed?</Title>
                        </Header>
                        <Description>
                        You will receive an instant notification and a booking confirmation with all the appointment details once a provider accepts your request.
                        </Description>
                    </Container>
                    </div>
                    <Divider />
                    <div> 
                    <Container>
                        <Header>
                            <PlusIcon>+</PlusIcon>
                            <Title>Can providers offer appointments outside their regular hours?</Title>
                        </Header>
                        <Description>
                            Yes, providers have the flexibility to accept bookings outside of their standard appointment times. This feature allows for greater convenience and more options for you to find a suitable time.
                        </Description>
                    </Container>
                    </div>

                </QueAns>
                <div style={{ textAlign: 'center' }}>
                    <Button>SEE MORE</Button>
                </div>
            </div>
        </div>
    )
}

const Divider=styled.div`
border: 2px solid rgba(211, 211, 211, 0.2);
  width: 1000px;
  margin: 0 auto;
`;




const Button = styled.button`
background: rgb(91, 192, 232);
border: rgb(91, 192, 232) solid 1px;
border-radius: 50px;
padding: 16px 0;
width: 175px;
margin: 30px auto;
color: white;
font-size: 18px;
font-weight:600;

`;
const Heading = styled.div`
color: #5BC0E8;
font-family: Quicksand;
font-size: 40px;
font-style: normal;
font-weight: 600;
line-height: 50px;
`;

const QueAns = styled.div`
display: flex;

padding: 40px;
flex-direction: column;
justify-content: center;
align-items: flex-start;
gap: 30px;
border-radius: 24px;
background: #FFF;
`;






const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
 margin-borrom:30px;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  

  @media (max-width: 991px) {
    max-width: 100%;
    flex-wrap: wrap;
  }
`;

const PlusIcon = styled.div`
  color: var(--Main_clr, #253d4e);
  letter-spacing: 0.2px;
  text-transform: capitalize;
  white-space: nowrap;
  margin: auto 0;
  font: 500 20px/110% Quicksand, sans-serif;

  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const Title = styled.div`
  color: var(--Main_clr, #253d4e);
  
  flex-grow: 1;
  font: 500 20px Quicksand, sans-serif;

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Description = styled.div`
  color: var(--subtext_clr, #6c798d);
  margin-top: 20px;
  width: 100%;
  font: 500 18px Quicksand, sans-serif;

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;




export default FAQ