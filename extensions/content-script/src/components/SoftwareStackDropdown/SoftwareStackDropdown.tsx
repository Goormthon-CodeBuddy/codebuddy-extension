import React, { useState, useContext } from 'react';
import style from './SoftwareStackDropdown.module.scss';
import { AppContext } from '../../main';
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledTooltip,
} from '@goorm-dev/gds-components';
import { ChevronDownIcon, HelpCircleIcon } from '@goorm-dev/gds-icons';

const SoftwareStackDropdown = () => {
  const { setStack } = useContext(AppContext);
  const softwareStacks = [
    { id: 'cpp', enable: true, show: true },
    { id: 'hcj', enable: true, show: true },
    { id: 'python', enable: true, show: true },
    { id: 'django', enable: true, show: true },
    { id: 'flask', enable: true, show: true },
    { id: 'pytorch', enable: true, show: true },
    { id: 'jupyter', enable: true, show: true },
    { id: 'tensorflow', enable: true, show: true },
    { id: 'caffe', enable: true, show: true },
    { id: 'qt', enable: true, show: true },
    { id: 'java', enable: true, show: true },
    { id: 'maven', enable: true, show: true },
    { id: 'gradle', enable: true, show: true },
    { id: 'spring', enable: true, show: true },
    { id: 'springboot', enable: true, show: true },
    { id: 'jsp', enable: true, show: true },
    { id: 'react', enable: true, show: true },
    { id: 'react_native', enable: true, show: true },
    { id: 'vue', enable: true, show: true },
    { id: 'nodejs', enable: true, show: true },
    { id: 'express', enable: true, show: true },
    { id: 'polymer', enable: true, show: true },
    { id: 'ruby', enable: true, show: true },
    { id: 'rails', enable: true, show: true },
    { id: 'sinatra', enable: false, show: false },
    { id: 'php', enable: true, show: true },
    { id: 'go', enable: true, show: true },
    { id: 'swift', enable: true, show: true },
    { id: 'arduino', enable: true, show: true },
    { id: 'cs', enable: true, show: true },
    { id: '_net', enable: true, show: true },
    { id: 'R', enable: true, show: true },
    { id: 'scala', enable: true, show: true },
    { id: 'kotlin', enable: true, show: true },
    { id: 'hadoop', enable: true, show: true },
    { id: 'spark', enable: true, show: true },
    { id: 'blank', enable: true, show: true },
    { id: 'wordpress', enable: true, show: true },
    { id: 'sdl', enable: true, show: false },
  ];
  const selectedSoftwareStack = softwareStacks[0];

  const [selected, setSelected] = useState('cpp');
  const handleClick = (id) => {
    setSelected(id);
    setStack(id);
  };

  return (
    <div className={style.SoftwareStackDropdown}>
      <label className={style.SoftwareStackDropdown__label}>
        Stack
        <span className={style.SoftwareStackDropdown__option}>(Optional)</span>
        <HelpCircleIcon id="stackHelp" />
        <UncontrolledTooltip target="stackHelp" placement="top">
          현재 사용중인 소프트웨어 스택을 선택해 주세요
        </UncontrolledTooltip>
      </label>
      <UncontrolledDropdown>
        <DropdownToggle
          className={style.SoftwareStackDropdown__toggle}
          color="select"
          block
        >
          <div>{selected}</div>
          <ChevronDownIcon />
        </DropdownToggle>
        <DropdownMenu className={style.SoftwareStackDropdown__menu}>
          {softwareStacks.map((softwareStack) => {
            return softwareStack.show ? (
              <DropdownItem
                className={style.SoftwareStackDropdown__item}
                key={softwareStack.id}
                onClick={() => handleClick(softwareStack.id)}
              >
                <div>{softwareStack.id}</div>
              </DropdownItem>
            ) : null;
          })}
        </DropdownMenu>
      </UncontrolledDropdown>
    </div>
  );
};

export default SoftwareStackDropdown;
