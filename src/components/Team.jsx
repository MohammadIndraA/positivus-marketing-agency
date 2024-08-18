import React, { useState } from "react";
import teamData from "../utils/teamData";
import { FaLinkedinIn } from "react-icons/fa";

const Team = () => {
  const [visibleTeam, setVisibleTeam] = useState(6);

  const handleShowMore = () => {
    setVisibleTeam((prevCount) => prevCount + 3);
  };

  return (
    <section className="bg-white pt-24 pb-16" id="team">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* headline and description */}
        <div className="flex flex-col md:flex-row gap-4 mb-12">
          <div className="flex-shrink-0 bg-primary text-black py-2 px-16 rounded-md">
            <h2 className="text-2xl font-bold">Team</h2>
          </div>
          <div className="md:w-2/3">
            <p className="text-secondary md:w-2/3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque quia, quidem atque, quibusdam voluptatem, quas explicabo mollitia</p>
          </div>
        </div>

        {/*  team card*/}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamData.slice(0, visibleTeam).map((member, index) => (
            <div className="bg-white hover:bg-primary rounded-lg border hover:border-primary shadow-lg p-6 cursor-pointer transition-all duration-300" key={index}>
              <div className="relative mb-4 ">
                <div className="flex flex-col justify-start items-start gap-4 sm:flex-row sm:items-end">
                  <img src={member.image} alt="" className="w-32 h-32 rounded-full object-cover " />
                  <div className="">
                    <h3 className="text-xl font-semibold">{member.name}</h3>
                    <p className="text-secondary">{member.position}</p>
                  </div>
                  <a href="#" className="absolute top-0 right-0 bg-black hover:bg-primary hover:text-black text-white p-2 rounded-full transition-all duration-300">
                    <FaLinkedinIn className="size-5" />
                  </a>
                </div>
              </div>
              <div className="px-2">
                <hr className="border-secondary my-4" />
                <p className="text-black">{member.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* btn  */}
        {visibleTeam < teamData.length && (
          <div className="flex justify-end mt-8 w-full">
            <button onClick={handleShowMore} className="inline-block bg-black text-white px-6 py-3 rounded-md font-semibold hover:bg-primary hover:text-black transition-all duration-300">
              See All Team
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Team;
