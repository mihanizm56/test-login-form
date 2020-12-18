import { ComponentType, FunctionComponent, SyntheticEvent } from 'react';
import { DarkThemePresets, ButtonVariant } from '@/_components/button';
import { FontSizeType } from '@/_components/text';

export type BasePropsType = {
  /** отображение иконки в кнопке */
  children?: ComponentType | FunctionComponent;
  /** кнопка в темном интерфейсе */
  darkThemePreset?: DarkThemePresets;
  /** флаг рабочего состояния кнопки */
  disabled?: boolean;
  /** флаг устанавливающий width: 100% */
  fullWidth?: boolean;
  /** флаг веса текста */
  isBold?: boolean;
  /** флаг для вне текста, в хлебной крошки ссылки */
  isBreadcrumbs?: boolean;
  /** флаг отображения процесса загрузки внутри кнопки */
  isLoading?: boolean;
  /** флаг (без перезагрузки страницы) для попап / часть текста  */
  isPopUp?: boolean;
  /** флаг, устанавливающий текст в центр */
  isTextCenter?: boolean;
  /** href для ссылки */
  routeName?: string;
  /** размер кнопки */
  size?: ButtonSize;
  /** содержание текста */
  text?: string;
  /** выбор заголовка в кнопке */
  textSize?: FontSizeType;
  /** флаг регистра текста в кнопке */
  textUpperCase?: boolean;
  /** степень важности кнопки */
  variant?: ButtonVariant;
};

export type ButtonSize = 'big' | 'small';

export type ButtonType = 'button' | 'submit' | 'reset';

export type ClassNameType = { [key: string]: boolean };

export type ButtonClickEventType = {
  event: SyntheticEvent<HTMLButtonElement | HTMLAnchorElement>;
};

export type AnchorPropsType = {
  href: string;
};
export type ButtonPropsType = {
  disabled?: boolean;
  type?: string;
};

export type TagOptionalPropsType = AnchorPropsType | ButtonPropsType;
