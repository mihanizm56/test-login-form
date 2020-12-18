const express = require('express');
const { countriesController } = require('../../controllers/countries');

const countriesListRouter = express.Router();

countriesListRouter.post('/', countriesController);

module.exports.countriesListRouter = countriesListRouter;
