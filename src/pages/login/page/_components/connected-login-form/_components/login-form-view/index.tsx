import React, { memo, useMemo } from 'react';
import classnames from 'classnames/bind';
import { Field, Form } from 'react-final-form';
import { ChangeFieldHandler } from '@mihanizm56/react-final-form-utils';
import { LoginFormValuesType } from '@/pages/login/_types';
import { FormSimpleInput } from '@/_components/inputs/form-simple-input';
import { Text } from '@/_components/text';
import { ButtonLink } from '@/_components/button-link';
import { ChangeFormFieldValuesType } from '../../_types';
import styles from './index.module.scss';
import { FormCheckbox } from '@/_components/form-checkbox';

const cn = classnames.bind(styles);

const BLOCK_NAME = 'Login-form-view';

type PropsType = {
  changeFormField: ChangeFormFieldValuesType;
  isLoading: boolean;
  submitLoginForm: (values: LoginFormValuesType) => void;
  externalErrors: Record<string, string>;
  formValidations: Record<string, any>;
};

export const LoginFormView = memo(
  ({
    submitLoginForm,
    changeFormField,
    isLoading,
    externalErrors,
    formValidations,
  }: PropsType) => {
    const hasBackendErrors = useMemo(
      () => Object.keys(externalErrors).length !== 0,
      [externalErrors],
    );

    return (
      <div className={cn(`${BLOCK_NAME}`)}>
        <Form
          onSubmit={submitLoginForm}
          render={({ handleSubmit, form, invalid }) => (
            <form onSubmit={handleSubmit}>
              <div className={cn(`${BLOCK_NAME}__title`)}>
                <Text color="black" size="h1" text="Форма входа" />
              </div>
              <div className={cn(`${BLOCK_NAME}__field-wrapper`)}>
                <Field
                  autoComplete="on"
                  component={FormSimpleInput}
                  externalErrorMessage={externalErrors.login}
                  label="Логин"
                  name="login"
                  placeholder="Введите ваш логин"
                  readOnly={isLoading}
                  required
                  validate={formValidations.login}
                />
                <ChangeFieldHandler name="login">
                  {({ name, value }) => {
                    changeFormField({ name, value });
                  }}
                </ChangeFieldHandler>
              </div>
              <div className={cn(`${BLOCK_NAME}__field-wrapper`)}>
                <Field
                  autoComplete="on"
                  component={FormSimpleInput}
                  externalErrorMessage={externalErrors.login}
                  label="Пароль"
                  name="password"
                  placeholder="Введите ваш пароль"
                  readOnly={isLoading}
                  required
                  type="password"
                  validate={formValidations.password}
                />
                <ChangeFieldHandler name="password">
                  {({ name, value }) => {
                    changeFormField({ name, value });
                  }}
                </ChangeFieldHandler>
              </div>
              <div className={cn(`${BLOCK_NAME}__field-wrapper`)}>
                <Field
                  component={FormCheckbox}
                  name="oferta"
                  disabled={isLoading}
                  validate={formValidations.oferta}
                  label='Согласен с условиями оферты'
                  type='checkbox'
                  required
                />
                <ChangeFieldHandler name="password">
                  {({ name, value }) => {
                    changeFormField({ name, value });
                  }}
                </ChangeFieldHandler>
              </div>
              
              <div className={cn(`${BLOCK_NAME}__button-wrapper`)}>
                <ButtonLink
                  disabled={isLoading || hasBackendErrors || invalid}
                  fullWidth
                  isLoading={isLoading}
                  withLoader
                  isTextCenter
                  size="big"
                  text="Войти"
                  textUpperCase
                  type="submit"
                  variant="main"
                />
              </div>
            </form>
          )}
          subscription={{ invalid: true, errors: true }}
        />
      </div>
    );
  },
);
