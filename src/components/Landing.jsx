import React from 'react'
import Threads from './Threads';
import Navbar from './Navbar';
import Hero from './Hero';
import Events from './Events';
import Team from './Team';
import Contact from './Contact';

const Landing = () => {
  return (
    <>
    <Navbar />
    <Hero />
    <Events />
    <Team />
    {/* <Contact /> */}
        </>
  )
}

export default Landing