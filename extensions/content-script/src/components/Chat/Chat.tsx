import React from 'react';
import style from './Chat.module.scss';
import { Avatar, TextButton } from '@goorm-dev/gds-components';
const Chat = ({ message }) => {
  const name = message.is_answer ? 'GPT' : 'User';
  const template = ['에러 해결', '코드분석', '코드개선'];
  return (
    <div className={style.Chat}>
      <div className={style.Chat__info}>
        <Avatar name={name} size="sm" color={null} />
        <div className={style.Chat__stack}>
          {message.content.stack ? message.content.stack : '스택 선택 안함'}
        </div>
        <span>/</span>
        <div className={style.Chat__stack}>
          {template[message.template_index]}
        </div>
        <span>/</span>
        <div className={style.Chat__code}>
          {message.content.code && <TextButton>코드 보기</TextButton>}
        </div>
      </div>
      <div className={style.Chat__main}>
        {!message.content.description && !message.is_answer && (
          <div className={style.Chat__noDescription}>
            추가 설명이 입력되지 않았습니다.
          </div>
        )}
        {message.content.description && !message.is_answer && (
          <div className={style.Chat__description}>
            {message.content.description}
          </div>
        )}
        {message.content.details && message.is_answer && (
          <div className={style.Chat__details}>{message.content.details}</div>
        )}
      </div>
    </div>
  );
};

export default Chat;
