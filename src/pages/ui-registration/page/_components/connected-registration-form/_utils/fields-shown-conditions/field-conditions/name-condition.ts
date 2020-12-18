import { LEGAL_FORM_VALUES } from '@/pages/ui-registration/_constants';
import { FieldsShownConditionsParamsType } from '../_types';

export const nameCondition = ({
  legalFormsList,
  legalFormId,
}: FieldsShownConditionsParamsType): boolean => {
  const legalForm = legalFormsList.find(form => form.id === legalFormId);

  if (!legalForm) {
    return false;
  }

  return (
    legalForm.value === LEGAL_FORM_VALUES.ipWithNds ||
    legalForm.value === LEGAL_FORM_VALUES.ipWithoutNds ||
    legalForm.value === LEGAL_FORM_VALUES.ipOnNpd ||
    legalForm.value === LEGAL_FORM_VALUES.organizationWithNds ||
    legalForm.value === LEGAL_FORM_VALUES.organizationWithoutNds
  );
};
