import React, {
  useState,
  KeyboardEvent,
  ChangeEvent,
  useCallback,
  useMemo,
  memo,
  SyntheticEvent,
} from 'react';
import classNames from 'classnames/bind';
import { BasicCheckMarkIcon } from '../icons/basic-check-mark-icon';
import { BasicMinusIcon } from '../icons/basic-minus-icon';
import { CheckboxProps } from './_types';
import forCheckboxStyle from './checkbox.module.scss';
import forToggleStyle from './toggle.module.scss';
import { keyCodes } from '@/_constants/key-codes';

const checkboxClassNames = classNames.bind(forCheckboxStyle);
const toggleClassNames = classNames.bind(forToggleStyle);

const { ENTER, SPACE } = keyCodes;
const targetClickKey = [ENTER, SPACE];

export const Checkbox = memo(
  ({
    disabled,
    indeterminate,
    id,
    name,
    onChange = () => false,
    onKeyPress = () => false,
    onClick = () => false,
    checkboxRef,
    radio,
    toggle,
    color = 'orange',
    checked = false,
  }: CheckboxProps) => {
    const [isActive, setIsActive] = useState(false);

    const setActive = useCallback(() => {
      setIsActive(true);
    }, []);

    const checkboxStyle = useMemo(
      () =>
        checkboxClassNames('Checkbox', {
          'Checkbox--checked': checked,
          'Checkbox--disabled': disabled,
          'Checkbox--focused': isActive,
          'Checkbox--radio': radio,
          [`Checkbox--${color}`]: Boolean(color),
        }),
      [checked, disabled, isActive, radio, color],
    );

    const toggleStyle = useMemo(
      () =>
        toggleClassNames('Toggle', {
          'Toggle--checked': checked,
          'Toggle--disabled': disabled,
          'Toggle--focused': isActive,
        }),
      [checked, disabled, isActive],
    );

    const inputClasses = useMemo(
      () =>
        toggle
          ? toggleClassNames('Toggle__input')
          : checkboxClassNames('Checkbox__input'),
      [toggle],
    );

    const inputType = useMemo(() => (radio ? 'radio' : 'checkbox'), [radio]);

    const hasIcon = useMemo(() => !toggle && checked, [toggle, checked]);

    const handleBlur = useCallback(() => setIsActive(false), []);

    const handleChange = useCallback(
      (event: ChangeEvent<HTMLInputElement>) => {
        const { checked: changeChecked } = event.currentTarget;

        if (!disabled) {
          onChange({ event, value: changeChecked, name });
        }
      },
      [disabled, name, onChange],
    );

    const handleKeyPress = useCallback(
      (event: KeyboardEvent<HTMLInputElement>) => {
        const { charCode } = event;
        if (targetClickKey.includes(charCode)) {
          onKeyPress({ event });
        }
      },
      [onKeyPress],
    );

    const handleClickInput = useCallback(
      (event: SyntheticEvent<HTMLInputElement>) => {
        event.stopPropagation();
        onClick({ event });
      },
      [onClick],
    );

    const handleClickLabel = useCallback(
      (event: SyntheticEvent<HTMLLabelElement>) => {
        event.stopPropagation();
      },
      [],
    );

    return (
      // jsx-ally not checked interactive label from htmlFor attribute
      // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
      <label
        className={toggle ? toggleStyle : checkboxStyle}
        htmlFor={id}
        onClick={handleClickLabel}
        onFocus={setActive}
      >
        <input
          ref={checkboxRef}
          checked={checked}
          className={inputClasses}
          disabled={disabled}
          id={id}
          name={name}
          onBlur={handleBlur}
          onChange={handleChange}
          onClick={handleClickInput}
          onKeyPress={handleKeyPress}
          type={inputType}
        />
        {hasIcon && radio && (
          <span className={checkboxClassNames('Checkbox__icon')}>
            {indeterminate && (
              <span
                className={checkboxClassNames('Checkbox__icon-indeterminate')}
              />
            )}
          </span>
        )}

        {hasIcon && (
          <span className={checkboxClassNames('Checkbox__icon')}>
            {indeterminate ? (
              <BasicMinusIcon
                colorType={disabled ? 'disabledColor' : 'activeColor'}
                height="10"
                viewBox="0 0 12 2"
                width="10"
              />
            ) : (
              <BasicCheckMarkIcon
                colorType={disabled ? 'disabledColor' : 'activeColor'}
                height="10"
                viewBox="0 0 15 13"
                width="13"
              />
            )}
          </span>
        )}
      </label>
    );
  },
);
