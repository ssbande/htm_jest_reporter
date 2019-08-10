import React, { Component } from 'react';
import { IoIosFolderOpen, IoIosFolder, IoIosPin } from "react-icons/io";
import { FaFolderOpen, FaFolder } from "react-icons/fa";
import '../styles/main.css';
import { formatTestSuite } from '../utils';


class TestResult extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { suites } = this.props
    return (<div className='testResultContainer'>
      {suites.map((s, index) => {
        return <div className='testSuites'>
          <div className='suiteHeading'>
            <div>
              <div style={{marginBottom: '8px'}}>
                <div className='suiteName'>{`Suite - ${index}`}</div>
                <div className='suiteLocation'>
                  <FaFolderOpen size={12}/>
                  <span>{s.testFilePath}</span>
                </div>
              </div>
              <div className='suiteSummary'>{`Suite - ${index}`}</div>
            </div>
            <div>Graph</div>
          </div>
          <ul className='testsHolder'>
            {s.testResults.length
              ? s.testResults.map((testSuite, i) => {
                const suite = formatTestSuite(testSuite, i);
                return <li className='test'>{suite.name}</li>
              })
              : <li className='test noTest'>No tests written ... </li>
            }
          </ul>
        </div>
      })}
    </div>)
  }
}

export default TestResult