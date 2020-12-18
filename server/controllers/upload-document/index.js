const uploadDocumentController = async (req, res) => {
  // eslint-disable-next-line
  console.info('uploadDocumentController catch request');

  // setTimeout(() => {
  res.status(200).json({
    jsonrpc: '2.0',
    result: {
      documentID: '123',
    },
    id: req.body.id,
  });
  // }, 1000);
};

module.exports = {
  uploadDocumentController,
};
