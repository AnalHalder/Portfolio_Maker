import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router';
import { PortfolioContext } from '../../context/PortfolioContext';


function Navbar() {
  const { portfolioData } = useContext(PortfolioContext);
  const location = useLocation();
  const id = portfolioData?._id; 
  if(!portfolioData) return null;

  return (
    <div className="sticky top-0 z-50 w-full">
      <div className="flex justify-end space-x-4 py-4 px-4">
        <Link
          to={`/${id}`}
          className={`px-4 py-2 rounded-full text-sm md:text-base font-medium transition duration-300 ${
            location.pathname === `/${id}` ? 'bg-pink-700 text-white' : 'bg-gray-700 text-white hover:bg-gray-800'
          }`}
        >
          Home
        </Link>
        <Link
          to={`/${id}/skills&projects`}
          className={`px-4 py-2 rounded-full text-sm md:text-base font-medium transition duration-300 ${
            location.pathname === `/${id}/skills&projects` ? 'bg-pink-700 text-white' : 'bg-gray-700 text-white hover:bg-gray-800'
          }`}
        >
          Skills & Projects
        </Link>
        <Link
          to={`/${id}/education&experience`}
          className={`px-4 py-2 rounded-full text-sm md:text-base font-medium transition duration-300 ${
            location.pathname === `/${id}/education&experience` ? 'bg-pink-700 text-white' :  'bg-gray-700 text-white hover:bg-gray-800'
          }`}
        >
          Education & Experience
        </Link>
      </div>
    </div>
  );
}

export default Navbar;