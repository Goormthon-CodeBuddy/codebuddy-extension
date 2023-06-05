import React from 'react';

import { AiGoormeeIcon, ForwardPageIcon } from '@goorm-dev/gds-icons';
import { Button } from '@goorm-dev/gds-components';
import style from './StartTemplateButton.module.scss';

const StartTemplateButton = () => {
  return (
    <div className={style.StartTemplateButton}>
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
        >
          템플릿으로 질문하기
        </Button>
      </main>
    </div>
  );
};

export default StartTemplateButton;
