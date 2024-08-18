import React from "react";
import { servicesData } from "../utils/services";
import linkIcon from "../assets/link-icon.png";
import { motion } from "framer-motion";
import variants from "../utils/variants";
const Services = () => {
  return (
    <section className="bg-white pt-24 pb-16" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* headline and description */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ amount: 0.1 }} variants={variants("right", 0.2)} className="flex flex-col md:flex-row gap-4 mb-12">
          <div className="flex-shrink-0 bg-primary text-black py-2 px-16 rounded-md">
            <h2 className="text-2xl font-bold">Our Services</h2>
          </div>
          <div className="md:w-2/3">
            <p className="text-secondary md:w-2/3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque quia, quidem atque, quibusdam voluptatem, quas explicabo mollitia</p>
          </div>
        </motion.div>
        {/* Cart services */}
        <div className="grid grid-cols-1  md:grid-cols-2 gap-6">
          {servicesData.map((service, index) => (
            <div key={index} className={`flex flex-col sm:flex-row md:justify-between md:items-center gap-6 p-6 rounded-lg border border-[#191A23] cursor-pointer ${service.backgroundColor} ${service.textColor}`}>
              <div className="md:w-1/2 flex flex-col h-full justify-between">
                <button className={`text-xl py-1.5 font-semibold mb-2 rounded-sm sm:w-60 ${service.foregroundColor}`}>{service.title}</button>
                <a href="#" className={` flex items-center gap-4 py-2 rounded-md text-black hover:bg-opacity-80 hover:text-black/80`}>
                  <img src={linkIcon} alt="" />
                  <span className="text-lg font-medium">Learn More</span>
                </a>
              </div>

              {/*image  */}
              <img src={service.image} alt="" className="md:w-1/2  w-full object-cover rounded-md mb-4 order-fist md:order-last" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
