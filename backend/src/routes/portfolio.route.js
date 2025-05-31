const express =  require('express');
const { createPortfolio, getPortfolio } = require('../controller/portfolio.controller')

const route =  express.Router();

route.post('/create',createPortfolio)
route.get('/:id',getPortfolio)
 
module.exports = route