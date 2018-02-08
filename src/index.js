var rGen = require('./generator');
var util = require('./util');

module.exports = (testResult) => {
	/*
	1. Check for the config to be set in package.json under "jesthtml".
	2. Available Config Parameters
		> "title": Title for the test result page. Default "Test Report"
		> "heading": Heading to be shown on the html page for report. Default "Test Report"
		> "footerMsg": Any message to be shown on the footer of the generated html report. Default null
		> "destination": Outout file path for the report to be generated. Default "sbJestHtmlReport.html".
	*/
	var config = util.readConfig();
	console.log("dest: ", config.destination);
	
	// Generate Report
	rGen.generateReport(testResult, config);

	// Return the results as required by Jest
	return testResult;
};
