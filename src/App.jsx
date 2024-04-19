// react imports
import React from "react";

// components import
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Services from "./pages/Services.jsx";
import About from "./pages/About.jsx";
import Projects from "./pages/Projects.jsx";
import Contact from "./pages/Contact.jsx";

function App() {
  return (
    <>
     
      <div className="snap-y  h-screen   snap-mandatory overflow-y-scroll bg-gradient-to-r from-[hsl(0,0%,97%)] scroll-smooth to-[hsl(0,0%,93%)] z-0  scrollbar-track-gray-400/20 scrollbar-thumb-[#8eaadb] scrollbar">
      <Header  />
        <section className="snap-start" id="hero">
          <Hero />
        </section>
        <section className="snap-center">
          <About />
        </section>
        <section className="snap-center">
          <Services />
        </section>
        <section className="snap-center">
          <Projects />
        </section>
        <section className="snap-center">
          <Contact />
        </section>
      </div>
    </>
  );
}

export default App;
