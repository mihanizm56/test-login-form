import { SyntheticEvent } from 'react';

export type ButtonClickEventType = {
  /** ивент событие */
  event: SyntheticEvent<HTMLButtonElement>;
};

export type ButtonSize = 'big' | 'small';

export type ButtonType = 'button' | 'submit' | 'reset';

export type ButtonVariant =
  | 'main'
  | 'accent'
  | 'interface'
  | 'success'
  | 'adaptive'
  | 'interface-menu'
  | 'accent-menu'
  | 'remove'
  | 'add';

export type DarkThemePresets = 'neutral' | 'positive' | 'negative';
