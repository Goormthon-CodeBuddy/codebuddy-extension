import React, { useState, useContext } from 'react';
import { Button, Input } from '@goorm-dev/gds-components';
import { SendIcon } from '@goorm-dev/gds-icons';
import style from './SearchInput.module.scss';
import { AppContext } from '../../main';

const SearchInput = () => {
  const { setDescription, roomIndex, description, type, stack, prompt } =
    useContext(AppContext);
  const [input, setInput] = useState('');

  const handleNotification = () => {
    chrome.runtime.sendMessage({ action: 'createNotification' });
  };

  const codeExplainUrl = 'http://localhost:8080/api/code-explanation';
  const codeExplain = async () => {
    const payload = {
      prompt: prompt,
      description: description,
      stack: stack,
      roomIndex: roomIndex,
    };

    try {
      const response = await fetch(codeExplainUrl, {
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
      handleNotification();
    } catch (error) {
      console.log(error);
    }
  };

  const errorSolutionUrl = 'http://localhost:8080/api/error-solution';
  const errorSolution = async () => {
    const payload = {
      prompt: prompt,
      description: description,
      stack: stack,
      roomIndex: roomIndex,
    };

    try {
      const response = await fetch(errorSolutionUrl, {
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
      handleNotification();
    } catch (error) {
      console.log(error);
    }
  };

  const codeRefactoringUrl = 'http://localhost:8080/api/code-refactoring';
  const codeRefactoring = async () => {
    const payload = {
      prompt: prompt,
      description: description,
      stack: stack,
      roomIndex: roomIndex,
    };

    try {
      const response = await fetch(codeRefactoringUrl, {
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
      handleNotification();
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setInput(e.target.value);
    setDescription(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (type === '코드 분석(설명)') {
      codeExplain();
    } else if (type === '에러 해결') {
      errorSolution();
    } else if (type === '코드 개선(refactoring)') {
      codeRefactoring();
    }
    setInput('');
  };

  return (
    <div className={style.SearchInput}>
      <textarea
        type="text"
        placeholder="코드에 대한 설명이나 에러 메시지를 작성해 주세요"
        className={style.SearchInput__input}
        onChange={handleChange}
        value={input}
      />
      <Button
        color="primary"
        icon={<SendIcon />}
        iconSide="right"
        tag="button"
        className={style.SearchInput__button}
        onClick={handleSubmit}
      >
        Send
      </Button>
    </div>
  );
};

export default SearchInput;
