const translate = require('./data.json');

const i18nController = async (req, res) => {
  // eslint-disable-next-line
  console.info('i18nController catch request',req.body);

  res.status(200).json({
    translate,
  });
};

module.exports = {
  i18nController,
};
