// framer motion import
import { motion } from "framer-motion";

// images import
import about from "../assets/about-us.webp";
import AboutCards from "../components/AboutCards";

const About = () => {
  return (
    <div>
      <>
        <motion.h1
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 3 }}
          className="text-center text-3xl my-4 pt-28 md:text-4xl"
        >
          About{" "}
          <span className="font-kode text-blue-300">
            finesse.<em>dev</em>
          </span>
        </motion.h1>
        <div className="flex flex-wrap items-center flex-col gap-10 lg:gap-16 lg:pt-10 px-10 lg:px-[200px] pb-10">
          <div className="flex flex-col gap-6 lg:gap-10">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
              className="text-gray-600 text-lg lg:leading-loose"
            >
              We are your premiere partner giving you the boost in your
              business, building a brand or even making a career portfolio.
              <br />
              We give our years of expertise to make you worry-free in the
              digital branding domain.
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
              className="flex flex-wrap items-center justify-center"
            >
              <AboutCards />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="flex"
          >
            <img
              className="object-cover object-center w-[2000px] lg:h-[500px] rounded-lg"
              src={about}
              alt="Office Photo"
            />
          </motion.div>
        </div>
      </>
    </div>
  );
};

export default About;
