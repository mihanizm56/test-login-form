import {
  ButtonSize,
  ButtonVariant,
  DarkThemePresets,
} from '@/_components/button';
import { ClassNameType } from '../_types';
import { COMPONENT_STYLE_NAME } from '../_constants';

type ParamsType = {
  textUpperCase?: boolean;
  darkThemePreset?: DarkThemePresets;
  size?: ButtonSize;
  variant?: ButtonVariant;
};
export const getButtonTextClassNames = ({
  textUpperCase,
  darkThemePreset,
  size,
  variant,
}: ParamsType): ClassNameType =>
  ({
    [`${COMPONENT_STYLE_NAME}-button__text`]: true,
    [`${COMPONENT_STYLE_NAME}-button__text--white`]:
      variant === 'main' || variant === 'accent',
    [`${COMPONENT_STYLE_NAME}-button__text--dark`]:
      variant === 'interface' || variant === 'add',
    [`${COMPONENT_STYLE_NAME}-button__text--interface-menu`]:
      variant === 'interface-menu',
    [`${COMPONENT_STYLE_NAME}-button__text--accent-menu`]:
      variant === 'accent-menu',
    [`${COMPONENT_STYLE_NAME}-button__text--success`]: variant === 'success',
    [`${COMPONENT_STYLE_NAME}-button__text--negative`]:
      (darkThemePreset === 'negative' && size === 'small') ||
      variant === 'remove',
    [`${COMPONENT_STYLE_NAME}-button__text--neutral`]:
      darkThemePreset === 'neutral' && size === 'small',
    [`${COMPONENT_STYLE_NAME}-button__text--positive`]:
      darkThemePreset === 'positive' && size === 'small',
    [`${COMPONENT_STYLE_NAME}-button__text--adaptive`]: variant === 'adaptive',
    [`${COMPONENT_STYLE_NAME}-button__text--uppercase`]: textUpperCase,
  } as ClassNameType); // the return value types are not correctly defined
