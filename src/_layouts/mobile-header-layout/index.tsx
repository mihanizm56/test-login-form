import React, { memo, PropsWithChildren } from 'react';
import classnames from 'classnames/bind';
import { MobileHeaderSvg } from './_components/mobile-header-svg';
import styles from './index.module.scss';

const cn = classnames.bind(styles);
const BLOCK_NAME = 'Mobile-header-layout';

export const MobileHeaderLayout = memo(
  ({ children }: PropsWithChildren<{}>) => (
    <>
      <div className={cn(BLOCK_NAME)}>
        <div className={cn(`${BLOCK_NAME}__mobile-header`)}>
          <div className={cn(`${BLOCK_NAME}__mobile-icon-container`)}>
            <MobileHeaderSvg />
          </div>
        </div>
      </div>

      {children}
    </>
  ),
);
