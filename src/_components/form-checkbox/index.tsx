import React, {
  memo,
  RefObject,
  useCallback,
  useMemo,
  FocusEvent,
} from 'react';
import classNames from 'classnames/bind';
import { FieldRenderProps } from 'react-final-form';
import { Checkbox } from '@/_components/checkbox';
import {
  CheckboxChangeEventType,
  CheckboxClickEventType,
} from '../checkbox/_types';
import { Label } from '../label';
import styles from './index.module.scss';

const cn = classNames.bind(styles);

type FormCheckboxProps = {
  /** flag when checked */
  checked?: boolean;
  /** ref link */
  checkboxRef?: RefObject<HTMLInputElement>;
  /** choice of background color for checkbox */
  color?: string;
  /** lock flag */
  disabled?: boolean;
  /** input id */
  id: string;
  /** input for rff */
  input: {
    onBlur: (event: FocusEvent<HTMLInputElement>) => void;
    onChange?: (value: boolean) => void;
    onFocus: (event: FocusEvent<HTMLInputElement>) => void;
    name: string;
    value: boolean;
  } & any; // ToDo: fix problem not extends RFF type
  /** indeterminate state flag */
  indeterminate?: boolean;
  onClick?: (optionClickEvent: CheckboxClickEventType) => void;
  /** radio type flag */
  radio?: boolean;
  /** switch type flag */
  toggle?: boolean;
  label?: string;
  required?: boolean;
  externalErrorMessage?: string;
} & FieldRenderProps<boolean, HTMLInputElement>;

export const FormCheckbox = memo(
  ({
    id,
    input: { onChange, checked, name },
    label,
    required,
    toggle,
    disabled,
    onClick,
    indeterminate,
    color,
    externalErrorMessage,
    meta: { error: validationErrorMessage, modified },
    checkboxRef,
  }: FormCheckboxProps) => {
    const isError = useMemo(
      () =>
        (modified && Boolean(validationErrorMessage)) ||
        (Boolean(checked) && !modified && Boolean(validationErrorMessage)) ||
        Boolean(externalErrorMessage),
      [validationErrorMessage, externalErrorMessage, checked, modified],
    );

    const handleChangeFormCheckbox = useCallback(
      ({ value: changeValue }: CheckboxChangeEventType) => {
        onChange(changeValue);
      },
      [onChange],
    );

    const errorTextValue = useMemo(() => {
      if (isError) {
        return externalErrorMessage || validationErrorMessage;
      }

      return '';
    }, [isError, externalErrorMessage, validationErrorMessage]);

    return (
      <div
        className={cn('Form-checkbox', {
          'Form-checkbox--error': isError,
        })}
      >
        <div className={cn('Form-checkbox__block')}>
          <Checkbox
            checkboxRef={checkboxRef}
            checked={checked}
            color={color}
            disabled={disabled}
            id={id}
            indeterminate={indeterminate}
            name={name}
            onChange={handleChangeFormCheckbox}
            onClick={onClick}
            toggle={toggle}
          />

          {label && (
            <div className={cn('Form-checkbox__label')}>
              <Label htmlFor={id} required={required}>
                {label}
              </Label>
            </div>
          )}
        </div>

        {isError && (
          <span className={cn('Form-checkbox__error')}>{errorTextValue}</span>
        )}
      </div>
    );
  },
);
