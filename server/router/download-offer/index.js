const express = require('express');
const {
  downloadContractOfferController,
} = require('../../controllers/download-offer');

const downloadContractOfferRouter = express.Router();

downloadContractOfferRouter.post('/', downloadContractOfferController);

module.exports.downloadContractOfferRouter = downloadContractOfferRouter;
