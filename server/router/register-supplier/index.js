const express = require('express');
const {
  registerSupplierController,
} = require('../../controllers/register-supplier');

const registerSupplierRouter = express.Router();

registerSupplierRouter.post('/', registerSupplierController);

module.exports.registerSupplierRouter = registerSupplierRouter;
