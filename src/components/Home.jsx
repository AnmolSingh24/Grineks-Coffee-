import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Menu from './Menu'
import Products from './Products'

const Home = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <Menu />
        <Products />
    </div>
  )
}

export default Home