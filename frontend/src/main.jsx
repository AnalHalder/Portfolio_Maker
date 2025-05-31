import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from "react-router";
import {PortfolioContextProvider} from './context/PortfolioContext.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <PortfolioContextProvider>
        <App />
      </PortfolioContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
)