import React from "react";
import Hero from "./Hero";
import Awards from "./Awards";
import Stats from "./Stats";
import Pricing from "./Pricing";
import Education from "./Education";

import OpenAccount from "../OpenAccount";


function HomePage() {
  return (
    <>
     
      <main style={{ marginTop: '70px', marginBottom: '70px' }}>
        <Hero />
        <Awards />
        <Stats />
        <Pricing />
        <Education />
        <OpenAccount />
      </main>
      
    </>
  );
}


export default HomePage;
