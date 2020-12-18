const legalForms = require('./data.json');

const listLegalFormsController = async (req, res) => {
  // eslint-disable-next-line
  console.info('legalFormController catch request');

  const {
    id,
    params: { countryID },
  } = req.body;

  // check for error response
  // if (countryID === 'e128ce0f-852b-5c3c-9b95-f3d9829cc2a2') {
  //   res.status(400).json({
  //     jsonrpc: '2.0',
  //     result: {
  //       legalForms: null,
  //     },
  //     id,
  //   });

  //   return;
  // }

  // setTimeout(() => {
  res.status(200).json({
    jsonrpc: '2.0',
    result: {
      legalForms: legalForms[countryID] || [],
    },
    id,
  });
  // }, 1000);
};

module.exports = {
  listLegalFormsController,
};
