import React, { createContext, useState } from 'react';

const PortfolioContext = createContext();

const PortfolioContextProvider = (props) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        bio: '',
        socials: {
            linkedin: '',
            twitter: '',
            github: '',
        },
        links: [],
        skills: [],
        experience: [],
        projects: [],
        education: []
    });
    const [portfolioData, setPortfolioData ] = useState()

    const contextValue = {
        formData,
        setFormData,
        portfolioData,
        setPortfolioData
    }

    return (
        <PortfolioContext.Provider value={contextValue}>
            {props.children}
        </PortfolioContext.Provider>
    )
}

export { PortfolioContext, PortfolioContextProvider }
