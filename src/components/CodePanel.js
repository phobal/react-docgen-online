import React, { Component } from 'react';
import { Controlled as CodeMirror } from 'react-codemirror2';
import MarkDownElement from './markdownElement';

import './codepannel.css';

require('codemirror/mode/javascript/javascript');
require('codemirror/mode/markdown/markdown');
const docgen = require('../docgen');

const defaultValue = require('../../test/testData');

export default class CodePanel extends Component {
  constructor(props) {
    super(props);
    this.genDoc = this.genDoc.bind(this);
    this.updateCode = this.updateCode.bind(this);
  }
  state = {
    code: defaultValue,
    text: '',
  }
  genDoc() {
    const text = docgen(this.state.code);
    this.setState({ text });
  }
  updateCode(editor, data, value) {
    this.setState({
      code: value
    });
  }
  render() {
    const { code, text } = this.state;
    const jsoptions = {
      mode: 'javascript',
      lineNumbers: true,
    }
    const mdoptions = {
      mode: 'markdown',
      lineNumbers: true,
    }
    return (
      <div>
        <header className="header">
          <p>react-docgen-online</p>
        </header>
        <div className="code_container">
          <div className="code_left">
            <div className="code_pannel">
              <CodeMirror value={code} options={jsoptions} onBeforeChange={this.updateCode} />
            </div>
            <div className="btn_container">
              <button className="button" onClick={this.genDoc}>生成文档</button>
            </div>
          </div>
          <div className="code_right">
            <div className="markdown_pannel">
              <CodeMirror value={text} options={mdoptions} />
            </div>
            <div className="markdown_preview">
              <MarkDownElement text={text} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

