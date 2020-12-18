const file = require('./file');

const downloadContractOfferController = async (req, res) => {
  // eslint-disable-next-line
  console.info('downloadContractOfferController catch request',req.body);

  const { id } = req.body;

  res.status(200).json({
    jsonrpc: '2.0',
    result: {
      file: {
        data: file,
        contentType:
          'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        filename: 'test.docx',
      },
    },
    id,
  });
};

module.exports = {
  downloadContractOfferController,
};
