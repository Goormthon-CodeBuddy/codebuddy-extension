import React, { useContext, useEffect } from 'react';
import { AppContext } from '../../main';
import SoftwareStackDropdown from '../../components/SoftwareStackDropdown/SoftwareStackDropdown';
import QuestionType from '../../components/QuestionType/QuestionType';
import CodeMirror from '../../components/CodeMirrorEditor';
import SearchInput from '../../components/SearchInput';
import CodeMirrorEditor from '../../components/CodeMirrorEditor/CodeMirrorEditor';
import style from './TemplatePage.module.scss';
import Header from '../../components/Header';

const TemplatePage = () => {

  return (
    <div className="wrapper">
      <Header />
      <div className={style.TemplatePage}>
        <SoftwareStackDropdown />
        <QuestionType />
        <CodeMirrorEditor code="1234" />
        <SearchInput />
      </div>
    </div>
  );
};

export default TemplatePage;
