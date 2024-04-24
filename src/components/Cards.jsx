// react imports
import { useState } from "react";
import { MdDesignServices } from "react-icons/md";
import { VscDebugBreakpointFunction } from "react-icons/vsc";
import { FaArrowAltCircleRight } from "react-icons/fa";

// framer motion import
import { motion } from "framer-motion";

// data import
import { cardData } from "../data";

// modal import
import CardModal from "./CardModal";

const Cards = () => {
  const [showModal, setShowModal] = useState(false);

  const [modalData, setModalData] = useState({});

  return (
    <>
      <div className="flex flex-wrap justify-center mt-10">
        {cardData.map((card, index) => (
          <div key={index} className="p-4 w-[390px]">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="flex rounded-lg h-full dark:bg-gray-800 bg-teal-400 p-8 flex-col"
            >
              <div className="flex items-center mb-3">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    ease: "linear",
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                  className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full dark:bg-indigo-500 bg-indigo-500 text-white flex-shrink-0"
                >
                  <MdDesignServices />
                </motion.div>
                <h2 className="text-white dark:text-white text-lg font-medium">
                  {card.title}
                </h2>
              </div>
              <div className="flex flex-col justify-between flex-grow">
                <div className="leading-relaxed text-base text-white dark:text-gray-300">
                  {card.includes.map((features, index) => (
                    <ul
                      key={index}
                      className="flex items-center gap-1 justify-start"
                    >
                      <VscDebugBreakpointFunction className="text-blue-500" />{" "}
                      <li>{features}</li>
                    </ul>
                  ))}
                  <br />
                  {card.idealFor.map((idealFor, index) => (
                    <span
                      key={index}
                      className="mr-2 rounded px-2 py-1 text-sm font-semibold bg-purple-800"
                    >
                      {idealFor}
                    </span>
                  ))}
                </div>

                {/* 👇 Button for opening modal */}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                  className="mt-3 text-black dark:text-white hover:text-blue-600 inline-flex items-center gap-2"
                  onClick={() => {
                    setShowModal(true);
                    setModalData(card);
                  }}
                >
                  Learn More
                  <FaArrowAltCircleRight />
                </motion.button>
                {showModal && (
                  <CardModal
                    card={modalData}
                    onClose={() => setShowModal(false)}
                  />
                )}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Cards;
