import React from 'react';

import { AiGoormeeIcon, ForwardPageIcon } from '@goorm-dev/gds-icons';
import { Button } from '@goorm-dev/gds-components';
import style from './StartTemplateButton.module.scss';
import axios from 'axios';
import { Link } from 'react-router-dom';

const StartTemplateButton = () => {
  const url = 'http://localhost:8080/api/newRoom';
  const joinRoom = async () => {
    const payload = {
      containerUid: '44444test-containeruid',
    };

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error('Request failed');
      }

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Link className={style.StartTemplateButton} to="/templatePage">
      <header className={style.StartTemplateButton__header}>
        <div className={style.StartTemplateButton__logo}>
          <AiGoormeeIcon width="40" height="40" />
        </div>
        <div className={style.StartTemplateButton__logoText}>Code Buddy</div>
      </header>
      <main>
        <div className={style.StartTemplateButton__description}>
          템플릿 활용으로 정확한 답변을 받아보세요!
        </div>
        <Button
          icon={<ForwardPageIcon />}
          iconSide="right"
          tag="button"
          color="primary"
          size="xl"
          className={style.StartTemplateButton__button}
          onClick={joinRoom}
        >
          템플릿으로 질문하기
        </Button>
      </main>
    </Link>
  );
};

export default StartTemplateButton;
