import { SelectOptionType } from '@wildberries/ui-kit';
import { RegistrationFormDataType } from '@/pages/ui-registration/page/_components/connected-registration-form/_types';
import { getFieldsShownConditions } from '@/pages/ui-registration/page/_components/connected-registration-form/_utils/fields-shown-conditions';
import { FORM_FIELD_NAMES } from '@/pages/ui-registration/page/_components/connected-registration-form/_constants';

type ParamsType = {
  formErrors: Partial<RegistrationFormDataType>;
  legalFormsList: Array<SelectOptionType>;
  legalFormId: string;
  countriesList: Array<SelectOptionType>;
  countryId: string;
};

export const getFilteredFormErrors = ({
  legalFormId,
  formErrors,
  legalFormsList,
  countriesList,
  countryId,
}: ParamsType): Partial<RegistrationFormDataType> =>
  Object.keys(formErrors).reduce((acc, fieldName) => {
    if (
      fieldName === FORM_FIELD_NAMES.countryID ||
      fieldName === FORM_FIELD_NAMES.name
    ) {
      return { ...acc, [fieldName]: formErrors[fieldName] };
    }

    const fieldsShownConditions = getFieldsShownConditions({
      legalFormId,
      legalFormsList,
      countryId,
      countriesList,
    });

    const isFieldShown = fieldsShownConditions[fieldName];

    if (isFieldShown) {
      return { ...acc, [fieldName]: formErrors[fieldName] };
    }

    return acc;
  }, {});
