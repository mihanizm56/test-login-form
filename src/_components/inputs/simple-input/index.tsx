import React, {
  memo,
  useCallback,
  KeyboardEvent,
  FocusEvent,
  SyntheticEvent,
  useState,
  useMemo,
} from 'react';
import classNames from 'classnames/bind';
import { keyCodes } from '../_utils/key-codes';
import { NavigationZoomIcon } from '../../icons/navigation-zoom-icon';
import { NavigationEyeIcon } from '../../icons/navigation-eye-icon';
import { NavigationEyeNoIcon } from '../../icons/navigation-eye-no-icon';
import { Button } from '../../button';
import { ButtonClickEventType } from '../../button/_types';
import { SimpleInputPropsType } from './_types';
import styles from './index.module.scss';

const cn = classNames.bind(styles);

export const SimpleInput = memo(
  ({
    autoComplete,
    disabled,
    inputRef,
    id,
    isDarkTheme,
    isError,
    name,
    onBlur = () => false,
    onChange,
    onClick = () => false,
    onFocus = () => false,
    onKeyPress = () => false,
    placeholder,
    readOnly,
    type,
    value,
  }: SimpleInputPropsType) => {
    const [isOpenEye, setIsOpenEye] = useState(true);

    const isSearchIcon = useMemo(() => type === 'search', [type]);
    const isPasswordIcon = useMemo(() => type === 'password', [type]);
    const PasswordIcon = useMemo(
      () => (isOpenEye ? NavigationEyeNoIcon : NavigationEyeIcon),
      [isOpenEye],
    );

    const changeEyeIcons = useMemo(() => (isOpenEye ? 'password' : 'text'), [
      isOpenEye,
    ]);
    const changeTypes = useMemo(
      () => (isPasswordIcon ? changeEyeIcons : type),
      [isPasswordIcon, changeEyeIcons, type],
    );

    const typeForButton = useMemo(() => isSearchIcon || isPasswordIcon, [
      isSearchIcon,
      isPasswordIcon,
    ]);

    const TargetIcon = isPasswordIcon ? PasswordIcon : NavigationZoomIcon;

    const handleBlur = useCallback(
      (event: FocusEvent<HTMLInputElement>) => {
        const { value: blurValue } = event.currentTarget;

        onBlur({ event, value: blurValue, name });
      },
      [name, onBlur],
    );

    const handleChange = useCallback(
      (event: SyntheticEvent<HTMLInputElement>) => {
        const { value: changeValue } = event.currentTarget;

        onChange({ event, value: changeValue, name });
      },
      [name, onChange],
    );

    const handleClick = useCallback(
      (event: SyntheticEvent<HTMLInputElement>) => {
        const { value: clickValue } = event.currentTarget;

        onClick({ event, value: clickValue, name });
      },
      [name, onClick],
    );

    const handleFocus = useCallback(
      (event: FocusEvent<HTMLInputElement>) => {
        const { value: focusValue } = event.currentTarget;

        onFocus({ event, value: focusValue, name });
      },
      [name, onFocus],
    );

    const handleKeyPress = useCallback(
      (event: KeyboardEvent<HTMLInputElement>) => {
        const { currentTarget, keyCode, which } = event;
        const { ENTER } = keyCodes;

        if (keyCode === ENTER || which === ENTER) {
          onClick({ event, value: currentTarget.value, name });
        }

        onKeyPress({ event, value: currentTarget.value, name });
      },
      [name, onClick, onKeyPress],
    );

    const handleIconClick = useCallback(
      (event: ButtonClickEventType) => {
        if (isPasswordIcon) {
          setIsOpenEye(!isOpenEye);
        }
      },
      [isPasswordIcon, isOpenEye],
    );

    return (
      <div className={cn('Simple-input')}>
        <input
          ref={inputRef}
          autoComplete={autoComplete}
          className={cn('Simple-input__field', {
            'Simple-input__field--disabled': disabled,
            'Simple-input__field--searching': type === 'search',
            'Simple-input__field--error': isError,
            'Simple-input__field--readOnly': readOnly,
            'Simple-input__field--dark-theme': isDarkTheme,
          })}
          disabled={disabled}
          id={id}
          name={name}
          onBlur={handleBlur}
          onChange={handleChange}
          onClick={handleClick}
          onFocus={handleFocus}
          onKeyPress={handleKeyPress}
          placeholder={placeholder}
          readOnly={readOnly}
          type={changeTypes}
          value={value}
        />

        {typeForButton && (
          <div className={cn('Simple-input__icon')}>
            <Button onClick={handleIconClick} size="big" type="button">
              {TargetIcon}
            </Button>
          </div>
        )}
      </div>
    );
  },
);
