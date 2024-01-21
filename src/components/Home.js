import React from 'react'
import {Box} from '@mui/material'
//components
import Header from './Header'
import TopServices from './TopServices'
import TopFeatures from './TopFeatures'
import HowWeWork from './HowWeWork'
import Reviews from './Reviews'
import CustomerSupport from './CustomerSupport'
import Frame149 from './Frame149'
const Home=()=>{
return(
  <>
  <Box style={{width:'100%'}}>
  <Header />
  <TopServices />
  <TopFeatures />
  <HowWeWork />
  <Reviews />
  <CustomerSupport />
  <Frame149 />
  </Box>
  </>
)
}
export default Home;