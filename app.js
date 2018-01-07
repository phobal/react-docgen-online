// document.write('hello e2s');
import React from 'react';
import ReactDom from 'react-dom';

import MarkdownElement from './src/markdownElement';

const docgen = require('./src/docgen');
const str = require('./Loading');
// require('./src/markdown.css');

const markdown = docgen(str);
console.log(markdown);

ReactDom.render(
  <MarkdownElement text={markdown} />,
  document.querySelector('#root'),
);

