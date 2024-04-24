// component import
import Cards from "../components/Cards";

// framer motion import
import { motion } from "framer-motion";

const Services = () => {
  return (
    <>
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="text-center text-3xl my-4 pt-28 md:text-4xl"
      >
        Services
      </motion.h2>
      <Cards />
    </>
  );
};

export default Services;
