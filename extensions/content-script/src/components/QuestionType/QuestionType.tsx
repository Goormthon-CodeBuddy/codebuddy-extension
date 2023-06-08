import React, { useState, useContext } from 'react';
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledTooltip,
} from '@goorm-dev/gds-components';
import { ChevronDownIcon, HelpCircleIcon } from '@goorm-dev/gds-icons';
import style from './QuestionType.module.scss';
import { AppContext } from '../../main';

const QuestionType = () => {
  const { setType } = useContext(AppContext);
  const questionTypes = [
    '에러 해결',
    '코드 분석(설명)',
    '코드 개선(refactoring)',
  ];

  const [selected, setSelected] = useState('에러 해결');
  const handleClick = (id) => {
    setSelected(id);
    setType(id);
  };
  return (
    <div className={style.QuestionType}>
      <label className={style.QuestionType__label}>
        Type
        <span className={style.QuestionType__option}>(Optional)</span>
        <HelpCircleIcon id="quetionType" />
        <UncontrolledTooltip target="quetionType" placement="top">
          질문 유형을 선택해 주세요
        </UncontrolledTooltip>
      </label>
      <UncontrolledDropdown>
        <DropdownToggle
          className={style.QuestionType__toggle}
          color="select"
          block
        >
          <div>{selected}</div>
          <ChevronDownIcon />
        </DropdownToggle>
        <DropdownMenu className={style.QuestionType__menu}>
          {questionTypes.map((questiontype) => {
            return (
              <DropdownItem
                className={style.QuestionType__item}
                key={questiontype}
                onClick={() => handleClick(questiontype)}
              >
                <div>{questiontype}</div>
              </DropdownItem>
            );
          })}
        </DropdownMenu>
      </UncontrolledDropdown>
    </div>
  );
};

export default QuestionType;
