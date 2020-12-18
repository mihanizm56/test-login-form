import { SelectOptionType } from '@wildberries/ui-kit';
import { LEGAL_FORM_VALUES } from '@/pages/ui-registration/_constants';
import { FORM_TRANSLATED_TEXT } from '../_constants';

type ParamsType = {
  legalFormId?: string;
  listLegalForms: Array<SelectOptionType>;
};

export type GeneralFieldTextOutputType = {
  generalPlaceholder: string;
  generalLabel: string;
  generalIsReadOnly: boolean;
};

export const getGeneralFieldOptions = ({
  legalFormId,
  listLegalForms,
}: ParamsType): GeneralFieldTextOutputType => {
  if (!Boolean(legalFormId) || !listLegalForms.length) {
    return {
      generalLabel: FORM_TRANSLATED_TEXT.generalBusiness,
      generalPlaceholder: FORM_TRANSLATED_TEXT.generalBusinessPlaceholder,
      generalIsReadOnly: false,
    };
  }

  const legalFormValue = listLegalForms.find(
    ({ id }) => id === legalFormId,
  ) || { value: '' };

  return legalFormValue.value !== LEGAL_FORM_VALUES.ownJob
    ? {
        generalLabel: FORM_TRANSLATED_TEXT.generalBusiness,
        generalPlaceholder: FORM_TRANSLATED_TEXT.generalBusinessPlaceholder,
        generalIsReadOnly: true,
      }
    : {
        generalLabel: FORM_TRANSLATED_TEXT.generalOwn,
        generalPlaceholder: FORM_TRANSLATED_TEXT.generalOwnPlaceholder,
        generalIsReadOnly: false,
      };
};
