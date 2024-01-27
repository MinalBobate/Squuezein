import React, {useState,useEffect} from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';



function Reviews(props) {

  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.matchMedia('(max-width: 576px)').matches);
    };

    handleResize(); // Set initial screen size

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const slidesPerView = isSmallScreen ? 1 : 2; // Adjust the number of visible slides based on screen size

  const swiperParams = {
    slidesPerView: slidesPerView,
    spaceBetween: 0, // You can adjust the space between slides as needed
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    loop: true,
    autoplay: {
      delay: 3000, 
      disableOnInteraction: false, 
    },
  };

  return (
    <>

    <WrapperContainer >
    <Heading>Our Customers <span style={{color:'rgba(37, 61, 78, 1)'}}>Say </span></Heading>


    <Swiper {...swiperParams} style={{display:'flex', direction:'row', justifyContent:'center',}}>
      <SwiperSlide>
      <CardContainer className="customClass">
      <ProfileWrapper>
        <ProfileImage loading="lazy" src="swiper5.png"/>
        <ProfileName>Nadine Bertalli</ProfileName>
        <ProfileInfo>kinesiology & wellness</ProfileInfo>
        <ProfileRole>Owner</ProfileRole>
      
      <TestimonialWrapper>
        <Testimonial>
          <TestimonialText>
            Time-Saving Convenience <br /> <br />{" "}
            <span style={{ fontWeight: 500 }}>
              &quot;SqueezeIn has been a game-changer for my schedule! I managed
              to book a last-minute hair appointment during my lunch break,
              which was unthinkable before. I'm never wasting time calling
              around again!&quot;
            </span>
            </TestimonialText>
          <TestimonialAuthor>Nadine Bertalli</TestimonialAuthor>
        </Testimonial>
      </TestimonialWrapper>
      </ProfileWrapper>
    </CardContainer>
      </SwiperSlide>
      <SwiperSlide>
      <CardContainer className="customClass">
      <ProfileWrapper>
        <ProfileImage loading="lazy" src="swiper2.png"/>
        <ProfileName>Nadine Bertalli</ProfileName>
        <ProfileInfo>kinesiology & wellness</ProfileInfo>
        <ProfileRole>Owner</ProfileRole>
      
      <TestimonialWrapper>
        <Testimonial>
          <TestimonialText>
            Time-Saving Convenience <br /> <br />{" "}
            <span style={{ fontWeight: 500 }}>
              &quot;SqueezeIn has been a game-changer for my schedule! I managed
              to book a last-minute hair appointment during my lunch break,
              which was unthinkable before. I'm never wasting time calling
              around again!&quot;
            </span>
          </TestimonialText>
          <TestimonialAuthor>Nadine Bertalli</TestimonialAuthor>
        </Testimonial>
      </TestimonialWrapper>
      </ProfileWrapper>
    </CardContainer>
      </SwiperSlide>
      <SwiperSlide>
      <CardContainer className="customClass">
      <ProfileWrapper>
        <ProfileImage loading="lazy" src="swiper3.png"/>
        <ProfileName>Nadine Bertalli</ProfileName>
        <ProfileInfo>kinesiology & wellness</ProfileInfo>
        <ProfileRole>Owner</ProfileRole>
      
      <TestimonialWrapper>
        <Testimonial>
          <TestimonialText>
            Time-Saving Convenience <br /> <br />{" "}
            <span style={{ fontWeight: 500 }}>
              &quot;SqueezeIn has been a game-changer for my schedule! I managed
              to book a last-minute hair appointment during my lunch break,
              which was unthinkable before. I'm never wasting time calling
              around again!&quot;
            </span>
          </TestimonialText>
          <TestimonialAuthor>Nadine Bertalli</TestimonialAuthor>
        </Testimonial>
      </TestimonialWrapper>
      </ProfileWrapper>
    </CardContainer>
      </SwiperSlide>
      <SwiperSlide>
      <CardContainer className="customClass">
      <ProfileWrapper>
        <ProfileImage loading="lazy" src="swiper4.png"/>
        <ProfileName>Nadine Bertalli</ProfileName>
        <ProfileInfo>kinesiology & wellness</ProfileInfo>
        <ProfileRole>Owner</ProfileRole>
      
      <TestimonialWrapper>
        <Testimonial>
          <TestimonialText>
            Time-Saving Convenience <br /> <br />{" "}
            <span style={{ fontWeight: 500 }}>
              &quot;SqueezeIn has been a game-changer for my schedule! I managed
              to book a last-minute hair appointment during my lunch break,
              which was unthinkable before. I'm never wasting time calling
              around again!&quot;
            </span>
          </TestimonialText>
          <TestimonialAuthor>Nadine Bertalli</TestimonialAuthor>
        </Testimonial>
      </TestimonialWrapper>
      </ProfileWrapper>
    </CardContainer>
      </SwiperSlide>
      
    </Swiper>
  ...

      
    
   
    
    <div style={{textAlign:'center'}}><Button>See More Reviews</Button></div>
    </WrapperContainer>
    </>
    
  );
}



const WrapperContainer=styled.div`
padding:30px 121px 30px 121px;
@media (max-width:576px){
  padding:30px 16px;
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

const Button=styled.button`
background: rgb(91, 192, 232);
  border: rgb(91, 192, 232) solid 1px;
  border-radius: 50px;
  padding: 1rem;
  cursor:pointer;
  color: white;
  font-size: 18px;
@media (max-width:576px){
 
}
`;

const CardContainer = styled.div`
  display: flex;
  width: 490px;
  
  padding: 40px 0;
  margin: 0 auto;
  flex-direction: column;
  @media (max-width: 576px) {
    width: 100%;
  
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

  @media (max-width: 576px) {
 
  }
`;

const ProfileImage = styled.img`
  
  object-fit: contain;
  object-position: center;
  width: 120px;
  overflow: hidden;
  align-self: center;
  z-index: 1;
  margin-top: -50px;
  max-width: 100%;
`;

const ProfileName = styled.div`
  color: var(--Main_clr, #253d4e);
  text-align: center;
  align-self: center;
  margin-top: 21px;
  white-space: nowrap;
  font: 500 16px/137.5% Quicksand,sans-serif;

  @media (max-width: 576px) {
    white-space: initial;
  }
`;

const ProfileInfo = styled.div`
  color: var(--Main_clr, #253d4e);
  text-align: center;
  align-self: center;
  margin-top: 4px;
  white-space: nowrap;
  font: 500 16px/137.5% Quicksand, sans-serif;

  @media (max-width: 576px) {
    
  }
`;

const ProfileRole = styled.div`
  color: var(--Main_clr, #253d4e);
  text-align: center;
  align-self: center;
  margin-top: 4px;
  white-space: nowrap;
  font: 500 16px/137.5% Quicksand, sans-serif;

  @media (max-width: 576px) {
    
  }
`;

const TestimonialWrapper = styled.span`
  align-self: stretch;
  display: flex;
  margin-top: 21px;
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
  font: 600 16px Quicksand, sans-serif;

  @media (max-width: 576px) {
    max-width: 100%;
  }
`;

const TestimonialAuthor = styled.div`
  color: var(--Main_clr, #253d4e);
  text-align: right;
  margin-top: 59px;
  margin-bottom:20px;
  font: 500 18px/114% Quicksand, sans-serif;

  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
  }
`;

const TestimonialText = styled.div`
  
  font: 500 16px/114% Quicksand, sans-serif;

  @media (max-width: 991px) {
   font-size:16px;
  }
`;


export default Reviews;