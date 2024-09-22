"use client"
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Sample FAQ Data
const faqData = [
  {
    id: 1,
    question: "What Is The Duration Of Course?",
    answer: "Our office hours vary by location, but typically we are open Monday through Friday from 8:00 AM to 5:00 PM. Some locations may offer extended hours or weekend appointments."
  },
  {
    id: 2,
    question: "How Can I Enroll To Course?",
    answer: "You can enroll online by visiting our course catalog, or in person at any of our locations."
  },
  {
    id: 3,
    question: "Do You Charge Fees?",
    answer: "Yes, course fees vary depending on the program. Check our website or contact us for more details."
  },
  {
    id: 4,
    question: "What Is The Minimum Score Needed To Pass?",
    answer: "A minimum passing score of 50% is required in most courses."
  },
  {
    id: 5,
    question: "Is There Any Compensation?",
    answer: "Compensation is available for eligible students. Please contact the support team for more information."
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="md:w-3/4 mx-auto md:py-8 p-4  ">
      <h1 className="text-xl md:text-3xl font-bold text-blue-600 mb-6">Frequently Asked Questions</h1>
      <div className="space-y-4">
        {faqData.map((faq, index) => (
          <div
            key={faq.id}
            style={{ boxShadow: "0 4px 4px #00000036" }}
            className="bg-gradient-to-b from-[#63fdebbe] to-[#3b978c] rounded-lg "
          >
            <div
              onClick={() => toggleFAQ(index)}
              className="flex justify-between items-center cursor-pointer p-4"
            >
              <h2 className="text-sm md:text-lg text-[#020043] font-semibold">{faq.question}</h2>
              <span className={`transform transition-transform ${activeIndex === index ? 'rotate-180' : ''}`}>
                &#9660;
              </span>
            </div>
            <AnimatePresence>
              {activeIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="px-4 pb-4"
                >
                  <p className="text-gray-700 max-md:text-sm ">{faq.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
