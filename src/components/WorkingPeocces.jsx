import React, { useState } from "react";
import processSteps from "../utils/processSteps";
import { FaMinus, FaPlus } from "react-icons/fa";

const WorkingPeocces = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const hendleToggle = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="bg-white pt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* headline and description */}
        <div className="flex flex-col md:flex-row gap-4 mb-12">
          <div className="flex-shrink-0 bg-primary text-black py-2 px-8 rounded-md">
            <h2 className="text-2xl font-bold">Our Working Process</h2>
          </div>
          <div className="md:w-2/3">
            <p className="text-secondary md:w-3/5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque quia</p>
          </div>
        </div>

        {/* quetion */}
        <div className="">
          {processSteps.map((step, i) => (
            <div className={`border rounded-md mb-4 overflow-hidden ${openIndex === i ? "border-primary" : "border-gray-300"}`} key={i}>
              <button onClick={() => hendleToggle(i)} className={`flex w-full p-4 justify-between items-center ${openIndex === i ? "bg-primary " : "bg-tertiary"}`}>
                <div className="flex items-center">
                  <span className="text-secondary font-extrabold text-2xl mr-4"> {step.number}</span>
                  <h3 className="text-lg font-semibold text-start">{step.question}</h3>
                </div>
                <div className="bg-white text-black border p-1.5 rounded-full">{openIndex === i ? <FaMinus /> : <FaPlus />}</div>
              </button>
              {openIndex === i && (
                <div className="p-4 bg-primary text-secondary">
                  <hr className="mt-0 mb-5 border-black" />
                  <p>{step.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkingPeocces;
