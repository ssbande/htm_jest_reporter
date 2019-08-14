import React from 'react';
import { StateProvider } from '../context/state';
import { reducer } from '../context/reducer';

import TestResult from './testResult';
import Header from './../components/header';
import Footer from './../components/footer';

import '../styles/reset.css';
import '../styles/ham.css'
import '../styles/1.css';

const App = (props) => {
  const { config, testResult: { testResults,
    numFailedTestSuites,
    numFailedTests,
    numPassedTestSuites,
    numPassedTests,
    numPendingTestSuites,
    numPendingTests,
    numTotalTestSuites,
    numTotalTests
  }, totalTimeInSecs } = props;

  const initialState = {
    config,
    summary: {
      numFailedTestSuites,
      numFailedTests,
      numPassedTestSuites,
      numPassedTests,
      numPendingTestSuites,
      numPendingTests,
      numTotalTestSuites,
      numTotalTests,
      totalTimeInSecs
    },
    suites: testResults
  };

  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <nav></nav> {/* navigation: Project Name + Side Menu Hamburger */}
      <Header /> {/* header showing summary */}
      <TestResult/> {/* main */}
      <div id='sideNavMenu'></div> {/* Side Menu */}
      <Footer /> {/* footer */}
    </StateProvider>
  )
}

export default App;