import React, { useContext } from 'react';
import { PortfolioContext } from '../context/PortfolioContext';
import { useNavigate } from 'react-router';


function Skills() {
  const { formData, setFormData } = useContext(PortfolioContext);
  const navigate = useNavigate();
  // Add/remove skills
  const handleSkillChange = (index, value) => {
    const updated = [...formData.skills];
    updated[index] = value;
    setFormData(prev => ({ ...prev, skills: updated }));
  };

  const addSkill = () => {
    setFormData(prev => ({ ...prev, skills: [...prev.skills, ''] }));
  };

  const removeSkill = (index) => {
    const updated = [...formData.skills];
    updated.splice(index, 1);
    setFormData(prev => ({ ...prev, skills: updated }));
  };

  // Projects logic
  const handleProjectChange = (index, field, value) => {
    const updated = [...formData.projects];
    updated[index][field] = value;
    setFormData(prev => ({ ...prev, projects: updated }));
  };

  const addProject = () => {
    setFormData(prev => ({
      ...prev,
      projects: [
        ...prev.projects,
        {
          projectName: '',
          description: '',
          githubLink: '',
          liveLink: '',
          techStack: [],
        },
      ],
    }));
  };

  const removeProject = (index) => {
    const updated = [...formData.projects];
    updated.splice(index, 1);
    setFormData(prev => ({ ...prev, projects: updated }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    navigate('/education');
  };

  return (
    <div className="flex mb-2 min-w-screen justify-center items-center">
      <div className="max-w-11/12 w-full p-4 border rounded shadow-sm">
        <h1 className="text-xl font-semibold mb-4">Skills & Projects</h1>

        {/* Skills Section */}
        <h2 className="text-lg font-semibold mb-2">Skills</h2>
        {formData.skills.map((skill, index) => (
          <div key={index} className="flex items-center gap-2 mb-2">
            <input
              type="text"
              value={skill}
              onChange={(e) => handleSkillChange(index, e.target.value)}
              className="flex-1 p-2 border rounded"
              placeholder="Enter a skill"
            />
            <button
              type="button"
              onClick={() => removeSkill(index)}
              className="px-3 py-1 bg-red-500 text-white rounded"
            >
              ✕
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={addSkill}
          className="mb-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          + Add Skill
        </button>

        {/* Projects Section */}
        <h2 className="text-lg font-semibold mb-2">Projects</h2>
        {formData.projects.map((project, index) => (
          <div key={index} className="border p-4 rounded mb-4 space-y-2">
            <input
              type="text"
              placeholder="Project Name"
              value={project.projectName}
              onChange={(e) => handleProjectChange(index, 'projectName', e.target.value)}
              className="w-full p-2 border rounded"
            />
            <textarea
              placeholder="Description"
              value={project.description}
              onChange={(e) => handleProjectChange(index, 'description', e.target.value)}
              className="w-full p-2 border rounded h-24"
            />
            <input
              type="url"
              placeholder="GitHub Link"
              value={project.githubLink}
              onChange={(e) => handleProjectChange(index, 'githubLink', e.target.value)}
              className="w-full p-2 border rounded"
            />
            <input
              type="url"
              placeholder="Live Link"
              value={project.liveLink}
              onChange={(e) => handleProjectChange(index, 'liveLink', e.target.value)}
              className="w-full p-2 border rounded"
            />
            <input
              type="text"
              placeholder="Tech Stack (comma separated)"
              value={project.techStack.join(', ')}
              onChange={(e) =>
                handleProjectChange(index, 'techStack', e.target.value.split(',').map(s => s.trim()))
              }
              className="w-full p-2 border rounded"
            />
            <button
              type="button"
              onClick={() => removeProject(index)}
              className="mt-2 px-4 py-1 bg-red-500 text-white rounded"
            >
              Remove Project
            </button>
          </div>
        ))}

        <button
          type="button"
          onClick={addProject}
          className="mb-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          + Add Project
        </button>
        <br />
        <button
          type='button'
          onClick={handleSubmit}
          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
        >
          Next
        </button>
      </div>
    </div>

  );
}

export default Skills;
