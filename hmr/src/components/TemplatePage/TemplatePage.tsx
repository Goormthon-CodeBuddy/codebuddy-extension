import React from 'react';
import SoftwareStackDropdown from '../SoftwareStackDropdown';
import style from './TemplatePage.module.scss';
import QuestionType from '../QuestionType';
import CodeMirrorEditor from '../CodeMirrorEditor/CodeMirrorEditor';
import SearchInput from '../SearchInput/SearchInput';

const TemplatePage = () => {
  return (
    <div className={style.TemplatePage}>
      <SoftwareStackDropdown />
      <QuestionType />
      <CodeMirrorEditor code="1234" />
      <SearchInput />
    </div>
  );
};

export default TemplatePage;
