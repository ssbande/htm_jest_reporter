import React from 'react';
import _ from 'lodash';
import { IoIosCheckmarkCircleOutline, IoIosCheckmarkCircle, IoIosCloseCircleOutline, IoIosCloseCircle, IoMdRadioButtonOn } from "react-icons/io";

const getTestBorderColor = {
  'passed': 'limegreen',
  'failed': 'red',
  'pending': '#ffce42'
}

const getIndicativeIcon = {
  'passed': <IoIosCheckmarkCircleOutline size={24} color='limegreen'/>,
  'failed': <IoIosCloseCircleOutline size={24} color='red'/>,
  'pending': <IoMdRadioButtonOn size={24} color='#ffce42'/>
}

export const formatTestSuite = (testSuite, index) => {
  console.log('testSuite: ', testSuite);
  return {
    name: testSuite.fullName,
    borderColor: getTestBorderColor[testSuite.status],
    LeftIcon: getIndicativeIcon[testSuite.status],
    canExpand: testSuite.status === 'failed'
  }
}

export const formatTestSuiteLocation = (loc, base) => loc.slice(loc.indexOf(`/${base}/`) + 1, loc.length);

export const getSuiteName = (suite, index) => {
  let allTestAncestors = [];
  suite.testResults.forEach(t => {
    allTestAncestors.push(t.ancestorTitles);
  });

  return !!_.uniq(_.flatten(allTestAncestors)).length
    ? _.join(_.uniq(_.flatten(allTestAncestors)), ', ')
    : index;
}