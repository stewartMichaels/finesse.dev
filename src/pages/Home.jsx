// react imports
import { FaArrowAltCircleRight } from "react-icons/fa";

import { motion } from "framer-motion";

// image import
import heroImg from "../assets/bg.webp";

const Home = () => {
  return (
    <>
      <div className="flex flex-wrap items-center pt-10 px-10 lg:px-[200px]  pb-10">
        <div className="flex flex-col lg:w-1/2 gap-8">
          <motion.h1
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-3xl lg:text-6xl font-semibold leading-relaxed"
          >
            Elevate Your Digital Presence With Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5 }}
          >
            Are you ready to take your business to the next level? Our expert
            team will craft a stunning, high-performing website to showcase your
            brand and drive results.
          </motion.p>
          <motion.button
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.75 }}
            type="button"
            className="text-gray-900 bg-[#8dd4fd] w-[150px] hover:bg-[#1dacff] hover:text-white focus:ring-4 focus:outline-none focus:ring-[#F7BE38]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#F7BE38]/50 me-2 mb-2 gap-4 justify-center"
          >
            Get Started
            <FaArrowAltCircleRight />
          </motion.button>
        </div>

        <div className="flex lg:w-1/2">
          <motion.img
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5 }}
            src={heroImg}
            alt="hero image"
          />
        </div>
      </div>
    </>
  );
};

export default Home;
