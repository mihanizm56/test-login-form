import React, { RefObject, SyntheticEvent, useCallback, useMemo } from 'react';
import { ButtonType } from '@/_components/button';
import { ButtonLinkView } from './_components/button-link-view';
import { getButtonLinkClassNames } from './_utils/get-button-link-class-names';
import { getButtonTextClassNames } from './_utils/get-button-text-class-names';
import { getTagProps } from './_utils/get-tag-props';
import { BUTTON_VARIANTS } from './_constants';
import { ButtonClickEventType, BasePropsType } from './_types';

export type ButtonLinkPropsType = BasePropsType & {
  /** реф на иконочную кнопку */
  buttonRef?: RefObject<HTMLButtonElement>;
  /** флаг рабочего состояния кнопки */
  disabled?: boolean;
  /** коллбек-обработчик клика по кнопке */
  onClick?: (buttonEvent: ButtonClickEventType) => void;
  /** функциональный тип кнопки */
  type?: ButtonType;
  /** флаг отображения прелоадера в кнопке */
  withLoader?: boolean;
};

export const ButtonLink = ({
  children,
  darkThemePreset,
  disabled,
  fullWidth,
  isBold,
  isBreadcrumbs,
  isLoading,
  isPopUp,
  isTextCenter,
  onClick = () => false,
  routeName,
  size,
  text,
  textSize = 'h4',
  textUpperCase,
  type = 'button',
  variant,
  withLoader,
}: ButtonLinkPropsType) => {
  const needPreloader = useMemo(
    () => Boolean(BUTTON_VARIANTS[variant || darkThemePreset || '']),
    [variant, darkThemePreset],
  );

  const styleButtonLink = useMemo(
    () =>
      getButtonLinkClassNames({
        routeName,
        isBreadcrumbs,
        isPopUp,
        textSize,
        isBold,
        textUpperCase,
        variant,
        darkThemePreset,
        size,
        text,
        children,
        isLoading,
        fullWidth,
        isTextCenter,
        disabled,
      }),
    [
      routeName,
      isBreadcrumbs,
      isPopUp,
      textSize,
      isBold,
      textUpperCase,
      variant,
      darkThemePreset,
      size,
      text,
      children,
      isLoading,
      fullWidth,
      isTextCenter,
      disabled,
    ],
  );

  const styleButtonText = useMemo(
    () =>
      getButtonTextClassNames({
        textUpperCase,
        variant,
        darkThemePreset,
        size,
      }),
    [textUpperCase, variant, darkThemePreset, size],
  );

  const handleClick = useCallback(
    (event: SyntheticEvent<HTMLButtonElement | HTMLAnchorElement>) => {
      if (type !== 'submit' && !routeName) {
        event.preventDefault();
      }
      onClick({ event });
    },
    [routeName, onClick, type],
  );

  const tagOptionalProps = useMemo(
    () => getTagProps({ disabled, routeName, type }),
    [disabled, routeName, type],
  );

  const Tag: string = useMemo(() => (routeName ? 'a' : 'button'), [routeName]);

  return (
    <ButtonLinkView
      darkThemePreset={darkThemePreset}
      icon={children}
      isLoading={isLoading}
      needPreloader={needPreloader}
      onClick={handleClick}
      routeName={routeName}
      styleButtonLink={styleButtonLink}
      styleButtonText={styleButtonText}
      tagName={Tag}
      tagOptionalProps={tagOptionalProps}
      text={text}
      variant={variant}
      withLoader={withLoader}
    />
  );
};
