import React, { memo } from 'react';
import classnames from 'classnames/bind';
import { Field } from 'react-final-form';
import { Text, FormSimpleInput } from '@wildberries/ui-kit';
import { ChangeFieldHandler } from '@mihanizm56/react-final-form-utils';
import i18next from 'i18next';
import { FormApi } from 'final-form';
import { FORM_FIELD_NAMES } from '../../../../_constants';
import {
  RegistrationFormDataType,
  TranslatedRegistrationFormTextType,
} from '../../../../_types';
import { GeneralFieldTextOutputType } from '../../../../_utils/get-general-field-options';
import { FieldsToShowType } from '../../../../_utils/fields-shown-conditions/_types';
import styles from './index.module.scss';
import { QuestionIcon } from './_components/question-icon';
import { TooltipText } from './_components/tooltip-text';

const BLOCK_NAME = 'Main-block';

const cn = classnames.bind(styles);

type PropsType = {
  isLoading: boolean;
  formExternalErrors: Partial<RegistrationFormDataType>;
  handleChangeFormField: ({
    name,
    form,
    value,
  }: {
    name: string;
    form?: any;
    value: string;
    errors?: Record<string, string>;
  }) => void;
  translatedFormText: TranslatedRegistrationFormTextType;
  fieldsToShow: FieldsToShowType;
  formValidationsConfig: Record<string, any>;
  form: FormApi<any>;
  errors: Record<string, string>;
  nameFieldPlaceholder: string;
  nameFieldTooltipText: string;
  isKPPRequired: boolean;
  generalFieldOptions: GeneralFieldTextOutputType;
};

