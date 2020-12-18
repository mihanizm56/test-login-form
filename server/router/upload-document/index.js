const express = require('express');
const {
  uploadDocumentController,
} = require('../../controllers/upload-document');

const uploadDocumentRouter = express.Router();

uploadDocumentRouter.post('/', uploadDocumentController);

module.exports.uploadDocumentRouter = uploadDocumentRouter;
