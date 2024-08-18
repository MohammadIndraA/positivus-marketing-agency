import React from "react";
import ctaImage from "../assets/cta-image.png";
import { transform } from "framer-motion";

const CTA = () => {
  return (
    <section className="relative py-12 ">
      <div className="max-w-7xl mx-auto bg-[#f3f3f3] rounded-s-md sm:pt-24 pt-8 pb-12 flex justify-between flex-col md:flex-row items-center px-4 sm:px-6 lg:px-8">
        {/* left */}
        <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          <h1 className="md:text-4xl text-3xl font-bold text-secondary mb-4">Let's make things happen</h1>
          <p className="text-gray-600 mb-6 md:w-2/3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis quibusdam voluptas, asperiores repellat possimus pariatur voluptate odit</p>
          <button className="inline-block bg-black text-white px-6 py-3 rounded-md font-semibold hover:bg-primary hover:text-black transition-all duration-300">Book a consulation</button>
        </div>

        {/* right */}
        <div className="md:w-1/2 flex justify-center items-center relative">
          <img src={ctaImage} alt="" className="md:absolute md:bottom-0 md:-top-52" style={{ transform: "scale(1.05)" }} />
        </div>
      </div>
    </section>
  );
};

export default CTA;
