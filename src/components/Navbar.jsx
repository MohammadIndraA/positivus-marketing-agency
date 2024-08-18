import React, { useState } from "react";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("");

  const handleClick = (name) => {
    setActiveItem(name);
  };

  const menuItem = [
    {
      name: "About Us",
      href: "#about",
    },
    {
      name: "Services",
      href: "#services",
    },
    {
      name: "Use Cases",
      href: "#use-cases",
    },
    {
      name: "Team",
      href: "#team",
    },
    {
      name: "Testimonials",
      href: "#testimonials",
    },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* logi */}
          <div>
            <a href="#">
              <img src="logo.png" alt="logo" className="h-8" />
            </a>
          </div>

          {/* navItems */}
          <div className="space-x-8 hidden md:flex items-center">
            {menuItem.map((item, index) => {
              return (
                <a
                  href={item.href}
                  key={index}
                  onClick={() => handleClick(item.name)}
                  className={`text-black px-2 hover:bg-primary rounded-sm hover:underline underline-offset-4 transition-all duration-300 ${activeItem === item.name ? "bg-primary text-black underline-offset-4 underline" : ""}`}
                >
                  {item.name}
                </a>
              );
            })}
            <a href="#contact" className="border px-4 py-2 border-black hover:bg-primary hover:border-primary rounded-md transition-all duration-300">
              Request a quote
            </a>
          </div>

          {/* menu Mobile Icon */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 hover:text-primary focus:outline-none">
              {isOpen ? <HiOutlineX className="size-6" /> : <HiOutlineMenuAlt3 className="size-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="px-4 pt-2 pb-3 space-y-2 sm:px-3">
            {menuItem.map((item, index) => {
              return (
                <a
                  href={item.href}
                  key={index}
                  onClick={() => handleClick(item.name)}
                  className={`block text-black px-2 hover:bg-primary rounded-sm hover:underline underline-offset-4 transition-all duration-300 ${menuItem === item.name ? "bg-primary" : ""}}`}
                >
                  {item.name}
                </a>
              );
            })}
            <a href="#contact" className="block border px-4 py-2 border-black hover:bg-primary hover:border-primary rounded-md transition-all duration-300">
              Request a quote
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
