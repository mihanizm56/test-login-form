import React, {
  FunctionComponent,
  memo,
  RefObject,
  useCallback,
  ComponentType,
  useMemo,
  FC,
  FocusEvent,
} from 'react';
import classNames from 'classnames/bind';
import { FieldRenderProps } from 'react-final-form';
import { Label } from '@/_components/label';
import { SimpleInput } from '../simple-input';
import {
  SimpleInputBlurEventType,
  SimpleInputClickEventType,
  SimpleInputChangeEventType,
  SimpleInputFocusEventType,
  SimpleInputKeyPressEventType,
} from '../simple-input/_types';
import { getIsErrorField } from '../_utils/final-form-utils/get-is-error-field';
import styles from './index.module.scss';

const cn = classNames.bind(styles);

type FormSimpleInputPropsType = {
  /** autocomplete */
  autoComplete?: 'on' | 'off';
  /** lock flag */
  disabled?: boolean;
  /** external error */
  externalErrorMessage?: string;
  /** id */
  id: string;
  /** ref link */
  inputRef?: RefObject<HTMLInputElement>;
  /** label for the form */
  label?: string;
  /** name */
  name: string;
  /** event click handlers */
  onClick?: (optionClickEvent: SimpleInputClickEventType) => void;
  /** event key press handlers */
  onKeyPress?: (optionKeyPressEvent: SimpleInputKeyPressEventType) => void;
  /** label with Icon */
  labelBadgeIcon?: ComponentType | FC | FunctionComponent;
  /** text of tooltip */
  labelBadgeText?: FC | FunctionComponent;
  /** placeholder */
  placeholder?: string;
  /** read only flag */
  readOnly?: boolean;
  /** required field flag */
  required?: boolean;
  /** dark theme flag */
  isDarkTheme?: boolean;
  /** input for rff(react-final-form) */
  input: {
    onBlur: (event: FocusEvent<HTMLInputElement>) => void;
    onChange: (value: string) => void;
    onFocus: (event: FocusEvent<HTMLInputElement>) => void;
    name: string;
    type?: string;
    value: string;
  } & any; // ToDo: fix problem not extends RFF type
} & FieldRenderProps<string, HTMLInputElement>;

export const FormSimpleInput = memo(
  ({
    autoComplete,
    disabled,
    externalErrorMessage,
    id,
    input: { onBlur, onChange, onFocus, name, value, type = 'text' },
    inputRef,
    isDarkTheme,
    label,
    labelBadgeIcon: Icon,
    labelBadgeText,
    meta: { error: validationErrorMessage, modified },
    onClick = () => false,
    onKeyPress = () => false,
    placeholder,
    readOnly,
    required,
  }: FormSimpleInputPropsType) => {
    // three possible error conditions
    // 1 - the field was used and it did not pass validation in the form
    // 2 - the field has not been used, but there is a value inside it and it does not pass validation
    // (case with reloading data into a form in a select when the form updates all modified fields when initialValues changes)
    // 3 - an external error has come to the field

    const isError = useMemo(
      () =>
        getIsErrorField<string>({
          validationErrorMessage,
          externalErrorMessage,
          value,
          modified,
        }),
      [validationErrorMessage, externalErrorMessage, value, modified],
    );

    const errorTextValue = useMemo(() => {
      if (isError) {
        return externalErrorMessage || validationErrorMessage;
      }

      return '';
    }, [isError, externalErrorMessage, validationErrorMessage]);

    const handleBlur = useCallback(
      ({ event }: SimpleInputBlurEventType) => {
        onBlur(event);
      },
      [onBlur],
    );

    const handleChange = useCallback(
      ({ value: changeValue }: SimpleInputChangeEventType) => {
        onChange(changeValue);
      },
      [onChange],
    );

    const handleClick = useCallback(
      (optionClickEvent: SimpleInputClickEventType) => {
        onClick(optionClickEvent);
      },
      [onClick],
    );

    const handleFocus = useCallback(
      ({ event }: SimpleInputFocusEventType) => {
        onFocus(event);
      },
      [onFocus],
    );

    const handleKeyPress = useCallback(
      (optionKeyPressEvent: SimpleInputKeyPressEventType) => {
        onKeyPress(optionKeyPressEvent);
      },
      [onKeyPress],
    );

    return (
      <div
        className={cn('Form-simple-input', {
          'Form-simple-input--error': isError,
        })}
      >
        {label && (
          <div className={cn('Form-simple-input__label')}>
            <Label disabled={disabled} htmlFor={id} required={required}>
              {label}
            </Label>
          </div>
        )}

        <SimpleInput
          autoComplete={autoComplete}
          disabled={disabled}
          id={id}
          // eslint-disable-next-line
          // @ts-ignore
          inputRef={inputRef}
          isDarkTheme={isDarkTheme}
          isError={isError}
          name={name}
          onBlur={handleBlur}
          onChange={handleChange}
          onClick={handleClick}
          onFocus={handleFocus}
          onKeyPress={handleKeyPress}
          placeholder={placeholder}
          readOnly={readOnly}
          type={type}
          value={value}
        />

        {isError && (
          <span className={cn('Form-simple-input__error')}>
            {errorTextValue}
          </span>
        )}
      </div>
    );
  },
);
