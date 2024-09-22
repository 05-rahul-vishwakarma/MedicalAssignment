/* eslint-disable @next/next/no-img-element */
// components/Testimonials.js

"use client";
import CarouselCard from "./Carousel";


const Testimonials = () => {
  return (
    <>
      <TestimonialSection />
    </>
  );
};

export default Testimonials;

const TestimonialSection = () => {
  return (
    <div className="bg-blue-100 flex justify-center py-10  ">
      <div className="md:flex w-11/12 lg:w-4/5 bg-white shadow-lg rounded-lg p-6 md:p-10 relative ">
        {/* Left Section */}
        <div className="flex-1">
          <h2 className="md:text-4xl font-bold text-gray-800 text-2xl ">
            What <span className="text-blue-500">Our Student&lsquo;s</span> Saying About Us
          </h2>
          <p className="mt-4 text-gray-500 text-sm md:text-lg  ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem velit viverra amet faucibus.
          </p>

          {/* Reviews */}
          <div className="flex items-center mt-6 space-x-2">
            {/* Avatar Images */}
            <div className="flex -space-x-3">
              <img
                className="w-10 h-10 rounded-full border-2 border-white"
                src="/one.svg"
                alt="avatar1"
              />
              <img
                className="w-10 h-10 rounded-full border-2 border-white"
                src="/two.png"
                alt="avatar2"
              />
              <img
                className="w-10 h-10 rounded-full border-2 border-white"
                src="/three.svg"
                alt="avatar3"
              />
              <img
                className="w-10 h-10 rounded-full border-2 border-white"
                src="/four.svg"
                alt="avatar4"
              />
            </div>
            <p className="text-gray-500 text-sm ml-4">100+ Reviews</p>
          </div>
        </div>

        {/* Testimonials Scroll Section */}
        <div className="md:w-[50%] mt-4 " >
              <CarouselCard  />
        </div>


      </div>
    </div>
  );
};
