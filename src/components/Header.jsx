// react imports
import { useState, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

// framer motion import
import { motion } from "framer-motion";
import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import Contact from "../pages/Contact";
import Technologies from "../pages/Technologies";

const Header = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const technologiesRef = useRef(null);
  const servicesRef = useRef(null);
  const contactRef = useRef(null);

  const handleScroll = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleMenu = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <>
      <div>
        <nav className="fixed top-0 left-0 right-0 flex justify-between items-center h-[90px] px-10 lg:px-[200px] bg-white z-20">
          <motion.h1
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="text-xl cursor-pointer font-kode"
            onClick={() => handleScroll(homeRef)}
          >
            finesse.<span>dev</span>
          </motion.h1>
          <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className="text-2xl cursor-pointer"
            onClick={toggleMenu}
          >
            {isNavOpen ? <FaTimes /> : <FaBars />}
          </motion.div>
        </nav>

        {isNavOpen && (
          <div>
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="fixed top-0 left-0 right-0 z-10 flex flex-col justify-center items-center w-full h-[100vh] bg-white text-center gap-4"
            >
              <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <button
                  onClick={() => {
                    handleScroll(homeRef);
                    toggleMenu();
                  }}
                >
                  Home
                </button>
              </motion.li>
              <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <button
                  onClick={() => {
                    handleScroll(aboutRef);
                    toggleMenu();
                  }}
                >
                  About
                </button>
              </motion.li>
              {/* <li>
                <button
                  onClick={() => {
                    handleScroll(technologiesRef);
                    toggleMenu();
                  }}
                >
                  Technologies
                </button>
              </li> */}
              <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <button
                  onClick={() => {
                    handleScroll(servicesRef);
                    toggleMenu();
                  }}
                >
                  Services
                </button>
              </motion.li>
              <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <button
                  onClick={() => {
                    handleScroll(contactRef);
                    toggleMenu();
                  }}
                >
                  Contact
                </button>
              </motion.li>
            </motion.ul>
          </div>
        )}

        <div className="pt-20">
          <section ref={homeRef}>
            <Home />
          </section>

          <section ref={aboutRef}>
            <About />
          </section>

          <section ref={servicesRef}>
            <Services />
          </section>

          <section ref={technologiesRef}>
            <Technologies />
          </section>

          <section ref={contactRef}>
            <Contact />
          </section>
        </div>
      </div>
    </>
  );
};

export default Header;
