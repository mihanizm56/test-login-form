import i18next from 'i18next';
import { appNamespace } from '@/_constants/i18next/app-namespace';
import { FORM_TRANSLATED_TEXT } from '@/pages/ui-registration/page/_components/connected-registration-form/_constants';
import { RegistrationFormDataType } from '@/pages/ui-registration/page/_components/connected-registration-form/_types';
import { pageSubNamespace } from '@/pages/ui-registration/_constants/page-sub-namespace';

export const getFormErrorsNotificationText = (
  formErrors: Partial<RegistrationFormDataType>,
): string =>
  Object.keys(formErrors).reduce(
    (acc, fieldName, index, array) => {
      const translatedFieldLabel = i18next.t(FORM_TRANSLATED_TEXT[fieldName]);

      if (index === array.length - 1) {
        return `${acc}${translatedFieldLabel}`;
      }

      return `${acc}${translatedFieldLabel}, `;
    },

    i18next.t(`${appNamespace}:${pageSubNamespace}.form-errors-text`),
  );
