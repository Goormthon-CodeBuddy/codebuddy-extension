import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { AiGoormeeIcon, ForwardPageIcon } from '@goorm-dev/gds-icons';
import { Button } from '@goorm-dev/gds-components';

import joinRoom from '../../../../../apis/requestNewRoom';
import { AppContext } from '../../main';

import style from './StartTemplateButton.module.scss';

const StartTemplateButton = () => {
  const { updateRoomIndex } = useContext(AppContext);

  const url = 'http://localhost:8080/api/newRoom';
  const createRoom = async () => {
    const uid = window.location.pathname.replace('/workspace/', '');
    const newRoomIndex = await joinRoom(uid);
    if (newRoomIndex) updateRoomIndex(newRoomIndex);
  }

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
          onClick={createRoom}
        >
          템플릿으로 질문하기
        </Button>
      </main>
    </Link>
  );
};

export default StartTemplateButton;
