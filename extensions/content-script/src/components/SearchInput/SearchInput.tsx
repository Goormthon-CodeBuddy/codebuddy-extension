import React from 'react';
import { Button, Input } from '@goorm-dev/gds-components';
import { SendIcon } from '@goorm-dev/gds-icons';
import style from './SearchInput.module.scss';

const SearchInput = () => {
  return (
    <div className={style.SearchInput}>
      <textarea
        type="text"
        placeholder="코드에 대한 설명이나 에러 메시지를 작성해 주세요"
        className={style.SearchInput__input}
      />
      <Button
        color="primary"
        icon={<SendIcon />}
        iconSide="right"
        tag="button"
        className={style.SearchInput__button}
      >
        Send
      </Button>
    </div>
  );
};

export default SearchInput;
