import { BasePropsType, ClassNameType } from '../_types';
import { COMPONENT_STYLE_NAME } from '../_constants';

export const getButtonLinkClassNames = ({
  disabled,
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
  children: Icon,
  isLoading,
  fullWidth,
  isTextCenter,
}: BasePropsType): ClassNameType =>
  (routeName
    ? {
        [`${COMPONENT_STYLE_NAME}-link`]: true,
        [`${COMPONENT_STYLE_NAME}-link__breadcrumbs`]: isBreadcrumbs,
        [`${COMPONENT_STYLE_NAME}-link__popup`]: isPopUp,
        [`${COMPONENT_STYLE_NAME}-link--${textSize}`]: Boolean(textSize),
        [`${COMPONENT_STYLE_NAME}-link--bold`]: isBold,
        [`${COMPONENT_STYLE_NAME}-link--uppercase`]: textUpperCase,
      }
    : {
        [`${COMPONENT_STYLE_NAME}-button`]: true,
        [`${COMPONENT_STYLE_NAME}-button--disabled`]: disabled,
        [`${COMPONENT_STYLE_NAME}-button--${variant}`]:
          variant && !darkThemePreset,
        [`${COMPONENT_STYLE_NAME}-button--${size}`]:
          size && text && !Boolean(Icon),
        [`${COMPONENT_STYLE_NAME}-button--with-icon-small`]:
          size === 'small' && text && Boolean(Icon),
        [`${COMPONENT_STYLE_NAME}-button--single`]: Icon && !text,
        [`${COMPONENT_STYLE_NAME}-button--absolute`]: isLoading,
        [`${COMPONENT_STYLE_NAME}-button--full-width`]: fullWidth,
        [`${COMPONENT_STYLE_NAME}-button--align-center`]: isTextCenter,
        [`${COMPONENT_STYLE_NAME}--${darkThemePreset}`]:
          darkThemePreset && size === 'small' && !variant,
      }) as ClassNameType; // the return value types are not correctly defined
