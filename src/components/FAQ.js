
import React,{useState,useEffect} from 'react'
import styled from "styled-components";

function FAQ() {


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
        <WrapperContainer>
            <div >
                <div>
                    {isLargeScreen ? (
                        <Heading>Frequently asked questions(FAQs)</Heading>
                    ) : (
                      <Heading>FAQs</Heading>
                    )}
                </div>

                
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
        </WrapperContainer>
    )
}

const Divider=styled.div`
border: 2px solid rgba(211, 211, 211, 0.2);
  width: 80%;
  margin: 0 auto;
  @media (max-width:576px){
    width:95%;
    margin-left:0.625rem;
  }
  
`;
const WrapperContainer=styled.div`
padding:3.75rem 7.56rem 3.75rem 5.56rem;
@media (max-width:576px){
  padding:1.25rem;
  border-radius: 1rem;
border: 0.125rem solid #D3D3D3;

background: #FFF;
margin-bottom:2.5rem;
}
`;




const Button = styled.button`
background: rgb(91, 192, 232);
border: rgb(91, 192, 232) solid 1px;
border-radius: 3.125rem;
padding: 1rem 1.5rem;
margin: 1.875rem auto;
cursor:pointer;
color: white;
font-size: 1.125rem;
font-weight:600;

`;
const Heading = styled.div`
text-shadow: 0px 2px 7px rgba(91, 192, 232, 0.5);
color: #5BC0E8;
font-family: Quicksand;
font-size: 2.5rem;
font-style: normal;
font-weight: 600;
line-height: 3.125rem;
@media(max-width:576px){
  text-align:center;
  text-shadow:0 0;
}
`;

const QueAns = styled.div`
display: flex;
padding:2.5rem;
margin-top:3.28rem;
flex-direction: column;
justify-content: center;
align-items: flex-start;
gap: 1.875rem;
border-radius: 1.5rem;
background: #FFF;
box-shadow: 1px 5px 10px  rgba(86, 153, 196, 0.15),-1px 0px 5px 0px rgba(86, 153, 196, 0.15);
clip-path: inset(0px -10px -10px -10px);
@media (max-width:576px){
 padding:1.25rem 0.62rem;
 margin:3.125rem 0;
 box-shadow:0px 0px 0px;
}
`;






const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
 margin-borrom:1.875rem;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.625rem;
  

  @media (max-width: 576px) {
    max-width: 100%;
   
  }
`;

const PlusIcon = styled.div`
  color: var(--Main_clr, #253d4e);
  
  text-transform: capitalize;
  white-space: nowrap;
  margin: auto 0;
  font: 500 1.25rem/110% Quicksand, sans-serif;

  @media (max-width: 576px) {
   
  }
`;

const Title = styled.div`
  color: var(--Main_clr, #253d4e);
  
  flex-grow: 1;
  font: 500 1.25rem Quicksand, sans-serif;

  @media (max-width: 576px) {
    width: 100%;
    font-size:0.875rem;
    line-height:1.25rem;
  }
`;

const Description = styled.div`
  color: var(--subtext_clr, #6c798d);
  margin-top: 1.25rem;
  width: 100%;
  font: 500 1.125rem Quicksand, sans-serif;

  @media (max-width: 576px) {
    
    font-size:0.875rem;
    line-height:1.25rem;
    padding-left:0.625;
  }
`;




export default FAQ