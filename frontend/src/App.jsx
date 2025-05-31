import React from 'react'
import { Routes, Route } from 'react-router'
import Home from './component/Home'
import Links from './component/Links'
import BasicInfo from './component/BasicInfo';
import Skills from './component/Skills';
import Education from './component/Education'
import PortfolioHome from './portfolio/PortfolioHome';


function App() {
  return (
    <Routes>
      <Route path="/" element={<><Home /> <BasicInfo /></>} />
      <Route path="/links" element={<><Home /> <Links /></>} />
      <Route path="/skills" element={<><Home /> <Skills /></>} />
      <Route path="/education" element={<><Home /> <Education /></>} />
      <Route path="/:id/*" element={<PortfolioHome />} />
    </Routes>
  )
}

export default App