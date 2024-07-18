import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Menu from './Menu'
import Footer from './Footer'
import Products from './Product/Products'

const Home = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <Menu />
        <Products />
        <Footer />
    </div>
  )
}

export default Home