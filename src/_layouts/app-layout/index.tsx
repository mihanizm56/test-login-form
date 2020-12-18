import React, { Props } from 'react';
import { InitialAppPreloader, Text } from '@wildberries/ui-kit';
import classnames from 'classnames/bind';
import { connect } from 'react-redux';
import {
  getAppIsLoadingSelector,
  getIsAppErrorSelector,
  geti18nextIsLoadingSelector,
} from '@/_redux/ui-module';
import styles from './index.module.scss';

const BLOCK_NAME = 'App-layout';
const cn = classnames.bind(styles);

type PropsType = {
  isAppLoading: boolean;
  nodeName: string;
  isAppError: boolean;
  i18nextLoading: boolean;
} & Props<any>;

const WrappedViewComponent = ({
  isAppLoading,
  children,
  isAppError,
  i18nextLoading,
}: PropsType) => {
  if (isAppError) {
    return (
      <Text
        color="black"
        size="h1"
        text="Приносим извинения, в приложении произошла ошибка"
      />
    );
  }

  if (!i18nextLoading && !isAppError) {
    return (
      <div className={cn(BLOCK_NAME)}>
        {isAppLoading && <InitialAppPreloader viewBox="25 25 50 50" />}
        <div
          className={cn(`${BLOCK_NAME}`, {
            [`${BLOCK_NAME}--hidden`]: isAppLoading,
          })}
        >
          {children}
        </div>
      </div>
    );
  }

  if (i18nextLoading) {
    return <InitialAppPreloader viewBox="25 25 50 50" />;
  }
};

const mapStateToProps = state => ({
  isAppError: getIsAppErrorSelector(state),
  isAppLoading: getAppIsLoadingSelector(state),
  i18nextLoading: geti18nextIsLoadingSelector(state),
});

export const AppLayout = connect(mapStateToProps)(WrappedViewComponent);
