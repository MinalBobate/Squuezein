import * as React from "react";
import styled from "styled-components";

function Reviews(props) {
  return (
    <>
    <div style={{padding:'30px 121px 30px 121px'}}>
    <div style={{color:'rgba(37, 61, 78, 1)', fontSize:'30px',fontWeight:600,marginBottom:'30px',fontFamily:'Quicksand'}}>Our Customers <span style={{color:'rgba(91, 192, 232, 1)'}}>Say </span></div>
      <div style={{display:'flex',justifyContent:'center'}}>
    <CardContainer>
      <ProfileWrapper>
        <ProfileImage loading="lazy" srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/18d4413d9d6314b494666146cf38c0a0bcebf3a3c8042b016cabfa2b9f4ffe55?apiKey=252fdac3ac61463cb0d2a2667f2e3068&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/18d4413d9d6314b494666146cf38c0a0bcebf3a3c8042b016cabfa2b9f4ffe55?apiKey=252fdac3ac61463cb0d2a2667f2e3068&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/18d4413d9d6314b494666146cf38c0a0bcebf3a3c8042b016cabfa2b9f4ffe55?apiKey=252fdac3ac61463cb0d2a2667f2e3068&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/18d4413d9d6314b494666146cf38c0a0bcebf3a3c8042b016cabfa2b9f4ffe55?apiKey=252fdac3ac61463cb0d2a2667f2e3068&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/18d4413d9d6314b494666146cf38c0a0bcebf3a3c8042b016cabfa2b9f4ffe55?apiKey=252fdac3ac61463cb0d2a2667f2e3068&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/18d4413d9d6314b494666146cf38c0a0bcebf3a3c8042b016cabfa2b9f4ffe55?apiKey=252fdac3ac61463cb0d2a2667f2e3068&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/18d4413d9d6314b494666146cf38c0a0bcebf3a3c8042b016cabfa2b9f4ffe55?apiKey=252fdac3ac61463cb0d2a2667f2e3068&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/18d4413d9d6314b494666146cf38c0a0bcebf3a3c8042b016cabfa2b9f4ffe55?apiKey=252fdac3ac61463cb0d2a2667f2e3068&"/>
        <ProfileName>Nadine Bertalli</ProfileName>
        <ProfileInfo>kinesiology & wellness</ProfileInfo>
        <ProfileRole>Owner</ProfileRole>
      
      <TestimonialWrapper>
        <Testimonial>
          <p>
            Time-Saving Convenience <br /> <br />{" "}
            <span style={{ fontWeight: 500 }}>
              &quot;SqueezeIn has been a game-changer for my schedule! I managed
              to book a last-minute hair appointment during my lunch break,
              which was unthinkable before. I'm never wasting time calling
              around again!&quot;
            </span>
          </p>
          <TestimonialAuthor>Nadine Bertalli</TestimonialAuthor>
        </Testimonial>
      </TestimonialWrapper>
      </ProfileWrapper>
    </CardContainer>
    <CardContainer className="customClass">
      <ProfileWrapper>
        <ProfileImage loading="lazy" srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/18d4413d9d6314b494666146cf38c0a0bcebf3a3c8042b016cabfa2b9f4ffe55?apiKey=252fdac3ac61463cb0d2a2667f2e3068&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/18d4413d9d6314b494666146cf38c0a0bcebf3a3c8042b016cabfa2b9f4ffe55?apiKey=252fdac3ac61463cb0d2a2667f2e3068&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/18d4413d9d6314b494666146cf38c0a0bcebf3a3c8042b016cabfa2b9f4ffe55?apiKey=252fdac3ac61463cb0d2a2667f2e3068&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/18d4413d9d6314b494666146cf38c0a0bcebf3a3c8042b016cabfa2b9f4ffe55?apiKey=252fdac3ac61463cb0d2a2667f2e3068&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/18d4413d9d6314b494666146cf38c0a0bcebf3a3c8042b016cabfa2b9f4ffe55?apiKey=252fdac3ac61463cb0d2a2667f2e3068&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/18d4413d9d6314b494666146cf38c0a0bcebf3a3c8042b016cabfa2b9f4ffe55?apiKey=252fdac3ac61463cb0d2a2667f2e3068&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/18d4413d9d6314b494666146cf38c0a0bcebf3a3c8042b016cabfa2b9f4ffe55?apiKey=252fdac3ac61463cb0d2a2667f2e3068&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/18d4413d9d6314b494666146cf38c0a0bcebf3a3c8042b016cabfa2b9f4ffe55?apiKey=252fdac3ac61463cb0d2a2667f2e3068&"/>
        <ProfileName>Nadine Bertalli</ProfileName>
        <ProfileInfo>kinesiology & wellness</ProfileInfo>
        <ProfileRole>Owner</ProfileRole>
      
      <TestimonialWrapper>
        <Testimonial>
          <p>
            Time-Saving Convenience <br /> <br />{" "}
            <span style={{ fontWeight: 500 }}>
              &quot;SqueezeIn has been a game-changer for my schedule! I managed
              to book a last-minute hair appointment during my lunch break,
              which was unthinkable before. I'm never wasting time calling
              around again!&quot;
            </span>
          </p>
          <TestimonialAuthor>Nadine Bertalli</TestimonialAuthor>
        </Testimonial>
      </TestimonialWrapper>
      </ProfileWrapper>
    </CardContainer>
    </div>
    <div style={{textAlign:'center'}}><Button>See More Reviews</Button></div>
    </div>
    </>
    
  );
}
const Button=styled.button`
background: rgb(91, 192, 232);
  border: rgb(91, 192, 232) solid 1px;
  border-radius: 50px;
  padding: 16px 0;
  width: 247px;
  margin: 30px auto;
  color: white;
  font-size: 18px;

`;

