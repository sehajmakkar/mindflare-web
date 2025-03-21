import React from "react";
import Threads from "./Threads";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Events from "./Events";
import Team from "./Team";
import Contact from "./Contact";
import Upcoming from "./Upcoming";
import { useRef } from "react";

const Landing = () => {
  const targetRef = useRef(null);

  return (
    <>
      <Navbar />
      <Hero />
      <div>
        <Upcoming />
      </div>
      <div>
        <Events />
      </div>
      <div>
        <Team />
      </div>
      <div>
        <Contact />
      </div>
    </>
  );
};

export default Landing;
