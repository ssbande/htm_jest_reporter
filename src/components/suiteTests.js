import React from 'react';
import { formatTestSuite } from '../utils';
import { IoIosArrowForward } from 'react-icons/io';

const SuiteTests = ({ suiteTests, index }) => {
  const suite = formatTestSuite(suiteTests, index);
  return <li className='test'>
    <div className='testNameIndicator' style={{cursor: `${suite.canExpand ? 'pointer' : ''}`}}>
      {suite.LeftIcon}
      <span style={{ paddingLeft: 4 }}>{suite.name}</span>
    </div>
    {suite.canExpand && <IoIosArrowForward size={24}/>}
  </li>
}

export default SuiteTests