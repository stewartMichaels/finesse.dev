import React, { useRef } from "react";

function About() {
  const about = useRef();

  return (
    <>
      <section id="about" ref={about} className="pt-[140px]">
        {/* <div className="hidden py-12 md:py-20 h-[100vh]"></div>  */}
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              About{" "}
              <span className="text-primary font-kodemono">finesse.dev</span>
            </h2>
            <p className="text-gray-600 text-lg md:text-xl">
              We are a team of passionate developers and designers dedicated to
              crafting exceptional digital experiences.
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <img
                src="https://via.placeholder.com/500x300"
                alt="About Us"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2 p-10">
              <p className="text-gray-700 mb-6 ">
                At finesse.dev, we believe in the power of technology to
                transform businesses and enhance user experiences. Our team of
                skilled professionals combines creativity, technical expertise,
                and a deep understanding of user needs to deliver innovative
                solutions that exceed expectations.
              </p>
              <p className="text-gray-700 mb-6">
                Whether it's building a stunning website, developing a
                cutting-edge application, or optimizing your online presence, we
                are dedicated to providing outstanding service and delivering
                results that drive growth and success for our clients.
              </p>
              <a
                href="#"
                className="inline-block bg-primary text-white font-medium py-3 px-6 rounded-lg hover:bg-primary-hover"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
