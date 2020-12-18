import { ChangeEvent, RefObject, KeyboardEvent, SyntheticEvent } from 'react';

export type CheckboxChangeEventType = {
  /** ивент событие */
  event: ChangeEvent<HTMLInputElement>;
  /** флаг значения */
  value: boolean;
  /** имя инпута */
  name?: string;
};

export type CheckboxClickEventType = {
  /** ивент событие */
  event: SyntheticEvent<HTMLElement>;
};

export type CheckboxKeyPressEventType = {
  /** ивент событие кнопки клавиатуры */
  event: KeyboardEvent<HTMLInputElement>;
};

export type CheckboxProps = {
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
  /** undefined flag */
  indeterminate?: boolean;
  /** input name */
  name: string;
  /** The event handler is called when clicks. */
  onClick?: (optionChangeEvent: CheckboxClickEventType) => void;
  /** The event handler is called when the input value changes. */
  onChange?: (optionChangeEvent: CheckboxChangeEventType) => void;
  /** The event handler is called when a key is clicked */
  onKeyPress?: (optionKeyPressEvent: CheckboxKeyPressEventType) => void;
  /** radio type flag */
  radio?: boolean;
  /** switch type flag */
  toggle?: boolean;
};

export type CheckboxState = {
  isActive: boolean;
};

export type AnalyticsColorType =
  | 'blue'
  | 'yellow'
  | 'pink'
  | 'oceanBlue'
  | 'paleBlue'
  | 'green'
  | 'red'
  | 'orange';
