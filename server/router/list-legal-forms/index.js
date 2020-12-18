const express = require('express');
const {
  listLegalFormsController,
} = require('../../controllers/list-legal-forms');

const listLegalFormsRouter = express.Router();

listLegalFormsRouter.post('/', listLegalFormsController);

module.exports.listLegalFormsRouter = listLegalFormsRouter;
