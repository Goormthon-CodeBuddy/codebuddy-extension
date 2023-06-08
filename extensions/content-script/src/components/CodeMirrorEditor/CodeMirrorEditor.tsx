import React, { useState, useContext } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { EditorView } from '@codemirror/view';
import { javascript } from '@codemirror/lang-javascript';
import style from './CodeMirrorEditor.module.scss';
import { AppContext } from '../../main';
interface CodeMirrorEditorProps {
  code: string;
}

const CodeMirrorEditor = ({ code }: CodeMirrorEditorProps) => {
  const { setPrompt } = useContext(AppContext);
  const [currentCode, setCurrentCode] = useState('');

  const handleCodeChange = (value) => {
    setCurrentCode(value);
    setPrompt(value);
  };

  return (
    <div className={style.CodeMirrorEditor}>
      <CodeMirror
        value={currentCode}
        theme={'dark'}
        extensions={[javascript({ jsx: true }), EditorView.lineWrapping]}
        onChange={(value) => handleCodeChange(value)}
      />
    </div>
  );
};
export default CodeMirrorEditor;
