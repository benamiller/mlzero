import React, { useState } from 'react';
import { Controlled as CodeMirror } from 'react-codemirror2';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/javascript/javascript.js';

function CodeEditor() {
  const [code, setCode] = useState('// Start typing your code here...');

  return (
    <div className="code-editor-container">
      <CodeMirror
        value={code}
        options={{
          mode: 'javascript',
          theme: 'material',
          lineNumbers: true,
          indentUnit: 2,
          smartIndent: true,
          tabSize: 2,
          indentWithTabs: false,
          lineWrapping: true,
        }}
        onBeforeChange={(editor, data, value) => {
          setCode(value);
        }}
      />
    </div>
  );
}

export default CodeEditor;
