import React from 'react';
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
import style from './Header.module.scss';
const Header = () => {
  return (
    <header className={style.Header}>
      <img
        className={style.Header__logo}
        src="https://statics.goorm.io/logo/goorm.svg"
        alt="goorm"
      />
      <div className={style.Header__dropdown}>
        <UncontrolledDropdown direction="left">
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
