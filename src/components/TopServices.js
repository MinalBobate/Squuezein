import React from 'react'
import { Box, styled, Typography } from '@mui/material'

const Container = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  // gap:'7.38rem',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column-reverse',
  
  }
}));

const GridContainer=styled('div')(({theme})=>({
width:'50%',
display:'grid',
gridTemplateRows:'auto auto',
gridTemplateColumns:'auto auto',
gridGap: '1.25rem',
[theme.breakpoints.down('md')]: {
  gridTemplateRows:'auto',
  gridTemplateColumns:'auto auto auto',
  width: '100%',
  padding: '2rem 0',
  gridGap: '0.813rem',
  justifyContent: 'center',
}
}))
const Image1=styled('img')(({theme})=>({
  width:'100%',
  margin: 'auto 0',


  [theme.breakpoints.down('md')]: {
    // width: '361.383px',
    // height: '308px',
    alignSelf:'center',
    margin:'0 auto',
    width:'100%',

  }
}))


const Wrapper = styled(Box)(({theme})=>({
  alignItems: 'center',
  display: 'flex',
  cursor:'pointer',
  // width: '18.75rem',
  // height:'18.75rem',
  flexDirection: 'column',
  borderRadius: '1.75rem',
  border: '2px solid #5bc0e8',
  backgroundColor:' rgba(91, 192, 232, 0.1)',
  padding: '2.813rem 4rem',
  [theme.breakpoints.down('md')]: {
    // width: '120px',
    // height: '189px',
    gap:'0.625rem',
    paddingTop: '2.188rem',
    paddingLeft: '0.438rem',
    paddingRight: '0.438rem',
    paddingBottom:'0px'
  }
}))

const WrapperLast= styled(Box)(({theme})=>({
  alignItems: 'center',
  display: 'flex',
  // width: '18.75rem',
  // height:'18.75rem',
  flexDirection: 'column',
  borderRadius: '1.75rem',
  border: '2px solid #5bc0e8',
  backgroundColor:' rgba(91, 192, 232, 0.1)',
  padding: '2.813rem 4rem',
  [theme.breakpoints.down('md')]: {
    // width: '120px',
    // height: '189px',
    display:'none',
    
  }
}))



const Image = styled("img")(({theme})=>({

  [theme.breakpoints.down('md')]: {
  width:'100%',
  //  height:'60px'
  }
  }))




const Caption = styled(Typography)(({theme})=>({
  color: '#253d4e',
  textAlign: 'center',
 
  marginTop: '0.625rem',
  width: '100%',
  fontWeight: '500',
  font: '500 1.5rem/2.125rem Quicksand, sans-serif',

  [theme.breakpoints.down('md')]: {
    fontSize: '1rem',
    lineHeight: '1.25rem' /* 125% */
  }
  }))
 



const Heading=styled('div')(({theme})=>({
  color:'rgba(91, 192, 232, 1)', 
  fontSize:'1.875rem',
  marginBottom:'1.875rem',
  fontWeight:'500',
  [theme.breakpoints.down('md')]: {
    fontSize: '1.5rem',
  lineHeight: '1.875rem',
  textAlign: 'center',
  }
  }))

 
  const WrapperContainer = styled('div')(({ theme }) => ({
    padding: '1.875rem 7.56rem',
    [theme.breakpoints.down('sm')]: {
      padding: '2.5rem 1rem',
    },
  }));
  const BoxImage = styled('div')(({ theme }) => ({
    width: '50%',
  paddingLeft: '7.9rem',
    display:'flex',
    justifyContent:'end',
    alignContent:'center',
    [theme.breakpoints.down('sm')]: {
     width:'100%',
     justifyContent:'center',
     paddingLeft: '0rem',
    },
  }));
  const Explore = styled('div')(({ theme }) => ({
    color:'rgba(91, 192, 232, 1)',
    padding: '1.875rem 0',
    fontSize: '1.625rem',
    cursor:'pointer',
    [theme.breakpoints.down('sm')]: {
      textAlign: 'right',
      fontSize: '1.125rem'
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