import React from 'react'
import { Box, styled, Typography } from '@mui/material'

const Container = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column-reverse',
  
  }
}));

const GridContainer=styled('div')(({theme})=>({
width:'50%',
display:'grid',
gridTemplateRows:'auto auto',
gridTemplateColumns:'auto auto',
gridGap: '20px',
[theme.breakpoints.down('md')]: {
  gridTemplateRows:'auto',
  gridTemplateColumns:'auto auto auto',
  width: '100%',
  padding: '32px 0',
  gridGap: '13px',
  justifyContent: 'center',
}
}))
const Image1=styled('img')(({theme})=>({
  width:'550px',
  margin: 'auto 0',

  [theme.breakpoints.down('md')]: {
    width: '361.383px',
    height: '308px',
    alignSelf:'center',
    margin:'0 auto'

  }
}))


const Wrapper = styled(Box)(({theme})=>({
  alignItems: 'center',
  display: 'flex',
  cursor:'pointer',
  width: '300px',
  height:'300px',
  flexDirection: 'column',
  borderRadius: '28px',
  border: '2px solid #5bc0e8',
  backgroundColor:' rgba(91, 192, 232, 0.1)',
  padding: '45px',
  [theme.breakpoints.down('md')]: {
    width: '120px',
    height: '189px',
    gap:'10px',
    paddingTop: '35px',
    paddingLeft: '7px',
    paddingRight: '7px',
    paddingBottom:'0px'
  }
}))

const WrapperLast= styled(Box)(({theme})=>({
  alignItems: 'center',
  display: 'flex',
  width: '300px',
  height:'300px',
  flexDirection: 'column',
  borderRadius: '28px',
  border: '2px solid #5bc0e8',
  backgroundColor:' rgba(91, 192, 232, 0.1)',
  padding: '45px',
  [theme.breakpoints.down('md')]: {
    width: '120px',
    height: '189px',
    display:'none',
    
  }
}))



const Image = styled("img")(({theme})=>({
  [theme.breakpoints.down('md')]: {
   width:'60px',
   height:'60px'
  }
  }))




const Caption = styled(Typography)(({theme})=>({
  color: '#253d4e',
  textAlign: 'center',
 
  marginTop: '10px',
  width: '100%',
  fontWeight: '500',
  font: '500 24px/34px Quicksand, sans-serif',

  [theme.breakpoints.down('md')]: {
    fontSize: '16px',
    lineHeight: '20px' /* 125% */
  }
  }))
 



const Heading=styled('div')(({theme})=>({
  color:'rgba(91, 192, 232, 1)', 
  fontSize:'30px',
  marginBottom:'30px',
  fontWeight:'500',
  [theme.breakpoints.down('md')]: {
    fontSize: '24px',
  lineHeight: '30px',
  textAlign: 'center',
  }
  }))

 
  const WrapperContainer = styled('div')(({ theme }) => ({
    padding: '30px 121px',
    [theme.breakpoints.down('sm')]: {
      padding: '40px 16px',
    },
  }));
  const BoxImage = styled('div')(({ theme }) => ({
    width:'50%',
    display:'flex',
    justifyContent:'end',
    alignContent:'center',
    [theme.breakpoints.down('sm')]: {
     width:'100%'
    },
  }));
  const Explore = styled('div')(({ theme }) => ({
    color:'rgba(91, 192, 232, 1)',
    padding: '30px 0',
    fontSize: '26px',
    cursor:'pointer',
    [theme.breakpoints.down('sm')]: {
      textAlign: 'right',
      fontSize: '18px'
    },
  }));


 

 
  



function TopServices() {
  return (
    <>
    <WrapperContainer>
      <Heading >Top- Searched <span style={{color:'rgba(37, 61, 78, 1)'}}>Services </span></Heading>
    
      <Container style={{width:'100%'}}>
        <GridContainer   >
          <Wrapper   >
            <Image src="/home.png" />
            <Caption>Home Imprent</Caption>
          </Wrapper>
          <Wrapper   >
            <Image src="/car.png" />
            <Caption>Automobiles</Caption>
          </Wrapper>
          <Wrapper  >
            <Image src="/personalCare.png" />
            <Caption>Personal Care</Caption>
          </Wrapper>
          <WrapperLast  className='d-none'>
            <Image src="/gardening.png" />
            <Caption>Gardening & Landscaping</Caption>
          </WrapperLast>

        </GridContainer>
        <BoxImage >
          <Image1 src="/boyImage.png" />
        </BoxImage>
      </Container>
      <Explore >
        Explore More Services 
<img  src='/Line1.svg'/>
      </Explore>
      </WrapperContainer>
    </>
  )
}

export default TopServices