import React from "react";
import logoImage from "../assets/footer-logo.png"; // Replace with your logoImage
import { FaFacebook, FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import FooterContact from "./FooterContact";

const Footer = () => {
  return (
    <footer className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-secondary rounded-t-2xl">
        {/* first section */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6 px-4 sm:px-6 lg:px-8 py-12">
          {/* logo */}
          <div>
            <img src={logoImage} alt="" className="h-8" />
          </div>

          {/* links */}
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-8">
            <a href="#about" className="text-white hover:text-gray-400">
              Home
            </a>
            <a href="#services" className="text-white hover:text-gray-400">
              Services
            </a>
            <a href="#use-cases" className="text-white hover:text-gray-400">
              Use Caese
            </a>
            <a href="#contact" className="text-white hover:text-gray-400">
              Contact
            </a>
          </div>

          {/* icon social */}
          <div className="flex md:justify-end space-x-4">
            <a href="#" className="p-1.5 text-black rounded-full bg-white">
              <FaFacebookF className="hover:text-gray-400" />
            </a>
            <a href="#" className="p-1.5 text-black rounded-full bg-white">
              <FaTwitter className="hover:text-gray-400" />
            </a>
            <a href="#" className="p-1.5 text-black rounded-full bg-white">
              <FaLinkedinIn className="hover:text-gray-400" />
            </a>
          </div>
        </div>

        {/* second section */}
        <FooterContact />

        <hr className="my-4 border-white mx-4 sm:px-6 lg:px-8" />
        <div className="flex flex-wrap md:gap-8 text-white px-4 sm:px-6 lg:px-8 py-5">
          <p>© 2023. All rights reserved.</p>
          <p className="underline underline-offset-4">Terms of Service | Privacy Policy</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
