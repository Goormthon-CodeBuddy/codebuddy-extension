/// <reference types="chrome" />
/// <reference types="vite-plugin-svgr/client" />

import React, { useContext, useEffect } from 'react';
import { AppContext } from '../../main';

import styles from './Result.scss';
import '../../goormstrap.css';

import Header from '../../components/Header';
import StartTemplateButton from '../../components/StartTemplateButton';
import SearchInput from '../../components/SearchInput';
import CodeMirrorEditor from '../../components/CodeMirrorEditor/CodeMirrorEditor';

interface ResultProps {
    language: string;
    templateType: string;
}

function Result({ language, templateType }: ResultProps) {
  const { roomIndex } = useContext(AppContext);

  return (
    <div className={styles.wrapper}>
        <Header />
        <div className={styles.chattingList}>
            <div>
                <p>{`${language} / ${templateType} / 작성 코드 보기`}</p>
                <p className='text-gray-600'>"이 코드의 문제점"</p>
            </div>
            <div>
                <p>주어진 코드에는 오타가 존재합니다. "console.leg(1);"라는 코드는 올바르지 않습니다.
                정확한 명령어는 "console.log(1);"입니다. "console.log()"는 JavaScript에서 콘솔에 메시지를 출력하는 메서드입니다. "log()" 메서드의 인자로 전달된 값을 콘솔에 출력합니다.
                따라서, 주어진 코드의 문제점은 "leg"가 올바른 메서드인 "log"로 오타가 있어서 제대로 동작하지 않을 것이라는 것입니다. 정정된 코드는 아래와 같습니다:
                </p>
                <CodeMirrorEditor code={"console.log(1)"}/>
            </div>
        </div>
        <SearchInput />
    </div>
  );
}

export default Result;
