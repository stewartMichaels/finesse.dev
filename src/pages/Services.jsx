import React, { useRef } from "react";

// components import

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"



function Services() {
  const services = useRef();

  return (
    <>
      <section id="services" ref={services} className="pt-[140px] scroll">
        <div className="h-[100vh] m-10">
          <div className=" text-center ">
            <span className=" text-7xl font-semibold ">Our Services</span>
            <h2 className="text-3xl md:text-4xl  font-bold text-gray-800 mt-24 mb-5">
              <span className="text-[#189AB4]">Unlock</span> Your Digital
              Potential
            </h2>
            <p className="text-gray-600 text-lg md:text-xl">
              Let our experts transform your online presence.
            </p>
            <Separator className="my-9 mb-20 " />

            <div className=" flex flex-col lg:flex-row gap-10 ">
              <Card className='lg:w-1/3' >
  <CardHeader >
    <CardTitle>Portfolio Webiste</CardTitle>
    <CardDescription className=''>Starters</CardDescription>
  </CardHeader>
  <CardContent>
    <p className="text-2xl">₹ 5000</p>
  </CardContent>
  <CardFooter>
    <p>Fully Responive, superfast</p>
  </CardFooter>
</Card>
              <Card className='lg:w-1/3' >
  <CardHeader >
    <CardTitle>Portfolio Webiste</CardTitle>
    <CardDescription className=''>Starters</CardDescription>
  </CardHeader>
  <CardContent>
    <p className="text-2xl">₹ 5000</p>
  </CardContent>
  <CardFooter>
    <p>Fully Responive, superfast</p>
  </CardFooter>
</Card>
              <Card className='lg:w-1/3' >
  <CardHeader >
    <CardTitle>Portfolio Webiste</CardTitle>
    <CardDescription className=''>Starters</CardDescription>
  </CardHeader>
  <CardContent>
    <p className="text-2xl">₹ 5000</p>
  </CardContent>
  <CardFooter>
    <p>Fully Responive, superfast</p>
  </CardFooter>
</Card>
 </div>
           

       
          </div>
         
        </div>
      </section>
    </>
  );
}

export default Services;
