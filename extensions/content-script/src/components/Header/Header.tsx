import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  MoreCommonIcon,
  HistoryIcon,
  SettingIcon,
  PlusIcon,
} from '@goorm-dev/gds-icons';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Button,
} from '@goorm-dev/gds-components';

import joinRoom from '../../../../../apis/requestNewRoom';
import { AppContext } from '../../main';

import style from './Header.module.scss';
const Header = () => {
  const { updateRoomIndex } = useContext(AppContext);
  const navigate = useNavigate();

  const createRoom = async () => {
    const uid = window.location.pathname.replace('/workspace/', '');
    const newRoomIndex = await joinRoom(uid);
    if (newRoomIndex) updateRoomIndex(newRoomIndex);
  }

  return (
    <header className={style.Header}>
      <img
        className={style.Header__logo}
        src="https://statics.goorm.io/logo/goorm.svg"
        alt="goorm"
      />
      <div className={style.Header__dropdown}>
        <UncontrolledDropdown direction="left" className={style.Header__dropdown}>
          <DropdownToggle tag="span">
            <MoreCommonIcon />
          </DropdownToggle>
          <DropdownMenu left>
            <DropdownItem>
              <Button
                color="select"
                icon={<HistoryIcon />}
                iconSide="right"
                tag="button"
                onClick={() => navigate('/test')}
              >
                History
              </Button>
            </DropdownItem>
            <DropdownItem>
              <Button
                color="select"
                icon={<SettingIcon />}
                iconSide="right"
                tag="button"
              >
                Settings
              </Button>
            </DropdownItem>
            <DropdownItem>
              <Button
                color="select"
                icon={<PlusIcon />}
                iconSide="right"
                tag="button"
              >
                New Chat
              </Button>
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </div>
    </header>
  );
};

export default Header;
