import React from 'react';
import { useStateValue } from '../context/state';
import { FaFolderOpen } from "react-icons/fa";
import { MdDone, MdClear, MdTimer, MdFilterNone } from "react-icons/md";
import { formatTestSuiteLocation, graphColors } from '../utils';
import { PieChart, Pie, Sector, Cell } from 'recharts';

const SuiteHeading = ({ suite, index }) => {
  const [{ config }] = useStateValue();

  const RADIAN = Math.PI / 180;
  const graphData = [
    { name: 'Passed', value: suite.numPassingTests },
    { name: 'Failed', value: suite.numFailingTests },
    { name: 'Pending', value: suite.numPendingTests }
  ];

  console.log('suite: ', suite);
  return <div className='suiteHeading'>
    <div>
      <div style={{ marginBottom: '8px' }}>
        <div className='suiteName'>{`Suite - ${index + 1}`}</div>
        <div className='suiteLocation'>
          <FaFolderOpen size={14} />
          <span>{formatTestSuiteLocation(suite.testFilePath, config.rootFolder)}</span>
        </div>
      </div>
      <div className='suiteSummary'>
        <ul>
          <li>
            <MdTimer size={14} color='gray' />
            <span style={{ paddingLeft: 2 }}>{`${5}ms`}</span>
          </li>
          <li>
            <MdFilterNone size={14} color='#50c6d8' />
            <span style={{ paddingLeft: 2 }}>{`${suite.testResults.length}`}</span>
          </li>
          <li>
            <MdDone size={14} color='limegreen' />
            <span style={{ paddingLeft: 2 }}>{`${suite.numPassingTests}`}</span>
          </li>
          <li>
            <MdClear size={14} color='red' />
            <span style={{ paddingLeft: 2 }}>{`${suite.numFailingTests}`}</span>
          </li>
        </ul>
      </div>
    </div>
    <div>
      <PieChart width={80} height={80} >
        <Pie data={graphData} innerRadius={25} outerRadius={35} fill="#8884d8" paddingAngle={1} cx={35} cy={35}>
          {graphData.map((entry, index) => <Cell fill={graphColors[index % graphColors.length]} />)}
        </Pie>
      </PieChart>
    </div>
  </div>
}

export default SuiteHeading