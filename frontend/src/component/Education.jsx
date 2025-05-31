import React, { useContext, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';
import { PortfolioContext } from '../context/PortfolioContext';

function Education() {
  const navigate = useNavigate();

  const { formData, setFormData } = useContext(PortfolioContext);
  const [loading, setloading] = useState(false)

  //- Education Handlers -----
  const handleEducationChange = (index, field, value) => {
    const updated = [...formData.education];
    updated[index][field] = value;
    setFormData(prev => ({ ...prev, education: updated }));
  };

  const addEducation = () => {
    setFormData(prev => ({
      ...prev,
      education: [
        ...prev.education,
        { institution: '', degree: '', grade: '', duration: '' },
      ]
    }));
  };

  const removeEducation = (index) => {
    const updated = [...formData.education];
    updated.splice(index, 1);
    setFormData(prev => ({ ...prev, education: updated }));
  };

  // ----- Experience Handlers -----
  const handleExperienceChange = (index, field, value) => {
    const updated = [...formData.experience];
    updated[index][field] = value;
    setFormData(prev => ({ ...prev, experience: updated }));
  };

  const addExperience = () => {
    setFormData(prev => ({
      ...prev,
      experience: [
        ...prev.experience,
        { companyName: '', duration: '', description: '' },
      ]
    }));
  };

  const removeExperience = (index) => {
    const updated = [...formData.experience];
    updated.splice(index, 1);
    setFormData(prev => ({ ...prev, experience: updated }));
  };

  const handleSubmit = async () => {
    try {
      setloading(true)
      const response = await axios.post('https://portfolio-maker-nnlv.onrender.com/api/create', formData);
      console.log('✅ Portfolio saved successfully:', response.data);

      const id = response.data.portfolio._id
      navigate(`/${id}`)
    } catch (error) {
      if (error.response) {
        console.error('❌ Error saving portfolio:', error.response.data.message);
        window.alert(`❌ Error saving portfolio:', ${error.response.data.message}`)
      } else {
        console.error('❌ Network error:', error.message);
        window.alert(`❌ Network error:', ${error.message}`)
      }
    }
  };

  return (
    <div className="flex mb-2 min-w-screen justify-center items-center">
      <div className="max-w-11/12 w-full p-4 border rounded shadow-sm">
        <h1 className="text-xl font-semibold mb-4">Education & Experience</h1>

        {/* Education Section */}
        <h2 className="text-lg font-semibold mb-2">Education</h2>
        {formData.education.map((edu, index) => (
          <div key={index} className="border p-4 rounded mb-4 space-y-2">
            <input
              type="text"
              placeholder="Institution"
              value={edu.institution}
              onChange={(e) => handleEducationChange(index, 'institution', e.target.value)}
              className="w-full p-2 border rounded"
            />
            <input
              type="text"
              placeholder="Degree"
              value={edu.degree}
              onChange={(e) => handleEducationChange(index, 'degree', e.target.value)}
              className="w-full p-2 border rounded"
            />
            <input
              type="text"
              placeholder="Grade (optional)"
              value={edu.grade}
              onChange={(e) => handleEducationChange(index, 'grade', e.target.value)}
              className="w-full p-2 border rounded"
            />
            <input
              type="text"
              placeholder="Duration (e.g. 2020 - 2024)"
              value={edu.duration}
              onChange={(e) => handleEducationChange(index, 'duration', e.target.value)}
              className="w-full p-2 border rounded"
            />
            <button
              type="button"
              onClick={() => removeEducation(index)}
              className="px-4 py-1 bg-red-500 text-white rounded"
            >
              Remove Education
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={addEducation}
          className="mb-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          + Add Education
        </button>

        {/* Experience Section */}
        <h2 className="text-lg font-semibold mb-2">Experience</h2>
        {formData.experience.map((exp, index) => (
          <div key={index} className="border p-4 rounded mb-4 space-y-2">
            <input
              type="text"
              placeholder="Company Name | Job Role"
              value={exp.companyName}
              onChange={(e) => handleExperienceChange(index, 'companyName', e.target.value)}
              className="w-full p-2 border rounded"
            />
            <input
              type="text"
              placeholder="Duration (e.g. Jan 2022 - Present)"
              value={exp.duration}
              onChange={(e) => handleExperienceChange(index, 'duration', e.target.value)}
              className="w-full p-2 border rounded"
            />
            <textarea
              placeholder="Job Description"
              value={exp.description}
              onChange={(e) => handleExperienceChange(index, 'description', e.target.value)}
              className="w-full p-2 border rounded h-24"
            />
            <button
              type="button"
              onClick={() => removeExperience(index)}
              className="px-4 py-1 bg-red-500 text-white rounded"
            >
              Remove Experience
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={addExperience}
          className="mb-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          + Add Experience
        </button>
        <br />
        <button
          type='submit'
          onClick={handleSubmit}
          className="px-4 mb-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
        >
          submit
        </button>
        <br />
        {loading ? (<div  className='text-black'>loading...</div>) : (<div></div>)}
      </div>
    </div>
  );
}

export default Education;
