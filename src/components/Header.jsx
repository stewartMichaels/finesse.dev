// icons import from react-icons
import { FaBars, FaFacebookSquare, FaInstagram } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import { IconContext } from "react-icons";

function Header() {
  return (
    <>
      <header className="flex justify-between items-center w-[100%] h-[120px] px-[13%] py-0">
        <div className="logo-wrapper text-[32px] font-semibold text-primary-hover cursor-pointer">
          finesse.<span className="text-primary">dev</span>
        </div>
        <div className="menu-container flex justify-end items-center w-[600px] h-[56px] gap-20">
          <span className="flex items-center justify-center gap-10">
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

          <span>
            <IconContext.Provider
              value={{
                color: "#000",
                size: "20px",
                className: "icons-container",
              }}
            >
              <div className="icon cursor-pointer">
                <FaBars />
              </div>
            </IconContext.Provider>
          </span>
        </div>
      </header>
    </>
  );
}

export default Header;
