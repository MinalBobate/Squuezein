import React from 'react'
import { Box, styled, Typography } from '@mui/material'


const Container = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column-reverse',
  
  }
}));

const GridContainer=styled('div')(({theme})=>({
display:'grid',
gridTemplateRows:'auto auto',
gridTemplateColumns:'auto auto',
gridGap: '20px',
}))

const Wrapper = styled(Box)`
  align-items: center;
  padding:0px;
  margin-right:0px;
  display: flex;
  width: 300px;
  height:300px;
  flex-direction: column;
  border-radius: 28px;
  border: 2px solid #5bc0e8;
  background-color: rgba(91, 192, 232, 0.1);
  padding: 45px;
  
`;

const Image = styled("img")`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  // width: 100%;
  overflow: hidden;
`;

const Caption = styled(Typography)`
  color: var(--Main_clr, #253d4e);
  text-align: center;
  align-self: stretch;
  margin-top: 10px;
  width: 100%;
  font: 500 24px/34px Quicksand, sans-serif;
`;

function TopServices() {
  return (
    <>
    <div style={{padding:'30px 121px 30px 121px'}}>
      <div style={{color:'rgba(91, 192, 232, 1)', fontSize:'30px',marginBottom:'30px'}}>Top- Searched <span style={{color:'rgba(37, 61, 78, 1)'}}>Services </span></div>
    
      <Container style={{width:'100%'}}>
        <GridContainer   style={{width:'50%'}}>
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
          <Wrapper  >
            <Image src="/gardening.png" />
            <Caption>Gardening & Landscaping</Caption>
          </Wrapper>

        </GridContainer>
        <Box style={{width:'50%',display:'flex',justifyContent:'end',alignContent:'center'}}>
          <img src="/boyImage.png" width='550px' style={{margin: 'auto 0'}}/>
        </Box>
      </Container>
      <div style={{color:'rgba(91, 192, 232, 1)',padding: '30px 0',
  'font-size': '26px'}}>
        Explore More Services 
<img  src='/Line1.svg'/>
      </div>
      </div>
    </>
  )
}

export default TopServices