import React, { useState, Fragment } from 'react';
import { IoIosCloseCircleOutline } from "react-icons/io";

const NoTests = ({ suiteTests }) => {
  const [expanded, setExpanded] = useState(false);
  const [panelHeight, setPanelHeight] = useState('0px');
  const handleClick = () => {
    setExpanded(!expanded);
    setPanelHeight(expanded ? '0px' : '100%')
  }

  return <Fragment>
    <li className={`test sweep-to-right ${expanded ? 'active' : ''}`}
      onClick={handleClick} style={{
        borderBottom: `${expanded ? 'none' : '1px solid whitesmoke'}`,
        borderLeft: `${expanded ? '4px solid red' : '4px solid white'}`
      }}>
      <div className='testNameIndicator'>
        <IoIosCloseCircleOutline size={24} color='red' />
        <span style={{ paddingLeft: 4 }}>Test suite failed to run ...</span>
      </div>
    </li>
    <div className='panel' style={{ maxHeight: panelHeight }}>
      {expanded && <div className='errorSection' style={{ borderBottom: `${expanded ? '1px solid whitesmoke' : 'none'}` }}>
        <div className='errorDescription'>{suiteTests.failureMessage}</div>
      </div>}
    </div>
  </Fragment>
}

export default NoTests
