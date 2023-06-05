import React from 'react';
import PropTypes from 'prop-types';
import { Card } from '@goorm-dev/gds-components';
import { ChevronDownIcon } from '@goorm-dev/gds-icons';
import cx from 'classnames';

import style from './MobileBottomSheet.module.scss';

const MobileBottomSheet = ({ toggle, isOpen, animationPlay, children }) => (
  <Card
    className={cx(
      style.MobileBottomSheet__bottomSheet,
      animationPlay
        ? style['MobileBottomSheet__bottomSheet--up']
        : style['MobileBottomSheet__bottomSheet--down'],
    )}
  >
    {isOpen && (
      <>
        <div
          className={style['MobileBottomSheet__bottomSheet--top']}
          onClick={toggle}
          aria-hidden
        >
          <ChevronDownIcon width="32" height="32" />
        </div>
        <div className={style.MobileBottomSheet__body}>{children}</div>
      </>
    )}
  </Card>
);

export default MobileBottomSheet;
