/* eslint-disable @next/next/no-img-element */
import React from 'react';

const data = [
    {
      "courseId": 1,
      "title": "OET Writing Mastery",
      "cost": 350,
      "image": "/courses.png",
      "summary": "Enhance your writing skills for the OET exam with detailed feedback and practice on profession-specific writing tasks."
    },
    {
      "courseId": 2,
      "title": "OET Speaking Preparation",
      "cost": 300,
      "image": "/popularCourses.png",
      "summary": "Prepare for the OET speaking test with one-on-one role plays and personalized coaching to improve fluency and confidence."
    },
    {
      "courseId": 3,
      "title": "OET Listening & Reading Combo",
      "cost": 400,
      "image": "/courseCard.png",
      "summary": "Boost your OET listening and reading skills with guided practice on healthcare-related audio and written materials."
    },
    {
      "courseId": 4,
      "title": "OET Intensive Course",
      "cost": 600,
      "image": "/courses.png",
      "summary": "A comprehensive OET course covering all four skills (Listening, Reading, Writing, and Speaking) with mock tests and full support."
    },
    {
      "courseId": 5,
      "title": "OET Exam Practice Tests",
      "cost": 250,
      "image": "/popularCourses.png",
      "summary": "Take timed OET practice tests and receive detailed performance reports to understand your strengths and areas for improvement."
    },
    {
      "courseId": 6,
      "title": "OET Grammar and Vocabulary",
      "cost": 200,
      "image": "/courseCard.png",
      "summary": "Strengthen your grammar and medical vocabulary to excel in the OET exam with profession-specific exercises and tips."
    },
  ]
  


const CoachingPage = () => {
    return (
        <div className='bg-gray-50 py-5 '>
            <div className="bg-gray-50 py-8 px-4 md:px-12 lg:px-20">
                {/* Hero Section */}
                <section className="flex flex-col md:flex-row items-center mb-12">
                    {/* Text Content */}
                    <div className="md:w-1/2 text-center md:text-left">
                        <h1 className="text-blue-600 text-2xl md:text-3xl font-bold mb-4">
                            IMG MATCHING: Interview Coaching & Personal Statements
                        </h1>
                        <p className="text-gray-600 mb-6">
                            Excelling in the USMLE Matching is crucial for International medical graduates (IMGs)
                            seeking to practice medicine in the United States. It is a highly competitive process.
                        </p>
                        <button className="bg-blue-600 text-white px-6 py-3 my-3 rounded-md shadow-lg hover:bg-blue-700 transition duration-300">
                            Book A Coach
                        </button>
                    </div>

                    {/* Image */}
                    <div className="md:w-1/2 h-[15rem] ">
                        <img
                            src="/coaching.png" // Replace with actual image source
                            alt="Coach Image"
                            className="rounded-lg shadow-md w-full h-full object-contain "
                        />
                    </div>
                </section>

                {/* Expertise Section */}
                <section className="text-center mb-12">
                    <div className="flex justify-center mb-6">
                        <img
                            src="https://via.placeholder.com/100" // Replace with actual globe image source
                            alt="Globe Image"
                            className="w-24 h-24"
                        />
                    </div>
                    <h2 className="text-green-600 text-2xl font-bold mb-4">
                        EXPERTISE <span className="text-gray-800">With A Qualified Faculty</span>
                    </h2>
                    <p className="text-gray-600 md:text-lg mb-6 max-w-3xl mx-auto">
                        Founded and led by a medical doctor with healthcare professional tutors, our &ldquo;hands-on&ldquo; experience helps
                        you achieve targeted relevant and practical communication training for your student and career needs.
                    </p>
                </section>

                {/* Language Precision Section */}
                <section className="text-center">
                    <h3 className="text-blue-600 text-xl font-bold mb-4">
                        LANGUAGE PRECISION
                    </h3>
                    <p className="text-gray-600 md:text-lg max-w-3xl mx-auto mb-6">
                        Tailored training for healthcare institutions. Online or blended learning courses that are effective, cost-efficient,
                        and flexible for individuals or groups. From beginner to advanced English language and OET preparation, BPME courses
                        focus on improving communication skills for best-practice and best patient care outcomes.
                    </p>
                </section>
            </div>
            <>
                <h2 className="text-green-600 text-2xl font-bold mb-4 text-center ">
                    Popular <span className="text-gray-800 text-center ">Courses</span>
                </h2>
                <div className='block md:grid grid-cols-3 w-[90%] mx-auto ' >
                    {data?.map((data, i) => (
                        <CourseBox key={i} data={data} />
                    ))}
                </div>
            </>
        </div>
    );
};

export default CoachingPage;

const CourseBox = ({data}) => {
    return (
        <div className='md:w-[16rem] mx-auto mb-4 lg:w-[18rem] pb-3 rounded-lg bg-white  ' style={{ boxShadow: "0px 3.19px 13.32px 0px #5097C93D" }} >
            <img src={data?.image} alt='' className='rounded-t-lg h-[24vh] w-full object-cover ' />

            <div className='flex justify-between items-center px-3 mt-2 '>
                <span className=' font-[600] text-xs text-blue-500 ' > ₹{data?.cost} </span>
                <span className='text-[#fff] font-medium text-xs bg-[#02A995] px-3 py-1 rounded-full ' >Subject</span>
            </div>

            <h6 className='px-3 mt-2 font-semibold text-sm ' >
               {data?.title}
            </h6>

            <p className='text-xs text-[#323232] font-[300] mt-2 px-3 leading-4 ' >
               {data?.summary}
            </p>

            <div className='flex justify-end px-3 mt-3 ' >
                <button className='flex gap-x-1 items-center text-[.8rem] font-medium py-1  bg-[teal] px-3 font-semibold text-white rounded-md ' >
                    ENROLL NOW 
                </button>
            </div>

        </div>
    )
}
