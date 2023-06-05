import React from 'react';
import { Button, Input } from '@goorm-dev/gds-components';
import { SendIcon } from '@goorm-dev/gds-icons';
import style from './SearchInput.module.scss';

const SearchInput = () => {
  return (
    <div className={style.SearchInput}>
      <textarea
        type="text"
        placeholder="Send를 눌러 전송"
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
