const express = require('express');
const { loadInnInfoController } = require('../../controllers/load-inn-info');

const loadInnInfoRouter = express.Router();

loadInnInfoRouter.post('/', loadInnInfoController);

module.exports.loadInnInfoRouter = loadInnInfoRouter;
