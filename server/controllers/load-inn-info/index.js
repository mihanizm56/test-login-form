const loadInnInfoController = async (req, res) => {
  // eslint-disable-next-line
  console.info('loadInnInfoController catch request');

  setTimeout(() => {
    res.status(200).json({
      jsonrpc: '2.0',
      result: {
        info: {
          fullName: 'Общество с ограниченной ответственностью "Вайлдберриз"',
          general: 'Бакальчук Татьяна Владимировна',
          // juridicalAddress: '',
          // correspondentAccount: '',
          // ogrn: '1067746062449',
          // ogrnip: '1067746062449',
          // inn: '7721546864',
          // okpo: '79490869',
          // okopf: '12300',
        },
      },
      id: req.body.id,
    });
  }, 1000);
};

module.exports = {
  loadInnInfoController,
};
