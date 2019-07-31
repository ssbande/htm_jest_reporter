import React from 'react';
import { renderToStaticMarkup as renders } from 'react-dom/server';
import App from './app';
import { readConfig } from './utils';

module.exports = (testResult) => {
  console.log("starting the jest reporter ... ");
  var config = readConfig();
  console.log("dest: ", config.destination);

  // fs.writeFile('./testResult.json', JSON.stringify(testResult));

  const x = renders(<App />)
  console.log('the html in string: ', x);
  return testResult;
};