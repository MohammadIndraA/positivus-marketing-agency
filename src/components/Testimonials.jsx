import React, { useEffect, useState } from "react";
import testimonialsData from "../utils/testimonialsData";
import { BsChatQuote } from "react-icons/bs";
import { IoArrowBack } from "react-icons/io5";
import { IoMdArrowForward } from "react-icons/io";
import { motion } from "framer-motion";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemToShow, setItemToShow] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 2000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setItemToShow(3);
      } else {
        setItemToShow(1);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + itemToShow) % testimonialsData.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - itemToShow + testimonialsData.length) % testimonialsData.length);
  };

  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="bg-white pb-8 pt-24" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 relative sm:px-6 lg:px-6">
        {/* headling */}
        <div className="flex flex-col md:flex-row gap-4 mb-12">
          <div className="flex-shrink-0 bg-primary text-black py-2 px-16 rounded-md">
            <h2 className="text-2xl font-bold">Testimonials</h2>
          </div>
          <div className="md:w-2/3">
            <p className="text-secondary md:w-2/3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque quia, quidem atque, quibusdam voluptatem, quas explicabo mollitia</p>
          </div>
        </div>

        {/* testimonials carausel */}
        <div className="relative mb-12 ">
          {/* sliders */}
          <div className="flex flex-col md:flex-row max-w-7xl mx-auto gap-3 overflow-hidden ">
            {testimonialsData.slice(currentIndex, currentIndex + itemToShow).map((test, index) => (
              <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }} transition={{ duration: 0.5 }} key={index} className="w-full relative py-5 md:max-w-md px-2 ">
                <div className="absolute top-0 left-0 z-30">
                  <BsChatQuote className="size-8" />
                </div>
                <div className="h-48 bg-white hover:bg-primary rounded-lg border hover:border-primary shadow-lg p-6 cursor-pointer transition-all duration-300">
                  <p className="text-base font-semibold mb-4">{test.text}</p>
                  <p className="text-sm font-semibold text-gray-700">~{test.author}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* dots navigation */}
          <div className="absolute mt-5 left-1/2 transform -translate-x-1/2 flex items-center space-x-10 z-10 ">
            {/* button prev */}
            <button className="text-black" onClick={handlePrevious}>
              <IoArrowBack />{" "}
            </button>

            {/* dot */}
            <div className="flex space-x-2">
              {testimonialsData.map((_, index) => (
                <button onClick={() => handleClick(index)} key={index} className={`w-3 h-3 rounded-full ${index >= currentIndex && index < currentIndex + itemToShow ? "bg-primary" : "bg-gray-400"}`} />
              ))}
            </div>

            {/* next button */}
            <button className="text-black" onClick={handleNext}>
              <IoMdArrowForward />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
