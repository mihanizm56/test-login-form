const registerSupplierController = async (req, res) => {
  // eslint-disable-next-line
  console.info('registerSupplierController catch request');

  res.status(200).json({
    // result: {
    //   supplierID: '1',
    // },
    jsonrpc: '2.0',
    error: {
      code: 400,
      message: 'test',
      data: {
        trKey: 'test',
        errors: {
          kpp: 'kpp',
          ogrn: 'ogrn',
          ogrnip: 'ogrnip',
          okpo: 'okpo',
          okopf: 'okopf',
          fullName: 'fullName',
          inn: 'inn',
          legalFormID: 'legalFormID',
          name: 'name',
          bin: 'bin',
          unp: 'unp',
          general: 'general',
          countryID: 'countryID',
        },
      },
    },
    id: req.body.id,
  });
};

module.exports = {
  registerSupplierController,
};
