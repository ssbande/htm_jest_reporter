import React from 'react';
import '../styles/main.css';
import { useStateValue } from '../context/state';
import _ from 'lodash';
import SuiteHeading from '../components/suiteHeading';
import SuiteTests from '../components/suiteTests';
import NoTests from '../components/noTests';

const TestResult = () => {
  const [{ suites }] = useStateValue();
  return (<main className='testResultContainer'>
    {suites.map((s, index) => { // Can add an option for ordering the tests alphabetically
      return <div key={`suite_${index}`} className='testSuites'>
        <SuiteHeading suite={s} index={index} />
        <ul className='testsHolder'>
          {s.testResults.length
            ? s.testResults.map((testSuite, i) => <SuiteTests key={`suiteTest_${i}`} suiteTests={testSuite} index={i} />)
            : <NoTests key={`suiteTest_${index}`} suiteTests={s} />
          }
        </ul>
      </div>
    })}
  </main>)
}

export default TestResult