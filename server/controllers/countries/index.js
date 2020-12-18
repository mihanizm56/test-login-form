const { countries } = require('./data');

const countriesController = async (req, res) => {
  // eslint-disable-next-line
  console.info('countriesController catch request');

  const { id } = req.body;

  setTimeout(() => {
    res.status(200).json({
      jsonrpc: '2.0',
      result: {
        countries,
      },
      id,
    });
  }, 200);
};

module.exports = {
  countriesController,
};
