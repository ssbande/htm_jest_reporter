import React from 'react';
import { render } from 'react-dom';
import { renderToStaticMarkup as renders } from 'react-dom/server';
import App from './app';
import { readConfig } from './utils';
import fs from 'fs';

if(process.env.NODE_ENV === 'development') {
  console.log("starting the jest reporter ... ");
  var config = readConfig();
  console.log("dest: ", config);

  render(<App />, document.querySelector('#root'))
}

module.exports = (testResult) => {
  console.log("starting the jest reporter ... ");
  var config = readConfig();
  console.log("dest: ", config.destination);

  // fs.writeFile('./testResult.json', JSON.stringify(testResult));

  const x = renders(<App />)
  console.log('the html in string: ', x);
  return testResult;
};