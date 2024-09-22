// components/Steps.js
import { FaChalkboardTeacher, FaBook, FaClipboardCheck, FaGraduationCap } from 'react-icons/fa';

const Steps = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold mb-4">Your Roadmap to Success</h2>
        <div className="flex justify-center items-center space-x-4">
          {/* Step items */}
          <RoadmapSuccess />
        </div>
      </div>
    </section>
  );
};

export default Steps;


// RoadmapSuccess.js


function RoadmapSuccess() {
  const roadmapSteps = [
    {
      title: 'Understand the Test Format',
      description: 'Familiarize yourself with the different sections of the OET exam.',
      icon: <FaChalkboardTeacher className="text-indigo-500" />,
    },
    {
      title: 'Study the Course Material',
      description: 'Use our comprehensive study material to build your knowledge.',
      icon: <FaBook className="text-green-500" />,
    },
    {
      title: 'Take Mock Tests',
      description: 'Practice regularly with full-length mock tests and evaluate your performance.',
      icon: <FaClipboardCheck className="text-yellow-500" />,
    },
    {
      title: 'Achieve Success',
      description: 'Complete your preparation and achieve the desired score.',
      icon: <FaGraduationCap className="text-blue-500" />,
    },
  ];

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">

        <p className="mt-4 text-lg leading-6 text-gray-600">
          Follow these steps to maximize your preparation and succeed in the OET exam.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {roadmapSteps.map((step, index) => (
          <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-lg flex flex-col items-center">
            <div className="w-16 h-16 flex items-center justify-center mb-4">
              {step.icon}
            </div>
            <h3 className="text-lg font-medium text-gray-900">{step.title}</h3>
            <p className="mt-2 text-base text-gray-600 text-center">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
