const mongoose = require('mongoose')

const portfolioSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    bio: {
        type: String,
        required: true
    },
    socials: {
        linkedin: { type: String },
        twitter: { type: String },
        github: { type: String },
    },
    links: [
        {
            name: { type: String},
            url: { type: String},
        }
    ],
    skills: [
        {
            type: String,
        }
    ],
    experience: [
        {
            companyName: { type: String,},
            duration: { type: String,},
            description: { type: String,},
        }
    ],
    projects: [
        {
            projectName: { type: String, },
            description: { type: String,},
            githubLink: { type: String },
            liveLink: { type: String },
            techStack: [{ type: String }],
        }
    ],
    education: [
        {
            institution: { type: String },
            degree: { type: String},
            grade: { type: String },
            duration: { type: String},
        }
    ],
})

const Portfolio = mongoose.model('Portfolio', portfolioSchema);

module.exports = Portfolio