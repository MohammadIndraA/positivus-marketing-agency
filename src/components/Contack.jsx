import React from "react";
import imageContak from "../assets/contact.png";
const Contack = () => {
  return (
    <section className="bg-white pt-24 pb-12" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* headline and description */}
        <div className="flex flex-col md:flex-row gap-4 mb-12">
          <div className="flex-shrink-0 bg-primary text-black py-2 px-16 rounded-md">
            <h2 className="text-2xl font-bold">Our Contac</h2>
          </div>
          <div className="md:w-2/3">
            <p className="text-secondary md:w-2/3">
              Lorem ipsum dolor sit : <br /> amet consectetur adipisicing elit. Doloremque quia, quidem atque
            </p>
          </div>
        </div>

        {/* contack form */}
        <div className="flex flex-col md:flex-row bg-[#F3F3F3] md:p-8 p-4 rounded-lg justify-between">
          <div className="w-full md:w-1/2 p-4">
            <form className="space-y-4">
              <div className="flex flex-col md:flex-row md:space-x-4 items-start justify-start">
                {/* radio buttons */}
                <label className="flex items-center">
                  <input type="radio" name="name" className="mr-2" value="Hi" />
                  Say Hi
                </label>
                <label className="flex items-center">
                  <input type="radio" name="name" className="mr-2" value="quote" />
                  Get A quote
                </label>
              </div>

              {/* Name Input */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input type="text" id="name" placeholder="Mr Duranto" className="mt-2 py-2.5 px-4 block w-full shadow-sm focus:outline-none focus:ring focus:ring-primary rounded-md" />
              </div>

              {/* Email Input */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email*
                </label>
                <input type="email" id="email" placeholder="Email Address" className="mt-2 py-2.5 px-4 block w-full shadow-sm focus:outline-none focus:ring focus:ring-primary rounded-md" />
              </div>

              {/* Textarea Input */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Message*
                </label>
                <textarea rows={6} id="message" placeholder="Enyter your message ..." className="mt-2 py-2.5 px-4 block w-full shadow-sm focus:outline-none focus:ring focus:ring-primary rounded-md" />
              </div>
              <button className="inline-block bg-black text-white px-6 py-3 rounded-md font-semibold hover:bg-primary hover:text-black transition-all duration-300">Send a message</button>
            </form>
          </div>

          {/* image */}
          <div className="md:w-1/2 relative md:flex justify-end items-center md:-m-8 overflow-hidden">
            <img src={imageContak} alt="" className="md:absolute top-0 -right-8 h-full  md:block hidden" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contack;
