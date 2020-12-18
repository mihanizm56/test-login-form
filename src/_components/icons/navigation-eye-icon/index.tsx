import React, { FC, memo } from 'react';
import { NavigationEyeColorType } from './_types';

const colorTypes = {
  defaultColor: '#D1CFD7',
  activeColor: '#3A0078',
};

type NavigationEyeIconPropsType = {
  /** выбор типа иконки */
  type?: NavigationEyeColorType;
};

export const NavigationEyeIcon: FC<NavigationEyeIconPropsType> = memo(
  ({ type = 'defaultColor' }: NavigationEyeIconPropsType) => (
    <svg
      fill="none"
      height="24"
      viewBox="-1 -4 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        clipRule="evenodd"
        d="M11 0C13.6819 0 16.2465 1.43062 18.6364 3.78115C19.4518 4.58305 20.1894 5.43916 20.8388 6.29562C21.2306
       6.81244 21.5088 7.21899 21.6612 7.4612L22 8L21.6612 8.5388C21.5088 8.781 21.2306 9.18756 20.8388 9.70438C20.1894
        10.5608 19.4518 11.417 18.6364 12.2189C16.2465 14.5694 13.6819 16 11 16C8.31805 16 5.75353 14.5694
         3.36355 12.2189C2.5482 11.417 1.81056 10.5608 1.1612 9.70438C0.76936 9.18756 0.491158 8.781 0.338838
          8.5388L0 8L0.338838 7.4612C0.491158 7.21899 0.76936 6.81244 1.1612 6.29562C1.81056 5.43916 2.5482
           4.58305 3.36355 3.78115C5.75353 1.43062 8.31805 0 11 0ZM19.2816 7.51681C18.687 6.73265 18.0111 5.94813
            17.2695 5.21878C15.211 3.19431 13.07 1.99993 11.0001 1.99993C8.93024 1.99993 6.78921 3.19431 4.73076
             5.21878C3.98917 5.94813 3.31321 6.73265 2.71868 7.51681C2.59028 7.68617 2.47162 7.84775 2.36314
              7.99993C2.47162 8.15211 2.59028 8.31369 2.71868 8.48305C3.31321 9.26721 3.98917 10.0517 4.73076
               10.7811C6.78921 12.8056 8.93024 13.9999 11.0001 13.9999C13.07 13.9999 15.211 12.8056 17.2695
                10.7811C18.0111 10.0517 18.687 9.26721 19.2816 8.48305C19.41 8.31369 19.5286 8.15211 19.6371
                 7.99993C19.5286 7.84775 19.41 7.68617 19.2816 7.51681ZM7.06688 8C7.06688 10.2091 8.8278 12 11
                  12C13.1722 12 14.9331 10.2091 14.9331 8C14.9331 5.79086 13.1722 4 11 4C8.8278 4 7.06688 5.79086
                   7.06688 8ZM12.9665 8C12.9665 9.10457 12.0861 10 11 10C9.91388 10 9.03342 9.10457 9.03342 8C9.03342
                    6.89543 9.91388 6 11 6C12.0861 6 12.9665 6.89543 12.9665 8Z"
        fill={colorTypes[type]}
        fillRule="evenodd"
      />
    </svg>
  ),
);
