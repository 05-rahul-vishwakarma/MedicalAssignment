import Image from "next/image";
import img from "@/public/hero.svg"

// components/Hero.js
const Hero = () => {
  return (
    <section className="text-center py-12  ">
      <div className="container mx-auto px-4 flex flex-col items-center justify-center">
        <h1 className="w-[60%] text-4xl font-bold mb-4 text-[#033597] drop-shadow ">
          OET Preparation for <span className="text-[#02A995] " >Healthcare</span> Professionals.
        </h1>
        <p className="text-lg  font-medium mb-6 text-[#606060] ">Find The Best course for healthcare professional Across the world</p>
        <button className="bg-[#79AFF6] text-white px-6 py-3 rounded-md">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Hero;
