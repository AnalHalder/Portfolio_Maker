require('dotenv').config()
const cors = require('cors')
const mongoose = require('mongoose')
const express = require('express');
const portfolioRoute = require('./routes/portfolio.route');

const app = express();
app.use(express.json())
app.use(cors());

const connectDB = async () => {
    mongoose.connect(process.env.MONGO_URL)
        .then(console.log('mongodb connected'))
        .catch((error) => console.log(error))
}
connectDB()

app.use('/api', portfolioRoute)

const PORT = process.env.PORT
app.listen(PORT, () => console.log(`app is running on ${PORT}`))