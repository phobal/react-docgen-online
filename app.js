// document.write('hello e2s');
import React from 'react';
import ReactDom from 'react-dom';
import CodePanel from './src/components/CodePanel';

require('codemirror/lib/codemirror.css');

const docgen = require('./src/docgen');

ReactDom.render(
  <CodePanel />,
  document.querySelector('#root'),
);

