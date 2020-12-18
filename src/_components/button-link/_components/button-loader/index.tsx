import React, { useMemo, memo } from 'react';
import { ButtonVariant, DarkThemePresets } from '@/_components/button';
import { Preloader } from '../../../preloader';
import { Overlay } from '../../../overlay';
import { preloaderColor } from '../../../button/_utils/preloader-color';
import { BUTTON_OVERLAY_TIMEOUT } from '../../_constants';

type ButtonLoaderPropsType = {
  darkThemePreset?: DarkThemePresets;
  isLoading: boolean;
  variant?: ButtonVariant;
};

export const ButtonLoader = memo(
  ({ darkThemePreset, isLoading, variant }: ButtonLoaderPropsType) => {
    const preloaderColorCheck = useMemo(
      () => preloaderColor({ variant, darkThemePreset }),
      [variant, darkThemePreset],
    );

    return (
      <Overlay
        absolute
        inherit
        opened={isLoading}
        timeout={BUTTON_OVERLAY_TIMEOUT}
        withBorderRadius
      >
        <Preloader color={preloaderColorCheck} size="small" />
      </Overlay>
    );
  },
);
