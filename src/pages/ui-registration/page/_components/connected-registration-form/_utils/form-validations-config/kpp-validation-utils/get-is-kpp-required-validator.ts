import { SelectOptionType } from '@wildberries/ui-kit';
import i18next from 'i18next';
import { SimpleValidator } from '@wildberries/validators';
import { pageSubNamespace } from '@/pages/ui-registration/_constants/page-sub-namespace';
import { appNamespace } from '@/_constants/i18next/app-namespace';
import { getIsKppRequired } from './get-is-kpp-required';

type ParamsType = {
  countriesList: Array<SelectOptionType>;
  countryId: string;
  simpleFieldValidator: SimpleValidator;
};

export const getIsKPPRequiredValidator = ({
  countriesList,
  countryId,
  simpleFieldValidator,
}: ParamsType) => {
  const isKppRequired = getIsKppRequired({ countriesList, countryId });

  return isKppRequired
    ? simpleFieldValidator.requiredValidator(
        i18next.t(
          `${appNamespace}:${pageSubNamespace}.field-form-errors.required`,
        ),
      )
    : () => ({ error: false, errorTextValue: '' });
};
