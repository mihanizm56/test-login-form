import { StoreInjectConfig } from '@wildberries/redux-core-modules';

export const storeInjectConfig = (routeName: string): StoreInjectConfig => ({
  sagasToInject: [
    // {
    //   name: REGISTER_SAGA_NAME,
    //   saga: registerWatcherSaga,
    // },
  ],
  reducersToInject: [
    // {
    //   name: registrationFormModuleReducerName,
    //   reducer: registrationFormStorage,
    // },
  ],
});
