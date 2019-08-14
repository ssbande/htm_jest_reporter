import React from 'react';
import { StateProvider } from '../context/state';
import { reducer } from '../context/reducer';

import TestResult from './testResult';
import Header from '../components/header';
import Footer from '../components/footer';
import Nav from '../components/nav';

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
    numTotalTests,
    snapshot: { total: totalSnapshots }
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
      totalTimeInSecs,
      totalSnapshots 
    },
    suites: testResults
  };

  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <Nav /> {/* navigation: Project Name + Side Menu Hamburger */}
      {/* <Header /> header showing summary */}
      <TestResult/> {/* main */}
      <Footer /> {/* footer */}
    </StateProvider>
  )
}

export default App;