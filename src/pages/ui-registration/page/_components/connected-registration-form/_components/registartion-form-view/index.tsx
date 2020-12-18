import React, { memo, useMemo } from 'react';
import classnames from 'classnames/bind';
import { Form } from 'react-final-form';
import { CSSTransition } from 'react-transition-group';
import { Preloader } from '@wildberries/ui-kit';
import { SelectOptionType } from '@wildberries/ui-kit/lib/select/types';
import {
  RegistrationFormDataType,
  TranslatedRegistrationFormTextType,
} from '../../_types';
import { TIMEOUT_OPEN_FORM } from '../../_constants';
import { GeneralFieldTextOutputType } from '../../_utils/get-general-field-options';
import { FieldsToShowType } from '../../_utils/fields-shown-conditions/_types';
import { PhotoBlock } from './_components/photo-block';
import styles from './index.module.scss';
import { TitleBlock } from './_components/title-block';
import { MainBlock } from './_components/main-block';
import { SubmitButtonsBlock } from './_components/submit-buttons-block';

const BLOCK_NAME = 'Supplier-form-view';

const cn = classnames.bind(styles);

type PropsType = {
  submitForm: (values: any) => void;
  isLoading: boolean;
  countries: Array<SelectOptionType>;
  initialFormData: RegistrationFormDataType;
  formExternalErrors: Record<string, string>;
  handleChangeFormField: ({
    name,
    form,
    value,
    errors,
  }: {
    name: string;
    form?: any;
    value: string;
    errors?: Record<string, string>;
  }) => void;
  translatedFormText: TranslatedRegistrationFormTextType;
  hasBackendErrors: boolean;
  isFullFormLoading: boolean;
  listLegalForms: Array<SelectOptionType>;
  fieldsToShow: FieldsToShowType;
  legalFormValue: string | null;
  handleBackRedirect: () => void;
  formValidationsConfig: Record<string, any>;
  nameFieldPlaceholder: string;
  nameFieldTooltipText: string;
  isKPPRequired: boolean;
  generalFieldOptions: GeneralFieldTextOutputType;
};

export const RegistrationFormView = memo(
  ({
    isLoading,
    countries,
    submitForm,
    initialFormData,
    handleChangeFormField,
    translatedFormText,
    isFullFormLoading,
    listLegalForms,
    fieldsToShow,
    hasBackendErrors,
    formExternalErrors,
    legalFormValue,
    formValidationsConfig,
    handleBackRedirect,
    nameFieldPlaceholder,
    nameFieldTooltipText,
    generalFieldOptions,
    isKPPRequired,
  }: PropsType) => {
    const isMainBlockShown = useMemo(
      () => fieldsToShow.legalFormID && Boolean(legalFormValue),
      [fieldsToShow.legalFormID, legalFormValue],
    );

    return (
      <div
        className={cn(BLOCK_NAME, {
          [`${BLOCK_NAME}--loading`]: isFullFormLoading,
        })}
      >
        {isFullFormLoading ? (
          <div className={cn(`${BLOCK_NAME}__preloader-wrapper`)}>
            <Preloader color="dark-purple" size="large" />
          </div>
        ) : (
          <Form
            initialValues={initialFormData}
            onSubmit={submitForm}
            render={({ handleSubmit, form, errors }) => (
              <form onSubmit={handleSubmit}>
                <div className={cn(`${BLOCK_NAME}__form-content`)}>
                  <div className={cn(`${BLOCK_NAME}__prepare-block`)}>
                    <TitleBlock
                      countries={countries}
                      fieldsToShow={fieldsToShow}
                      form={form}
                      formExternalErrors={formExternalErrors}
                      formValidationsConfig={formValidationsConfig}
                      handleChangeFormField={handleChangeFormField}
                      hasBackendErrors={hasBackendErrors}
                      isLoading={isLoading}
                      listLegalForms={listLegalForms}
                      translatedFormText={translatedFormText}
                    />
                  </div>
                  <CSSTransition
                    classNames={{
                      enter: cn(`${BLOCK_NAME}__content-info--enter`),
                      exit: cn(`${BLOCK_NAME}__content-info--exit`),
                    }}
                    in={isMainBlockShown}
                    timeout={TIMEOUT_OPEN_FORM}
                    unmountOnExit
                  >
                    <div className={cn(`${BLOCK_NAME}__content`)}>
                      <div className={cn(`${BLOCK_NAME}__main-block`)}>
                        <MainBlock
                          errors={errors}
                          fieldsToShow={fieldsToShow}
                          form={form}
                          formExternalErrors={formExternalErrors}
                          formValidationsConfig={formValidationsConfig}
                          generalFieldOptions={generalFieldOptions}
                          handleChangeFormField={handleChangeFormField}
                          isKPPRequired={isKPPRequired}
                          isLoading={isLoading}
                          nameFieldPlaceholder={nameFieldPlaceholder}
                          nameFieldTooltipText={nameFieldTooltipText}
                          translatedFormText={translatedFormText}
                        />
                      </div>
                      <div className={cn(`${BLOCK_NAME}__photo-block`)}>
                        <PhotoBlock
                          formValidationsConfig={formValidationsConfig}
                          isLoading={isLoading}
                          translatedFormText={translatedFormText}
                        />
                      </div>
                      <div
                        className={cn(`${BLOCK_NAME}__submit-buttons-block`)}
                      >
                        <SubmitButtonsBlock
                          errors={errors}
                          handleBackRedirect={handleBackRedirect}
                          hasBackendErrors={hasBackendErrors}
                          isLoading={isLoading}
                          translatedFormText={translatedFormText}
                        />
                      </div>
                    </div>
                  </CSSTransition>
                </div>
              </form>
            )}
            subscription={{ invalid: true, errors: true }}
          />
        )}
      </div>
    );
  },
);
