// react imports
import { FaInstagram, FaFacebook } from "react-icons/fa6";

// image import
import footerLogo from "../assets/logo-text.webp";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer>
        <div className="bg-white h-64 space-y-10">
          <div className="flex flex-col items-center justify-center space-y-6">
            <a href="#">
              <img
                className="w-36 pt-10"
                src={footerLogo}
                alt="finesse.dev logo"
              />
            </a>
            <span className="text-gray-500 text-sm tracking-wide">
              &copy; {currentYear} Finesse Developers. All rights reserved.
            </span>
          </div>
          <div className="flex items-center justify-center gap-8">
            <FaInstagram
              className="cursor-pointer"
              onClick={() =>
                window.open("https://www.instagram.com/finesse.dev/")
              }
            />
            <span className="text-gray-700 text-xs font-light">|</span>
            <FaFacebook
              className="cursor-pointer"
              onClick={() =>
                window.open("https://www.facebook.com/finesse.dev/")
              }
            />
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
