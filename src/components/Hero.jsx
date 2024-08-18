import React from "react";
import bannerImg from "../assets/banner.png";
import LogoCaraousel from "./LogoCaraousel";
import { motion } from "framer-motion";
import variants from "../utils/variants";
const Hero = () => {
  return (
    <section className="bg-white  pt-12" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
        <div className="flex flex-col md:flex-row items-center gap-6">
          {/* left */}
          <div className="md:w-1/2">
            <div className="md:w-3/4">
              <motion.h1 initial="hidden" whileInView="visible" viewport={{ amount: 0.1 }} variants={variants("bottom", 0.2)} className="md:text-5xl text-4xl font-bold text-secondary mb-4">
                Navigating the digital landscape for success
              </motion.h1>
              <motion.p initial="hidden" whileInView="visible" viewport={{ amount: 0.1 }} variants={variants("bottom", 0.5)} className="text-gray-600 mb-6">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis quibusdam voluptas, asperiores repellat possimus pariatur voluptate odit inventore dignissimos sint assumenda illo numquam optio magni sit nihil fuga aliquam
                deserunt?
              </motion.p>
              <motion.button
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.1 }}
                variants={variants("bottom", 0.5)}
                className="inline-block bg-black text-white px-6 py-3 rounded-md font-semibold hover:bg-primary hover:text-black transition-all duration-300"
              >
                Get Started
              </motion.button>
            </div>
          </div>

          {/* right */}
          <div className="md:w-1/2 order-first md:order-last">
            <motion.img initial="hidden" whileInView="visible" viewport={{ amount: 0.1 }} variants={variants("bottom", 0.2)} src={bannerImg} alt="" className="w-full h-auto rounded-md" />
          </div>
        </div>

        {/* brand logo */}
        <LogoCaraousel />
      </div>
    </section>
  );
};

export default Hero;