const CardContainer = styled.div`
  display: flex;
  max-width: 490px;
  padding: 40px 0;
  flex-direction: column;
  &.customClass{
    margin-left:40px;
  }
`;

const ProfileWrapper = styled.span`
  border-radius: 20px;
  box-shadow: 0px 0px 20px 0px rgba(86, 153, 196, 0.15);
  background-color: var(--white, #fff);
  display: flex;
  margin-top: 40px;
  width: 100%;
  flex-direction: column;
  padding: 0 20px 28px;

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const ProfileImage = styled.img`
  aspect-ratio: 1.03;
  object-fit: contain;
  object-position: center;
  width: 155px;
  overflow: hidden;
  align-self: center;
  z-index: 1;
  margin-top: -40px;
  max-width: 100%;
`;

const ProfileName = styled.div`
  color: var(--Main_clr, #253d4e);
  text-align: center;
  align-self: center;
  margin-top: 33px;
  white-space: nowrap;
  font: 400 16px/137.5% Mulish, sans-serif;

  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const ProfileInfo = styled.div`
  color: var(--Main_clr, #253d4e);
  text-align: center;
  align-self: center;
  margin-top: 14px;
  white-space: nowrap;
  font: 500 16px/137.5% Quicksand, sans-serif;

  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const ProfileRole = styled.div`
  color: var(--Main_clr, #253d4e);
  text-align: center;
  align-self: center;
  margin-top: 11px;
  white-space: nowrap;
  font: 500 16px/137.5% Quicksand, sans-serif;

  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const TestimonialWrapper = styled.span`
  align-self: stretch;
  display: flex;
  margin-top: 27px;
  width: 100%;
  flex-direction: column;
  padding: 0 31px 0 19px;

  @media (max-width: 991px) {
    max-width: 100%;
    padding-right: 20px;
  }
`;

const Testimonial = styled.div`
  color: var(--subtext_clr, #6c798d);
  font: 600 18px/26px Quicksand, sans-serif;

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const TestimonialAuthor = styled.div`
  color: var(--Main_clr, #253d4e);
  text-align: center;
  margin-top: 59px;
  font: 500 28px/114% Quicksand, sans-serif;

  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
  }
`;

export default Reviews;