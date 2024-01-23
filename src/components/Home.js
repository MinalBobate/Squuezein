import React from 'react'
import {Box} from '@mui/material'
//components

import Header from './Header'
import TopServices from './TopServices'
import TopFeatures from './TopFeatures'
import HowWeWork from './HowWeWork'
import Reviews from './Reviews'
import Security from './Security'
import Deals from './Deals'
import CustomerSupport from './CustomerSupport'
import FAQ from './FAQ'
import Footer from './Footer'

const Home=()=>{
return(
  <>
  <Box style={{width:'100%'}}>
    
  <Header />
  
  
  <TopServices />
  <TopFeatures />
  <HowWeWork />
  <Reviews />
  <Security />
  <CustomerSupport />
  <Deals />
  <FAQ/>
  <Footer />
  </Box>
  </>
)
}
export default Home;