import React, { useContext } from 'react';
import { PortfolioContext } from '../../context/PortfolioContext';

function Introduction() {
  const { portfolioData } = useContext(PortfolioContext);

  if (!portfolioData) {
    return <div className="text-white text-center mt-10">Loading...</div>;
  }

  const {
    name,
    bio,
    email,
    socials = {},
    links = []
  } = portfolioData;

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="text-center fixed">
        <h3 className="text-lg md:text-3xl text-gray-100">Hi, I am</h3>
        <h1 className="text-4xl mb-3 md:text-8xl font-bold text-white">{name}</h1>
        <h3 className="text-lg md:text-4xl text-gray-100">{bio}</h3>
      </div>

      {/* Links Section */}
      <div className="flex flex-wrap justify-center fixed mt-56 gap-6">
        {/* Email */}
        {email && (
          <a
            href={`mailto:${email}`}
            className="text-yellow-400 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Email
          </a>
        )}

        {/* Socials */}
        {socials.linkedin && (
          <a
            href={socials.linkedin}
            className="text-blue-400 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        )}
        {socials.github && (
          <a
            href={socials.github}
            className="text-blue-400 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        )}
        {socials.twitter && (
          <a
            href={socials.twitter}
            className="text-blue-400 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
        )} 

        {/* Custom Links */}
        {links.map((link, idx) => (
          <a
            key={idx}
            href={link.url}
            className="text-green-400 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.name}
          </a>
        ))}
      </div>
    </div>
  );
}

export default Introduction;
