import React from 'react';
import { render } from 'react-dom';
import App from './app';

console.log("starting the jest reporter ... ");
const config = {
  // 'destination': path.join(process.cwd(), 'jesthtm-report.html'),
  'footerMsg': '',
  'heading': 'Test Report',
  'title': 'Test Report',
} 

render(<App config={config}/>, document.querySelector('#root'))