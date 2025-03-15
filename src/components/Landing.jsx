import React from 'react'
import Threads from './Threads';
import Navbar from './Navbar';
import Hero from './Hero';
import Events from './Events';
import Team from './Team';
import Contact from './Contact';
import { useRef } from 'react';

const Landing = () => {
  const targetRef = useRef(null);

  return (
    <>
    <Navbar  />
    <Hero />
    <div ref={targetRef}>
    <Events />
    </div>
    <div ref={targetRef}>
    <Team />
    </div>
    <div ref={targetRef}>
    <Contact />
    </div>
        </>
  )
}

export default Landing