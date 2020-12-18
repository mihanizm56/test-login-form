import { appNamespace } from '@/_constants/i18next/app-namespace';

export default {
  name: 'ui-registration',
  path: '/ui-registration',
  loadAction: () => import('./index'),
  params: {
    endpointsConfig: {
      fromWindow: true,
      staticPath: 'publicPathForReplace',
    },
  },
  i18n: {
    namespaces: [appNamespace],
  },
};
