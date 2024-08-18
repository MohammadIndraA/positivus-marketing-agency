import React from "react";

const FooterContact = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row gap-8 px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex-1 space-y-4">
          <button className="bg-primary text-black px-6 py-2 rounded-md font-medium">Contack Use</button>
          <div className="text-white space-y-2">
            <p>
              <strong>Email:</strong> contackini@example.com
            </p>
            <p>
              <strong>Phone:</strong> +1 (555) 123-4567
            </p>
            <p>
              <strong>Address:</strong> 123 Main St, Anytown USA
            </p>
          </div>
        </div>

        <div className="flex-1 bg-[#292A32] p-8 rounded-md justify-center items-center">
          <form className="flex flex-col gap-4 md:flex-row items-center justify-center h-20 ">
            <input type="Email" placeholder="Enter your email" className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary" />
            <button className="bg-primary text-black px-6 py-2.5 rounded-md font-medium">Contact</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FooterContact;
