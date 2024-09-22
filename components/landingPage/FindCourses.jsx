"use client";

import React from 'react';
import dynamic from 'next/dynamic';

const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });

const FindCourses = () => {
  return (
    <div className="bg-gray-50 rounded-lg py-4 ">
      <div className="w-[90%] mx-auto flex flex-col md:flex-row items-center">
        {/* Video Section */}
        <div className="md:w-1/2 h-[15rem] mb-6 md:mb-0">
          <ReactPlayer
            className="rounded-lg shadow-md w-full"
            url="https://www.youtube.com/watch?v=FEVdEM2M7cU"
            controls
            width="100%"
            height="100%"
          />
        </div>

        {/* Content Section */}
        <div className="md:w-1/2 text-center md:text-left md:ml-10">
          <h1 className="text-xl md:text-4xl font-bold text-blue-700 mb-4">
            Medical English
          </h1>
          <p className="text-gray-600 md:text-lg mb-6 text-sm">
            Improve your basic and intermediate professional English with structured language
            specifically for doctors, nurses, therapists, and other healthcare professionals.
            Includes language for anatomy, patient diagnosis, and care, conference subjects,
            and everyday small talk. Essential vocabulary, grammar, speaking fluency techniques,
            and listening and reading skills.
          </p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-md shadow-lg hover:bg-blue-700 transition duration-300">
            Find Courses & Trained Tutors
          </button>
        </div>
      </div>
    </div>
  );
};

export default FindCourses;


// RoadmapSuccess.js


