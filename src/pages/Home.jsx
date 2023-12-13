import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import Products from '../components/Products'
import AboutComponent from '../components/AboutComponent'
import Value from '../components/Value'
import Blog from '../components/Blog'
import Footer from '../components/Footer'
const Home = () => {
  return (
    <>
     <Navbar/>
     <Header/>
     <Products/>
     <AboutComponent/>
     <Value/>
     <Blog/>
     <Footer/>
    </>
  )
}

export default Home