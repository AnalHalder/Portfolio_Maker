import React, { useContext } from 'react';
import { PortfolioContext } from '../../context/PortfolioContext';

function SkillsAndProject() {
  const { portfolioData } = useContext(PortfolioContext);

  if (!portfolioData) {
    return <div className="text-white text-center mt-10 text-xl">Loading...</div>;
  }

  const {
    socials = {},
    projects = [],
    skills = []
  } = portfolioData;

  return (
    <div className="flex flex-col px-6 sm:px-12 py-10 bg-transparent min-w-screen h-screen overflow-y-auto scrollbar-hide">
      {/* Skills Section */}
      <div className="mb-12">
        <h2 className="text-4xl font-extrabold text-white mb-6 border-b-4 border-pink-500 inline-block">Skills</h2>
        {skills.length === 0 ? (
          <p className="text-gray-400 text-lg mt-4">No skills added yet</p>
        ) : (
          <div className="flex flex-wrap gap-4 mt-4">
            {skills.map(skill => (
              <span
                key={skill}
                className="backdrop-blur-sm bg-transparent border border-pink-500 text-white font-medium px-4 py-2 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
              >
                {skill}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Projects Section */}
      <h2 className="text-4xl font-extrabold text-white mb-8 border-b-4 border-pink-500 inline-block">My Projects</h2>
      {projects.length === 0 ? (
        <p className="text-gray-400 text-lg mb-4">No projects added yet</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-transparent backdrop-blur-sm border border-pink-500 rounded-2xl p-6 shadow-xl transition-transform transform hover:scale-105"
            >
              <h3 className="text-2xl font-bold text-white mb-3">{project.projectName}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>

              {project.techStack?.length > 0 && (
                <div className="mb-4">
                  <h4 className="text-pink-400 font-bold mb-2">Tech Stack:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, idx) => (
                      <span key={idx} className="border border-pink-500 text-white px-3 py-1 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex gap-4 mt-4">
                <button
                  onClick={() => window.open(project.githubLink)}
                  className="bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-md font-semibold"
                >
                  Code
                </button>
                <button
                  onClick={() => window.open(project.liveLink)}
                  className="bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-md font-semibold"
                >
                  Demo
                </button>
              </div>
            </div>
          ))}

          {/* GitHub Card */}
          <div
            className="backdrop-blur-sm border border-pink-500 rounded-2xl p-6 shadow-xl transform hover:scale-105 transition-transform cursor-pointer"
            onClick={() => window.open(`${socials.github}`)}
          >
            <h3 className="text-2xl font-bold text-white mb-3">GitHub</h3>
            <p className="text-gray-300 mb-4">Check out more of my projects ➡️</p>
            <button className="bg-pink-600 hover:bg-pink-700 text-white font-semibold py-2 px-4 rounded-md">
              Visit Profile
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default SkillsAndProject;
