// eslint-disable-next-line
const proxy = require('http-proxy-middleware');

module.exports = app => {
  // app.use(
  //   '/suppliers',
  //   proxy({
  //     target: 'https://nginx.suppliers-portal-eu.svc.k8s.test',
  //     // target: 'http://127.0.0.1:8080',
  //     changeOrigin: true,
  //     secure: false,
  //   }),
  // );

  app.use(
    '/ns/suppliers/suppliers-portal-eu/suppliers',
    proxy({
      // target: 'http://speu-suppliers.suppliers-portal-eu.svc.k8s.test',
      target: 'http://127.0.0.1:8090',
      changeOrigin: true,
      headers: {
        'X-User-Id': 27058976,
      },
    }),
  );

  app.use(
    '/I18N',
    proxy({
      target: 'http://speu-i18n.suppliers-portal-ru.svc.k8s.stage',
      // target: 'http://127.0.0.1:8080',
      changeOrigin: true,
    }),
  );
};
