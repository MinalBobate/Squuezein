import React from "react";
import styled from "styled-components";

const Security = () => {
    return (
        <>
            <div style={{padding:'30px 121px 30px 121px'}} >
                <div style={{ display: 'flex', direction: 'row',gap:'100px' }}>
                    <div>
                        <Container>
                            <Header>
                            <div style={{color:'rgba(37, 61, 78, 1)', fontSize:'34px',fontWeight:600,fontFamily:'Quicksand'}}>security <span style={{color:'rgba(91, 192, 232, 1)'}}>Matters! </span></div>

                            </Header>
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
                    <div>
                        <img src="customerSupport.png" width='525px'/>
                    </div>
                </div>
               

            </div>
        </>

    );
};




const Container = styled.div`
  display: flex;
  max-width: 509px;
  flex-direction: column;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 8px;
 

  @media (max-width: 991px) {
    max-width: 100%;
    flex-wrap: wrap;
  }
`;



const Description = styled.div`
  color: var(--Main_clr, #253d4e);
  margin-top: 54px;
  width: 100%;
  font: 500 22px/28px Quicksand, sans-serif;

  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
  }
`;

const Features = styled.div`
  color: var(--subtext_clr, #6c798d);
  margin-top: 54px;
  width: 100%;
  font: 500 22px/28px Quicksand, sans-serif;

  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
  }
`;





export default Security;