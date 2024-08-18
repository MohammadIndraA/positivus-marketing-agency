import React from "react";
import Logo1 from "../assets/logos/amazon.png";
import Logo2 from "../assets/logos/dribble.png";
import Logo3 from "../assets/logos/hubspot.png";
import Logo4 from "../assets/logos/netflix.png";
import Logo5 from "../assets/logos/notion.png";
import Logo6 from "../assets/logos/zoom.png";

const LogoCaraousel = () => {
  return (
    <div className="pt-24 overflow-hidden">
      <div className="flex justify-between space-x-12 items-center animate-marquee">
        <img src={Logo1} alt="logo1" className="h-12" />
        <img src={Logo2} alt="logo2" className="h-12" />
        <img src={Logo3} alt="logo3" className="h-12" />
        <img src={Logo4} alt="logo4" className="h-12" />
        <img src={Logo5} alt="logo5" className="h-12" />
        <img src={Logo6} alt="logo6" className="h-12" />
      </div>
    </div>
  );
};

export default LogoCaraousel;
