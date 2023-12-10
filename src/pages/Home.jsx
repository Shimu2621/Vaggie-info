import React from 'react'
import Hero from '../components/Hero'
import Service from '../components/Service'
import Product from '../components/Product'
import Organic from '../components/Organic'
import Info from '../components/Info'
import Banner from '../components/Banner'
import Store from '../components/Store'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'


const Home = () => {
  return (
    <div>
        <Navbar></Navbar>
        <Hero></Hero>
        <Service></Service>
        <Product></Product>
        <Organic></Organic>
        <Info></Info>
        <Banner></Banner>
        <Store></Store>
        <Footer></Footer>
    </div>
  )
}

export default Home