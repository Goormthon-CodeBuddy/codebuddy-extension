import React, { useState } from 'react';
import {
  UncontrolledDropdown,
  DropdownToggle,
  Button,
} from '@goorm-dev/gds-components/dist/cjs';
import { HistoryIcon } from '@goorm-dev/gds-icons';
import style from './History.module.scss';
import MobileBottomSheet from '../MobileBottomSheet';
const History = () => {
  const [animationPlay, setAnimationPlay] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownToggle = () => {
    setAnimationPlay(!animationPlay);
    if (isOpen) {
      setTimeout(() => {
        setIsOpen(!isOpen);
      }, 450);
    } else {
      setIsOpen(!isOpen);
    }
  };

  return (
    <UncontrolledDropdown className={style.History} direction="right">
      <DropdownToggle tag="span" onClick={dropdownToggle}>
        <Button
          color="select"
          icon={<HistoryIcon />}
          iconSide="right"
          tag="button"
        >
          History
        </Button>
      </DropdownToggle>

      <MobileBottomSheet
        isOpen={isOpen}
        animationPlay={animationPlay}
        toggle={dropdownToggle}
      >
        {
          <>
            <div>1</div>
            <div>1</div>
            <div>1</div>
            <div>1</div>
            <div>1</div>
            <div>1</div>
            <div>1</div>
            <div>1</div>
          </>
        }
      </MobileBottomSheet>
    </UncontrolledDropdown>
  );
};

export default History;
