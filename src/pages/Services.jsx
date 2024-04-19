import React, { useRef } from "react";

// components import
import Card from "../components/Card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

function Services() {
  const services = useRef();

  return (
    <>
      <section id="services" ref={services} className="pt-[140px]">
        <div className="h-[100vh] m-10">
          <div className="title-wrapper ">
            <span className="service-title text-6xl">Our Services</span>
            <h2 className="text-3xl md:text-4xl  font-bold text-gray-800 my-5">
              <span className="text-[#189AB4]">Unlock</span> Your Digital
              Potential
            </h2>
            <p className="text-gray-600 text-lg md:text-xl">
              Let our experts transform your online presence.
            </p>
            <Separator className="my-9 mb-20 " />

            Card
       
          </div>
          <Card />
        </div>
      </section>
    </>
  );
}

export default Services;
