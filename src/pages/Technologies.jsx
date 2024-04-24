import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { DiRedis } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";

import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <>
      <div className="pt-10 px-10 lg:px-[200px] pb-10">
        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1.5 }}
          className="my-20 text-center text-4xl"
        >
          {/* Technologies */}
        </motion.h2>
        <motion.div
          whileInView={{ x: 0, opacity: 1 }}
          initial={{ x: -100, opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <motion.div
            variants={iconVariants(1.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl bg-blue-100/20 p-4"
          >
            <RiReactjsLine className="text-7xl text-cyan-400" />
          </motion.div>
          <motion.div
            variants={iconVariants(2)}
            initial="initial"
            animate="animate"
            className="rounded-2xl  bg-blue-100/20 p-4"
          >
            <TbBrandNextjs className="text-7xl text-slate-200" />
          </motion.div>
          <motion.div
            variants={iconVariants(1.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl  bg-blue-100/20 p-4"
          >
            <SiMongodb className="text-7xl text-green-500" />
          </motion.div>
          <motion.div
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
            className="rounded-2xl  bg-blue-100/20 p-4"
          >
            <DiRedis className="text-7xl text-red-700" />
          </motion.div>
          <motion.div
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl  bg-blue-100/20 p-4"
          >
            <FaNodeJs className="text-7xl text-green-500" />
          </motion.div>
          <motion.div
            variants={iconVariants(1)}
            initial="initial"
            animate="animate"
            className="rounded-2xl  bg-blue-100/20 p-4"
          >
            <BiLogoPostgresql className="text-7xl text-sky-700" />
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default Technologies;
