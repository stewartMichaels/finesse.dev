import React, { useRef } from "react";

// components import
import Card from "../components/Card";

function Services() {
  const services = useRef();

  return (
    <>
      <section id="services" ref={services} className="pt-[140px]">
        <div className="h-[100vh]">
          <div className="title-wrapper">
            <span className="service-title">Our Services</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              <span className="text-[#189AB4]">Unlock</span> Your Digital
              Potential
            </h2>
            <p className="text-gray-600 text-lg md:text-xl">
              Let our experts transform your online presence.
            </p>
          </div>
          <Card />
        </div>
      </section>
    </>
  );
}

export default Services;
