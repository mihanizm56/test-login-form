import { RefObject, SyntheticEvent, KeyboardEvent, FocusEvent } from 'react';

export type SimpleInputBlurEventType = {
  /** ивент событие */
  event: FocusEvent<HTMLInputElement>;
  /** значение */
  value: string;
  /** наименование */
  name: string;
};

export type SimpleInputChangeEventType = {
  /** ивент событие */
  event: SyntheticEvent<HTMLInputElement>;
  /** значение */
  value: string;
  /** наименование */
  name: string;
};

export type SimpleInputClickEventType = {
  /** ивент событие */
  event: SyntheticEvent<HTMLElement> | KeyboardEvent<HTMLInputElement>;
  /** значение */
  value: string;
  /** наименование */
  name: string;
};

export type SimpleInputFocusEventType = SimpleInputBlurEventType;

export type SimpleInputKeyPressEventType = {
  /** ивент событие */
  event: KeyboardEvent<HTMLInputElement>;
  /** значение */
  value: string;
  /** наименование */
  name: string;
};

export type SimpleInputIconEventType = (
  event: SyntheticEvent<HTMLButtonElement>,
) => void;

export type SimpleInputPropsType = {
  /** autocomplete */
  autoComplete?: 'on' | 'off';
  /** lock flag */
  disabled?: boolean;
  /** ref link */
  inputRef?: ((ref: HTMLInputElement) => void) | RefObject<HTMLInputElement>;
  /** id */
  id: string;
  /** error flag */
  isError?: boolean;
  /** dark theme flag */
  isDarkTheme?: boolean;
  /** name */
  name: string;
  /** event handlers */
  onBlur?: (optionBlurEvent: SimpleInputBlurEventType) => void;
  onChange: (optionChangeEvent: SimpleInputChangeEventType) => void;
  onClick?: (optionClickEvent: SimpleInputClickEventType) => void;
  onFocus?: (optionFocusEvent: SimpleInputFocusEventType) => void;
  onKeyPress?: (optionKeyPressEvent: SimpleInputKeyPressEventType) => void;
  /** placeholder */
  placeholder?: string;
  /** read only flag */
  readOnly?: boolean;
  /** types of inputs */
  type?: string;
  /** value of input */
  value: string;
};
