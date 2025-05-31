import React, { useContext } from 'react';
import { PortfolioContext } from '../../context/PortfolioContext';

function EducationAndExperience() {
  const { portfolioData } = useContext(PortfolioContext);

  if (!portfolioData) {
    return <div className="text-white text-center mt-10 text-xl">Loading...</div>;
  }

  const {
    education = [],
    experience = []
  } = portfolioData;

  return (
    <div className="flex flex-col px-6 sm:px-12 py-10  bg-transparent min-w-screen h-screen overflow-y-auto scrollbar-hide">
      {/* Experience Section */}
      <div className="mb-12">
        <h2 className="text-4xl font-extrabold text-white mb-6 border-b-4 border-pink-500 inline-block">Experience</h2>
        {experience.length > 0 ? (
          <div className="flex flex-col gap-6 mt-4">
            {experience.map((exp, idx) => (
              <div key={idx} className="border border-pink-500 rounded-lg p-6 shadow-md">
                <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
                <p className="text-gray-300">{exp.company}</p>
                <p className="text-gray-400 text-sm italic">{exp.duration}</p>
                <p className="text-gray-200 mt-2">{exp.description}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-300">No experience added yet.</p>
        )}
      </div>

      {/* Education Section */}
      <div>
        <h2 className="text-4xl font-extrabold text-white mb-6 border-b-4 border-pink-500 inline-block">Education</h2>
        {education.length > 0 ? (
          <div className="flex flex-col gap-6 mt-4">
            {education.map((edu, idx) => (
              <div key={idx} className="border border-pink-500 rounded-lg p-6 shadow-md">
                <h3 className="text-2xl font-bold text-white">{edu.degree}</h3>
                <p className="text-gray-300">{edu.institution}</p>
                <p className="text-gray-400 text-sm italic">{edu.duration}</p>
                <p className="text-gray-200 mt-2">{edu.description}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-300">No education details added yet.</p>
        )}
      </div>


    </div>
  );
}

export default EducationAndExperience;
