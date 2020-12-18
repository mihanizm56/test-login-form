import { SelectOptionType } from '@wildberries/ui-kit';
import { LEGAL_FORM_VALUES } from '@/pages/ui-registration/_constants';
import { FORM_TRANSLATED_TEXT } from '../_constants';

type ParamsType = {
  legalFormId?: string;
  listLegalForms: Array<SelectOptionType>;
};

export const getNameFieldTooltipText = ({
  legalFormId,
  listLegalForms,
}: ParamsType): string => {
  if (!Boolean(legalFormId) || !listLegalForms.length) {
    return '';
  }

  const legalFormValue = listLegalForms.find(
    ({ id }) => id === legalFormId,
  ) || { value: '' };

  switch (legalFormValue.value) {
    case LEGAL_FORM_VALUES.ipWithNds:
    case LEGAL_FORM_VALUES.ipOnNpd:
    case LEGAL_FORM_VALUES.ipWithoutNds:
      return FORM_TRANSLATED_TEXT.nameIpTooltipText;

    case LEGAL_FORM_VALUES.organizationWithNds:
    case LEGAL_FORM_VALUES.organizationWithoutNds:
      return FORM_TRANSLATED_TEXT.nameOrganizationTooltipText;

    default:
      return '';
  }
};
