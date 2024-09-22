/* eslint-disable @next/next/no-img-element */
import Image from "next/image";

// components/WhyChoose.js
export default function courses() {
    return (
      <div className="w-[90%] mx-auto my-8 flex flex-col md:flex-row items-center justify-around bg-white mt-8 shadow-lg rounded-lg p-4 ">
        {/* Left Section: Image */}
        <div className="w-full  md:w-[40%]">
          <img
            src="/courses.png" // Replace with your image
            alt="Why Choose This Course"
            width={100}
            height={100}
            className="rounded-lg h-[80%] w-[100%] object-cover "
          />
        </div>
  
        {/* Right Section: Title and Points */}
        <div className="w-full md:w-[60%] md:mt-0 md:pl-3 my-3 ">
          <h2 className="text-xl md:text-4xl font-bold text-blue-600 mb-4">
            Why To Choose This Course?
          </h2>
          <ul className="space-y-2 text-gray-600 max-md:text-sm ">
            <li>✔ Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li>✔ Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li>✔ Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li>✔ Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          </ul>
        </div>
      </div>
    );
  }
  