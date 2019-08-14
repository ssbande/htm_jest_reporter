import React, { useState, Fragment } from 'react';
import { formatTestSuite } from '../utils';
import { IoIosArrowForward, IoIosArrowUp } from 'react-icons/io';

const SuiteTests = ({ suiteTests, index }) => {
  const [expanded, setExpanded] = useState(false);
  const [panelHeight, setPanelHeight] = useState('0px');

  const handleClick = suite => {
    if (suite.canExpand) {
      setExpanded(!expanded);
      setPanelHeight(expanded ? '0px' : '100%')
    }
  }

  const suite = formatTestSuite(suiteTests, index);
  return <Fragment key={'test_${index}'}>
    <li className={`test ${suite.canExpand ? 'sweep-to-right' : ''} ${expanded ? 'active' : ''}`}
      onClick={() => handleClick(suite)} style={{
        borderBottom: `${expanded ? 'none' : '1px solid whitesmoke'}`,
        borderLeft: `${expanded ? '4px solid red' : '4px solid white'}`
      }}>
      <div className='testNameIndicator'>
        {suite.LeftIcon}
        <span style={{ paddingLeft: 4 }}>{suite.name}</span>
      </div>
    </li>
    <div className='panel' style={{ maxHeight: panelHeight }}>
      {expanded && <div className='errorSection' style={{borderBottom: `${expanded ? '1px solid whitesmoke' : 'none'}`}}>
          {suite.failureMessages.map(fm => {
            return <div className='errorDescription'>{fm}</div>
          })}
      </div>}
    </div>
  </Fragment>
}

export default SuiteTests