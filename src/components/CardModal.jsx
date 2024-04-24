/* eslint-disable react/prop-types */

// react import
import { IoCloseCircleOutline } from "react-icons/io5";

// framer motion import
import { motion } from "framer-motion";

const CardsModal = ({ card, onClose }) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="fixed inset-0 z-50 bg-black/10 backdrop-blur-[2px] flex justify-center items-center"
      >
        <div className="mt-10 flex flex-col lg:gap-5 text-left">
          <div className="bg-white rounded-xl px-5 py-5 lg:px-20 lg:py-10 flex flex-col gap-5 mx-4 items-start">
            <motion.button
              whileHover={{ scale: 1.2, rotate: 360, repeat: Infinity }}
              onClick={onClose}
              className="place-self-end"
            >
              <IoCloseCircleOutline size={30} />
            </motion.button>
            <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
              {card.title}
            </h4>

            <p className="block mb-8 font-sans text-base antialiased font-normal leading-relaxed text-gray-700 max-w-md">
              {card.modalDescription}
            </p>

            <div className="flex items-center justify-center gap-5">
              <h6 className="font-sans antialiased font-semibold leading-relaxed tracking-normal text-gray-700 uppercase text-sm lg:text-base">
                Starting At
              </h6>
            </div>
            <h1 className="flex justify-center gap-1 mt-6 font-sans antialiased font-normal tracking-normal lg:text-3xl">
              <span className="mt-2 text-xs lg:text-base">₹</span>
              {card.priceLow}
              <span className="self-end text-sm lg:text-lg">
                /{card.priceHigh}
              </span>
            </h1>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default CardsModal;
