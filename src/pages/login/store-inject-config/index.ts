import loginFormStorage, {
  loginWatcherSaga,
  LOGIN_SAGA_NAME,
  MODULE_REDUCER_NAME as loginFormReducerName,
} from '../_redux/login-module';

export const storeInjectConfig = {
  sagasToInject: [
    {
      name: LOGIN_SAGA_NAME,
      saga: loginWatcherSaga,
    },
  ],
  reducersToInject: [
    {
      name: loginFormReducerName,
      reducer: loginFormStorage,
    },
  ],
};
