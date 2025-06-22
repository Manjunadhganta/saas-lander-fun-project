import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import About from './components/About'
import Price from './components/Price'

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Price />
    </>
  )
}

export default App
