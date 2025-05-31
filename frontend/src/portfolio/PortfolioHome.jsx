import React, { useContext, useEffect } from 'react'
import axios from 'axios'
import { Router, Routes, Route, useParams } from 'react-router'
import { PortfolioContext } from '../context/PortfolioContext';
import BackgroundImage from './component/BackgroundImage';
import Navbar from './component/Navbar';
import Introduction from './component/Introduction';
import SkillsAndProject from './component/SkillsAndProject'
import EducationAndExperience from './component/EducationAndExperience'


function PortfolioHome() {
  const { id } = useParams();
  const { setPortfolioData } = useContext(PortfolioContext);

  useEffect(() => {
    const fetchPortfolio = async () => {
      try {
        const res = await axios.get(`https://portfolio-maker-nnlv.onrender.com/api/${id}`);
        console.log(res.data);
        setPortfolioData(res.data);
      } catch (error) {
        console.error('Failed to fetch portfolio:', error);
        window.alert(`Failed to fetch portfolio:${error}`)
      }
    };

    fetchPortfolio();
  }, [id, setPortfolioData]);
  return (
    <BackgroundImage>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Introduction />} />
          <Route path="/skills&projects" element={<SkillsAndProject />} />
          <Route path="/education&experience" element={<EducationAndExperience />} />
        </Routes>
      </div>
    </BackgroundImage>
  )
}

export default PortfolioHome