export const MainBlock = memo(
  ({
    isLoading,
    handleChangeFormField,
    translatedFormText,
    fieldsToShow,
    form,
    formExternalErrors,
    formValidationsConfig,
    errors,
    nameFieldPlaceholder,
    nameFieldTooltipText,
    isKPPRequired,
    generalFieldOptions: {
      generalPlaceholder,
      generalLabel,
      generalIsReadOnly,
    },
  }: PropsType) => (
    <div className={cn(BLOCK_NAME)}>
      <div
        className={cn(
          `${BLOCK_NAME}__text-wrapper`,
          `${BLOCK_NAME}__text-wrapper--title`,
        )}
      >
        <Text
          color="black"
          size="h2"
          text={i18next.t(translatedFormText.mainInfo)}
        />
      </div>

      {fieldsToShow.name && (
        <div className={cn(`${BLOCK_NAME}__field-wrapper`)}>
          <Field
            autoComplete="on"
            component={FormSimpleInput}
            externalErrorMessage={formExternalErrors.name}
            label={i18next.t(translatedFormText.name)}
            labelBadgeIcon={QuestionIcon}
            labelBadgeText={() => (
              <TooltipText text={i18next.t(nameFieldTooltipText)} />
            )}
            name={FORM_FIELD_NAMES.name}
            placeholder={i18next.t(nameFieldPlaceholder)}
            readOnly={isLoading}
            required
            validate={formValidationsConfig.name}
          />
          <ChangeFieldHandler name={FORM_FIELD_NAMES.name}>
            {({ name, value }) => {
              handleChangeFormField({ name, value });
            }}
          </ChangeFieldHandler>
        </div>
      )}

      {fieldsToShow.inn && (
        <div className={cn(`${BLOCK_NAME}__text-wrapper`)}>
          <Text
            color="black"
            size="h3"
            text={i18next.t(translatedFormText.innInfo)}
          />
        </div>
      )}

      {fieldsToShow.inn && (
        <div className={cn(`${BLOCK_NAME}__field-wrapper`)}>
          <Field
            autoComplete="on"
            component={FormSimpleInput}
            externalErrorMessage={formExternalErrors.inn}
            label={i18next.t(translatedFormText.inn)}
            name={FORM_FIELD_NAMES.inn}
            placeholder={i18next.t(translatedFormText.innPlaceholder)}
            readOnly={isLoading}
            required
            validate={formValidationsConfig.inn}
          />
          <ChangeFieldHandler name={FORM_FIELD_NAMES.inn}>
            {({ name, value }) => {
              handleChangeFormField({ form, name, value, errors });
            }}
          </ChangeFieldHandler>
        </div>
      )}

      {fieldsToShow.unp && (
        <div className={cn(`${BLOCK_NAME}__field-wrapper`)}>
          <Field
            autoComplete="on"
            component={FormSimpleInput}
            externalErrorMessage={formExternalErrors.unp}
            label={i18next.t(translatedFormText.unp)}
            name={FORM_FIELD_NAMES.unp}
            placeholder={i18next.t(translatedFormText.unpPlaceholder)}
            readOnly={isLoading}
            required
            validate={formValidationsConfig.unp}
          />
          <ChangeFieldHandler name={FORM_FIELD_NAMES.unp}>
            {handleChangeFormField}
          </ChangeFieldHandler>
        </div>
      )}

      {fieldsToShow.bin && (
        <div className={cn(`${BLOCK_NAME}__field-wrapper`)}>
          <Field
            autoComplete="on"
            component={FormSimpleInput}
            externalErrorMessage={formExternalErrors.bin}
            label={i18next.t(translatedFormText.bin)}
            name={FORM_FIELD_NAMES.bin}
            placeholder={i18next.t(translatedFormText.binPlaceholder)}
            readOnly={isLoading}
            required
            validate={formValidationsConfig.bin}
          />
          <ChangeFieldHandler name={FORM_FIELD_NAMES.bin}>
            {handleChangeFormField}
          </ChangeFieldHandler>
        </div>
      )}

      {fieldsToShow.kpp && (
        <div className={cn(`${BLOCK_NAME}__field-wrapper`)}>
          <Field
            autoComplete="on"
            component={FormSimpleInput}
            externalErrorMessage={formExternalErrors.kpp}
            label={i18next.t(translatedFormText.kpp)}
            name={FORM_FIELD_NAMES.kpp}
            placeholder={i18next.t(translatedFormText.kppPlaceholder)}
            readOnly={isLoading}
            required={isKPPRequired}
            validate={formValidationsConfig.kpp}
          />
          <ChangeFieldHandler name={FORM_FIELD_NAMES.kpp}>
            {handleChangeFormField}
          </ChangeFieldHandler>
        </div>
      )}

      {fieldsToShow.general && (
        <div className={cn(`${BLOCK_NAME}__field-wrapper`)}>
          <Field
            autoComplete="on"
            component={FormSimpleInput}
            externalErrorMessage={formExternalErrors.general}
            label={i18next.t(generalLabel)}
            name={FORM_FIELD_NAMES.general}
            placeholder={i18next.t(generalPlaceholder)}
            readOnly={isLoading || generalIsReadOnly}
            required
            validate={formValidationsConfig.general}
          />
          <ChangeFieldHandler name={FORM_FIELD_NAMES.general}>
            {handleChangeFormField}
          </ChangeFieldHandler>
        </div>
      )}

      {fieldsToShow.fullName && (
        <div className={cn(`${BLOCK_NAME}__field-wrapper`)}>
          <Field
            autoComplete="on"
            component={FormSimpleInput}
            label={i18next.t(translatedFormText.fullName)}
            name={FORM_FIELD_NAMES.fullName}
            placeholder={i18next.t(translatedFormText.fullNamePlaceholder)}
            readOnly
            required
            validate={formValidationsConfig.fullName}
          />
        </div>
      )}

      {fieldsToShow.ogrn && (
        <div className={cn(`${BLOCK_NAME}__field-wrapper`)}>
          <Field
            autoComplete="on"
            component={FormSimpleInput}
            label={i18next.t(translatedFormText.ogrn)}
            name={FORM_FIELD_NAMES.ogrn}
            placeholder={i18next.t(translatedFormText.ogrnPlaceholder)}
            readOnly
            required
            validate={formValidationsConfig.ogrn}
          />
        </div>
      )}

      {fieldsToShow.okpo && (
        <div className={cn(`${BLOCK_NAME}__field-wrapper`)}>
          <Field
            autoComplete="on"
            component={FormSimpleInput}
            label={i18next.t(translatedFormText.okpo)}
            name={FORM_FIELD_NAMES.okpo}
            placeholder={i18next.t(translatedFormText.okpoPlaceholder)}
            readOnly
            required
            validate={formValidationsConfig.okpo}
          />
        </div>
      )}

      {fieldsToShow.ogrnip && (
        <div className={cn(`${BLOCK_NAME}__field-wrapper`)}>
          <Field
            autoComplete="on"
            component={FormSimpleInput}
            label={i18next.t(translatedFormText.ogrnip)}
            name={FORM_FIELD_NAMES.ogrnip}
            placeholder={i18next.t(translatedFormText.ogrnipPlaceholder)}
            readOnly
            required
            validate={formValidationsConfig.ogrnip}
          />
        </div>
      )}

      {fieldsToShow.okopf && (
        <div className={cn(`${BLOCK_NAME}__field-wrapper`)}>
          <Field
            autoComplete="on"
            component={FormSimpleInput}
            label={i18next.t(translatedFormText.okopf)}
            name={FORM_FIELD_NAMES.okopf}
            placeholder={i18next.t(translatedFormText.okopfPlaceholder)}
            readOnly
            required
            validate={formValidationsConfig.okopf}
          />
        </div>
      )}
    </div>
  ),
);
