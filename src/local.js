import React from 'react';
import { render } from 'react-dom';
import App from './containers/app';
import testResult from './testdata/testResult'

console.log("starting the jest reporter ... ");
const config = {
  // 'destination': path.join(process.cwd(), 'jesthtm-report.html'),
  'footerMsg': '',
  'heading': 'Test Report',
  'title': 'Consent Management Test Report',
} 

const {startTime} = testResult;
const totalTime = parseInt(((new Date).getTime() - startTime)/1000)
render(<App testResult={testResult} config={config} totalTimeInSecs={totalTime}/>, document.querySelector('#root'))