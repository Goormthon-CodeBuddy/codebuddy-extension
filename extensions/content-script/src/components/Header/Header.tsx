import React from 'react';
import { MoreCommonIcon } from '@goorm-dev/gds-icons';
const Header = () => {
  return (
    <header>
      <img
        className="Header"
        src="https://statics.goorm.io/logo/goorm.svg"
        alt="goorm"
      />
      <div className="Header__logo">
        <MoreCommonIcon />
      </div>
    </header>
  );
};

export default Header;
