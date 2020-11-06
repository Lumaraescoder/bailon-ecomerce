import About from './about/index'
import React from 'react'
import SimpleSlider from './Slider/index'
import Products from './Home'
// import Services from './services/index'
import Contact from './contact/index'
import Location from './location/index'
import Subnav from '../../components/Subnav/index'
import Navbar from '../../components/Navbar/index'


const Home = () => (
  <div>
    <Subnav />
    <Navbar />
    <SimpleSlider />
    <Products />
    <About />
    {/* <Services /> */}
    <Contact />
    <Location />
  </div>
)

export default Home
