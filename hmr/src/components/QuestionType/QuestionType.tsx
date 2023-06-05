import React from 'react';
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledTooltip,
} from '@goorm-dev/gds-components';
import { ChevronDownIcon, HelpCircleIcon } from '@goorm-dev/gds-icons';
import style from './QuestionType.module.scss';
const QuestionType = () => {
  const questionTypes = [
    '에러 해결',
    '코드 분석(설명)',
    '코드 개선(refactoring)',
  ];
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
          <div>{questionTypes[0]}</div>
          <ChevronDownIcon />
        </DropdownToggle>
        <DropdownMenu className={style.QuestionType__menu}>
          {questionTypes.map((questiontype) => {
            return (
              <DropdownItem
                className={style.QuestionType__item}
                key={questiontype}
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
