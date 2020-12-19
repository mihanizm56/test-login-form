const express = require('express');
const { loginRouter } = require('./login');

const rootRouter = express.Router();

rootRouter.use('/login', loginRouter);

module.exports.rootRouter = rootRouter;
