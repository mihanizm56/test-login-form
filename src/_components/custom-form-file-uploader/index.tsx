import { FormFileUploader } from '@wildberries/ui-kit';
import React, { memo, useMemo } from 'react';
import classNames from 'classnames/bind';
import { FieldRenderProps } from 'react-final-form';
import styles from './index.module.scss';

const BLOCK_NAME = 'Custom-form-file-uploader';

const cn = classNames.bind(styles);

type PropsType = {
  /** текст с доступными форматами */
  allowFormatsPlaceholder?: string;
  /** Компонент с описывающий дополнительные требования к загружаемому файлу */
  children?: React.ReactNode;
  /** текст для области перетаскивания на desktop */
  desktopDragAreaText?: string;
  /** поле для FinalForm */
  /** идентификатор файл аплоадера */
  id: string;
  /** флаг активности поля загрузки файла */
  isDisabled?: boolean;
  /** флаг режима множественного выбора файлов */
  isMultiple?: boolean;
  /** лейбл компонента */
  label?: string;
  /** текст для мобильной кнопки */
  mobileButtonTitle?: string;
} & FieldRenderProps<File[]>;

export const CustomFormFileUploader = memo(
  ({
    allowFormatsPlaceholder,
    input,
    id,
    label,
    meta,
    meta: { error: validationErrorMessage, modified },
  }: PropsType) => {
    const isError = useMemo(() => validationErrorMessage && modified, [
      validationErrorMessage,
      modified,
    ]);

    const errorTextValue = useMemo(() => {
      if (isError) {
        return validationErrorMessage;
      }

      return '';
    }, [isError, validationErrorMessage]);

    return (
      <div
        className={cn(BLOCK_NAME, {
          [`${BLOCK_NAME}--error`]: isError,
        })}
      >
        <FormFileUploader
          allowFormatsPlaceholder={allowFormatsPlaceholder}
          id={id}
          input={input}
          label={label}
          meta={meta}
        />
        {isError && (
          <span className={cn(`${BLOCK_NAME}__error`)}>{errorTextValue}</span>
        )}
      </div>
    );
  },
);
