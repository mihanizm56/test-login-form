const express = require('express');
const { downloadContractOfferRouter } = require('./download-offer');
const { countriesListRouter } = require('./countries');
const { registerSupplierRouter } = require('./register-supplier');
const { listLegalFormsRouter } = require('./list-legal-forms');
const { i18nRouter } = require('./i18n');
const { loadInnInfoRouter } = require('./load-inn-info');
const { uploadDocumentRouter } = require('./upload-document');

const rootRouter = express.Router();

rootRouter.use('/downloadContractOffer', downloadContractOfferRouter);
rootRouter.use('/listCountries', countriesListRouter);
rootRouter.use('/register', registerSupplierRouter);
rootRouter.use('/listLegalForms', listLegalFormsRouter);
rootRouter.use('/loadInnInfo', loadInnInfoRouter);
rootRouter.use('/uploadDocument', uploadDocumentRouter);
rootRouter.use('/I18N', i18nRouter);

module.exports.rootRouter = rootRouter;
