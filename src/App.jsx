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
      <Header />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
