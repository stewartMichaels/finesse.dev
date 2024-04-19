// react imports
import React, { useRef, useState } from "react";

// icons import from react-icons
import { FaBars, FaFacebookSquare, FaInstagram, FaTimes } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import { IconContext } from "react-icons";

function Header() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const hero = useRef();
  const about = useRef();
  const services = useRef();
  const projects = useRef();
  const contact = useRef();

  return (
    <>
      <header className="flex justify-between  items-center w-[100%] px-40 bg-white sticky top-0">
        <a
          href="#hero"
          ref={hero}
          className="text-gray-800 hover:text-gray-600 font-bold cursor-pointer"
          id="/"
        >
          <div className="logo-wrapper  text-[20px] lg:text-[32px] font-semibold text-primary-hover cursor-pointer font-kodemono">
            finesse.<span className="text-primary">dev</span>
          </div>
        </a>
        <div className="menu-container  flex justify-end items-center w-[600px] h-[96px] gap-3 lg:gap-20">
          <span className="flex lg:items-center justify-center gap-2 lg:gap-10">
            <IconContext.Provider
              value={{
                color: "#000",
                size: "20px",
                className: "icons-container",
              }}
            >
              <div className="icon cursor-pointer">
                <FaInstagram />
              </div>
              <div className="icon cursor-pointer">
                <FaFacebookSquare />
              </div>
              <div className="icon cursor-pointer">
                <IoMailOutline />
              </div>
            </IconContext.Provider>
          </span>

          <span className="z-50">
            <IconContext.Provider
              value={{
                color: "#000",
                size: "20px",
                className: "icons-container",
              }}
            >
              <div className="icon cursor-pointer" onClick={toggleMenu}>
                {showMenu ? <FaTimes /> : <FaBars />}
              </div>
            </IconContext.Provider>
          </span>

          {showMenu && (
            <div className="fixed top-0 left-0 w-full h-screen o bg-baby-blue z-40 bg-opacity-90  flex justify-center items-center">
              {/* <div className="bg-blue-100 rounded-lg p-6 shadow-lg"> */}
              <div>
                <ul className="flex flex-col space-y-4 text-center">
                  <li>
                    <a
                      href="#about"
                      ref={about}
                      className="text-gray-800 hover:text-gray-600 font-bold"
                      onClick={() => {
                        toggleMenu();
                        scrollHandler(about);
                      }}
                    >
                      About
                    </a>
                  </li>

                  <li>
                    <a
                      href="#services"
                      ref={services}
                      className="text-gray-800 hover:text-gray-600 font-bold"
                      onClick={() => {
                        toggleMenu();
                        scrollHandler(services);
                      }}
                    >
                      Services
                    </a>
                  </li>

                  <li>
                    <a
                      href="#projects"
                      ref={projects}
                      className="text-gray-800 hover:text-gray-600 font-bold"
                      onClick={() => {
                        toggleMenu();
                        scrollHandler(projects);
                      }}
                    >
                      Projects
                    </a>
                  </li>

                  <li>
                    <a
                      ref={contact}
                      href="#contact"
                      className="text-gray-800 hover:text-gray-600 font-bold"
                      onClick={() => {
                        toggleMenu();
                        scrollHandler(contact);
                      }}
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
}

export default Header;
