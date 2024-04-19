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
<<<<<<< HEAD
    <div className="snap-y  h-screen   snap-mandatory overflow-y-scroll bg-gradient-to-r from-[hsl(0,0%,97%)] scroll-smooth to-[hsl(0,0%,93%)] z-0">
      <Header />
      <section className="snap-center" id="hero">
        <Hero />
=======
    <div className="snap-y  h-screen   snap-mandatory overflow-y-scroll bg-gradient-to-r from-[hsl(0,0%,97%)] scroll-smooth to-[hsl(0,0%,93%)] scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#1d1b5d] z-0">
      <Header  />
      <section className="snap-start "id="hero">
      <Hero  />
>>>>>>> 921ee66fd9f7f654119f1cef9b8a0776771a40b9
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
  );
}

export default App;
