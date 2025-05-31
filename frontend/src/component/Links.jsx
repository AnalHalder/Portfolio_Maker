import React, { useContext } from 'react';
import { PortfolioContext } from '../context/PortfolioContext';
import { useNavigate } from 'react-router';

function Links() {
  const { formData, setFormData } = useContext(PortfolioContext);
  const navigate = useNavigate();
  // Handle social input change
  const handleSocialChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      socials: {
        ...prev.socials,
        [name]: value,
      },
    }));
  };

  // Handle custom links change
  const handleLinkChange = (index, field, value) => {
    const updatedLinks = [...formData.links];
    updatedLinks[index][field] = value;
    setFormData(prev => ({ ...prev, links: updatedLinks }));
  };

  // Add a new link
  const addLink = () => {
    setFormData(prev => ({
      ...prev,
      links: [...prev.links, { name: '', url: '' }],
    }));
  };

  // Remove a link
  const removeLink = (index) => {
    const updatedLinks = [...formData.links];
    updatedLinks.splice(index, 1);
    setFormData(prev => ({ ...prev, links: updatedLinks }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    navigate('/skills');
  };

  return (
    <div className="flex  min-w-screen justify-center items-center">
      <div className="max-w-11/12 w-full p-4 border rounded shadow-sm">
        <h1 className="text-xl font-semibold mb-4">Socials & Custom Links</h1>

        {/* Socials */}
        <div className="space-y-3 mb-6">
          <input
            type="url"
            name="linkedin"
            placeholder="LinkedIn URL"
            value={formData.socials.linkedin}
            onChange={handleSocialChange}
            className="w-full p-2 border rounded"
          />
          <input
            type="url"
            name="twitter"
            placeholder="Twitter URL"
            value={formData.socials.twitter}
            onChange={handleSocialChange}
            className="w-full p-2 border rounded"
          />
          <input
            type="url"
            name="github"
            placeholder="GitHub URL"
            value={formData.socials.github}
            onChange={handleSocialChange}
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Custom Links */}
        <h2 className="text-lg font-semibold mb-2">Custom Links</h2>
        {formData.links.map((link, index) => (
          <div key={index} className="flex flex-wrap items-center gap-2 mb-3">
            <input
              type="text"
              placeholder="Link Name"
              value={link.name}
              onChange={(e) => handleLinkChange(index, 'name', e.target.value)}
              className="flex-1 p-2 border rounded"
            />
            <input
              type="url"
              placeholder="URL"
              value={link.url}
              onChange={(e) => handleLinkChange(index, 'url', e.target.value)}
              className="flex-1 p-2 border rounded"
            />
            <button
              type="button"
              onClick={() => removeLink(index)}
              className="px-3 py-1 bg-red-500 text-white rounded"
            >
              ✕
            </button>
          </div>
        ))}

        <button
          type="button"
          onClick={addLink}
          className="mt-2 mb-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          + Add Link
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

export default Links;
