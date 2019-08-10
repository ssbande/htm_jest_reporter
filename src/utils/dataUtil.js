import _ from 'lodash';

export const formatTestSuite = (testSuite, index) => {
  console.log('testSuite: ', testSuite);
  return {
    name: _.join(testSuite.ancestorTitles) || 'anonymous Test'
  }
}