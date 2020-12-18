import React, { memo } from 'react';
import classnames from 'classnames/bind';
import { Field } from 'react-final-form';
import { Text, FormSelect } from '@wildberries/ui-kit';
import { SelectOptionType } from '@wildberries/ui-kit/lib/select/types';
import { ChangeFieldHandler } from '@mihanizm56/react-final-form-utils';
import i18next from 'i18next';
import { FormApi } from 'final-form';
import { CSSTransition } from 'react-transition-group';
import { FORM_FIELD_NAMES, TIMEOUT_OPEN_FORM } from '../../../../_constants';
import {
  RegistrationFormDataType,
  TranslatedRegistrationFormTextType,
} from '../../../../_types';
import { FieldsToShowType } from '../../../../_utils/fields-shown-conditions/_types';
import styles from './index.module.scss';

const BLOCK_NAME = 'Title-block';

const cn = classnames.bind(styles);

type PropsType = {
  isLoading: boolean;
  countries: Array<SelectOptionType>;
  formExternalErrors: Partial<RegistrationFormDataType>;
  handleChangeFormField: ({
    name,
    form,
    value,
  }: {
    name: string;
    form?: any;
    value: string;
  }) => void;
  translatedFormText: TranslatedRegistrationFormTextType;
  hasBackendErrors: boolean;
  listLegalForms: Array<SelectOptionType>;
  fieldsToShow: FieldsToShowType;
  formValidationsConfig: Record<string, any>;
  form: FormApi<any>;
};

export const TitleBlock = memo(
  ({
    isLoading,
    countries,
    handleChangeFormField,
    translatedFormText,
    listLegalForms,
    fieldsToShow,
    formExternalErrors,
    formValidationsConfig,
    form,
  }: PropsType) => (
    <div className={cn(BLOCK_NAME)}>
      <div className={cn(`${BLOCK_NAME}__text-wrapper`)}>
        <Text
          color="black"
          size="h1"
          text={i18next.t(translatedFormText.title)}
        />
      </div>
      <div className={cn(`${BLOCK_NAME}__field-wrapper`)}>
        <Field
          component={FormSelect}
          externalErrorMessage={formExternalErrors.countryID}
          label={i18next.t(translatedFormText.country)}
          name={FORM_FIELD_NAMES.countryID}
          options={countries}
          placeholder={i18next.t(translatedFormText.countryPlaceholder)}
          readOnly={isLoading}
          required
          TODO
          validate={formValidationsConfig.countryID}
        />
        <ChangeFieldHandler name={FORM_FIELD_NAMES.countryID}>
          {handleChangeFormField}
        </ChangeFieldHandler>
      </div>

      <CSSTransition
        classNames={{
          enter: cn(`${BLOCK_NAME}__field-wrapper--enter`),
          exit: cn(`${BLOCK_NAME}__field-wrapper--exit`),
        }}
        in={fieldsToShow.legalFormID}
        timeout={TIMEOUT_OPEN_FORM}
        unmountOnExit
      >
        <div className={cn(`${BLOCK_NAME}__field-wrapper`)}>
          <Field
            component={FormSelect}
            externalErrorMessage={formExternalErrors.legalFormID}
            label={i18next.t(translatedFormText.legalFormID)}
            name={FORM_FIELD_NAMES.legalFormID}
            options={listLegalForms}
            placeholder={i18next.t(translatedFormText.legalFormPlaceholder)}
            readOnly={isLoading}
            required
            validate={formValidationsConfig.legalForm}
          />
          <ChangeFieldHandler name={FORM_FIELD_NAMES.legalFormID}>
            {({ value, name }) => handleChangeFormField({ value, name, form })}
          </ChangeFieldHandler>
        </div>
      </CSSTransition>
    </div>
  ),
);
