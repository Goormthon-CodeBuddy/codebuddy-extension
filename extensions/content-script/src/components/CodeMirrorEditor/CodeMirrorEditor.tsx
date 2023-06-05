import { useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { EditorView } from '@codemirror/view';
import { javascript } from '@codemirror/lang-javascript';

interface CodeMirrorEditorProps {
  code: string;
}

const CodeMirrorEditor = ({code}: CodeMirrorEditorProps) => {
  const [currentCode, setCurrentCode] = useState(code);
  return (
    <CodeMirror
      value={currentCode}
      theme={'dark'}
      extensions={[javascript({ jsx: true }), EditorView.lineWrapping]}
      onChange={(value) => setCurrentCode(value)}
    />
  );
}
export default CodeMirrorEditor;