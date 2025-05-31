const Portfolio = require("../models/portfolio.model")

const createPortfolio = async (req, res) => {
    try {
        const portfolioData = req.body
        if (!portfolioData.name || !portfolioData.email || !portfolioData.bio) {
            return res.status(400).json("name , email , bio are required")
        }

        const portfolio = await Portfolio.create(portfolioData)
        if (portfolio) {
            return res.status(200).json({ message: "portfolio created successfully", portfolio })
        } else {
            return res.status(400).json({ message: "something went wrong" })
        }

    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "internal server error" })
    }
}
const getPortfolio = async (req, res) => {
    try {
        const id = req.params.id;

        const portfolio = await Portfolio.findById(id.toString())
        if (!portfolio) {
            return res.status(404).json({ message: 'Portfolio not found' });
        }

        return res.status(200).json(portfolio);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "internal server error" })
    }
}

module.exports = {
    createPortfolio,
    getPortfolio
}