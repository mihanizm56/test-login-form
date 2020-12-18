import React, { memo } from 'react';
import { NavigationCloseMediumSmallerColorType } from './_types';

const colorTypes = {
  menuColor: '#FFFFFF',
  defaultColor: '#4E4E53',
};

type PropsType = {
  colorType?: NavigationCloseMediumSmallerColorType;
};

export const NavigationCloseMediumSmallerIcon = memo(
  ({ colorType = 'defaultColor' }: PropsType) => (
    <svg
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        clipRule="evenodd"
        d="M0.310753 1.99681C-0.101096 1.58496 -0.101097 0.917221 0.310751 0.505372L0.50662 0.309504C0.918468 -0.102345 1.58621 -0.102345 1.99805 0.309504L15.6923 14.0038C16.1042 14.4157 16.1042 15.0834 15.6923 15.4952L15.4965 15.6911C15.0846 16.103 14.4169 16.103 14.005 15.6911L0.310753 1.99681Z"
        fill={colorTypes[colorType]}
        fillRule="evenodd"
      />
      <path
        clipRule="evenodd"
        d="M1.99619 15.6905C1.58434 16.1023 0.916603 16.1023 0.504754 15.6905L0.308886 15.4946C-0.102962 15.0828 -0.102962 14.415 0.308886 14.0032L14.0032 0.308887C14.415 -0.102962 15.0828 -0.102963 15.4946 0.308886L15.6905 0.504754C16.1023 0.916603 16.1023 1.58434 15.6905 1.99619L1.99619 15.6905Z"
        fill={colorTypes[colorType]}
        fillRule="evenodd"
      />
    </svg>
  ),
);
