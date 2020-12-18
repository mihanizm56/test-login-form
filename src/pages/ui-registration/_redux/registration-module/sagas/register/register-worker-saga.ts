import { setModalAction } from '@wildberries/notifications';
import i18next from 'i18next';
import { put, call, select } from 'redux-saga/effects';
import { setFetchProductsEvent } from '@wildberries/databus-service-products';
import { setFetchSuppliersEvent } from '@wildberries/databus-service-suppliers';
import { appNamespace } from '@/_constants/i18next/app-namespace';
import { uploadDocumentRequest } from '@/api/requests/upload-document';
import { registrationRequest } from '@/api/requests/registration';
import { USERS_PROFILE_PAGE } from '@/_constants/external-routes';
import { pageSubNamespace } from '@/pages/ui-registration/_constants/page-sub-namespace';
import {
  setRegistrationFormDataAction,
  setRegistrationFormLoadingStartAction,
  setRegistrationFormLoadingStopAction,
  setRegistrationFormErrorAction,
} from '../../../registration-form-module';
import { getCountriesListDataSelector } from '../../../regions-module';
import { RegistrationFormDataType } from '../../../../page/_components/connected-registration-form/_types';
import { listLegalFormsSelector } from '../../../legal-forms-module';
import { getFormattedFormData } from './_utils/get-formatted-form-data';
import { getErrorData } from './_utils/get-error-data';
import { getFormErrorsNotificationText } from './_utils/get-form-errors-notification-text';
import { getFilteredFormErrors } from './_utils/get-filtered-form-errors';
import { getPassportDocInBase64 } from './_utils/get-passport-doc-in-base-64';

export function* registerWorkerSaga(formData: RegistrationFormDataType) {
  yield put(setRegistrationFormDataAction(formData));
  yield put(setRegistrationFormLoadingStartAction());

  const legalFormsList = yield select(listLegalFormsSelector);
  const countriesList = yield select(getCountriesListDataSelector);
  const legalFormId = formData.legalFormID;
  const countryId = formData.countryID;

  try {
    const photoFile = formData.passportDoc[0];

    const passportDocInBase64 = yield call(getPassportDocInBase64, photoFile);

    const {
      data: uploadDocumentResponse,
      error: uploadDocumentError,
      errorText: uploadDocumentErrorText,
    } = yield call(uploadDocumentRequest, passportDocInBase64);

    if (uploadDocumentError) {
      throw new Error(uploadDocumentErrorText);
    }

    const formattedFormData = getFormattedFormData({
      formData,
      passportDocID: uploadDocumentResponse.documentID,
    });

    const {
      error: registrationError,
      errorText: registrationErrorText,
      additionalErrors: registrationAdditionalErrors,
    } = yield call(registrationRequest, formattedFormData);

    if (registrationError) {
      if (registrationAdditionalErrors && registrationAdditionalErrors.errors) {
        throw new Error(JSON.stringify(registrationAdditionalErrors.errors));
      }

      throw new Error(registrationErrorText);
    }

    yield put(
      setModalAction({
        status: 'success',
        title: i18next.t(`${appNamespace}:${pageSubNamespace}.success-submit`),
      }),
    );

    yield setFetchProductsEvent({
      withoutLoadingIndicator: true,
      navigateAfterLoadConfig: {
        routeName: USERS_PROFILE_PAGE,
      },
    });

    yield setFetchSuppliersEvent({
      withoutLoadingIndicator: true,
    });
  } catch (error) {
    console.error('registerWorkerSaga get an error', error);
    const { formErrors, message } = getErrorData(error);

    if (Boolean(formErrors)) {
      const filteredFormErrors = getFilteredFormErrors({
        formErrors,
        legalFormId,
        legalFormsList,
        countryId,
        countriesList,
      });

      yield put(setRegistrationFormErrorAction(filteredFormErrors));

      const formErrorsNotificationText = getFormErrorsNotificationText(
        filteredFormErrors,
      );

      yield put(
        setModalAction({
          status: 'error',
          title: i18next.t(
            `${appNamespace}:${pageSubNamespace}.not-success-submit`,
          ),
          text: formErrorsNotificationText,
          customHoldTimeout: 20000,
        }),
      );
    }

    if (Boolean(message)) {
      yield put(
        setModalAction({
          status: 'error',
          title: i18next.t(
            `${appNamespace}:${pageSubNamespace}.not-success-submit`,
          ),
          text: message,
        }),
      );
    }
  } finally {
    yield put(setRegistrationFormLoadingStopAction());
  }
}
