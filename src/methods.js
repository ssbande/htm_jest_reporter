const path = require('path');
const fs = require('fs');
const xmlbuilder = require('xmlbuilder');
const mkdirp = require('mkdirp');
const stripAnsi = require('strip-ansi');
const defaultStylesheet = require('./style');

/**
 * Fetches config from package.json
 */
const packageJson = require(path.join(process.cwd(), 'package.json'));
const config = {};
try { const cfg = (packageJson || {})['jest-html-reporter']; if (cfg) { Object.assign(config, cfg); } }
catch (e) { /** do nothing */ }
/**
 * Logs a message of a given type in the terminal
 * @param {String} type
 * @param {String} msg
 * @return {Object}
 */
const logMessage = (type, msg) => {
	const types = { default: '\x1b[37m%s\x1b[0m', success: '\x1b[32m%s\x1b[0m', error: '\x1b[31m%s\x1b[0m' };
	const logColor = (!types[type]) ? types.default : types[type];
	const logMsg = `jest-html-reporter >> ${msg}`;
	console.log(logColor, logMsg);
	return { logColor, logMsg }; // Return for testing purposes
};
/**
 * Returns the output path for the test report
 * @return {String}
 */
const getOutputFilepath = () => config.outputPath || process.env.JEST_HTML_REPORTER_OUTPUT_PATH || process.env.TEST_REPORT_PATH || path.join(process.cwd(), 'test-report.html');
/**
 * Creates a file at the given destination
 * @param  {String} filePath
 * @param  {Any} 	content
 */
const writeFile = (filePath, content) => new Promise((resolve, reject) => {
	mkdirp(path.dirname(filePath), (err) => !err ? resolve(fs.writeFile(filePath, content)) : reject(`Something went wrong when creating the file: ${err}`));
});
/**
 * Returns the stylesheet to be imported in the test report.
 * If styleOverridePath is not defined, it will return the default stylesheet (style.js).
 * @param  {String} filePath
 * @return {Promise}
 */
const getStylesheet = () => new Promise((resolve, reject) => {
	const pathToStylesheet = config.styleOverridePath || process.env.JEST_HTML_REPORTER_STYLE_OVERRIDE_PATH;
	// If the styleOverridePath has not been set, return the default stylesheet (style.js).
	if (!pathToStylesheet) { return resolve(defaultStylesheet); }
	fs.readFile(pathToStylesheet, 'utf8', (err, content) => {
		// If there were no errors, return the content of the given file.
		return !err ? resolve(content) : reject(`Could not find the specified styleOverridePath: '${pathToStylesheet}'`);
	});
});
/**
 * Sets up a basic HTML page to apply the content to
 * @return {xmlbuilder}
 */
const createHtml = (stylesheet) => xmlbuilder.create({
	html: {
		head: {
			meta: { '@charset': 'utf-8' },
			title: { '#text': config.pageTitle || process.env.JEST_HTML_REPORTER_PAGE_TITLE || process.env.TEST_REPORT_TITLE || 'Test suite' },
			style: { '@type': 'text/css', '#text': stylesheet },
		},
		body: {
			h1: { '@id': 'title', '#text': config.pageTitle || process.env.JEST_HTML_REPORTER_PAGE_TITLE || process.env.TEST_REPORT_TITLE || 'Test suite' },
		},
	},
});
/**
 * Returns a HTML containing the test report.
 * @param  {String} stylesheet
 * @param  {Object} testData		The test result data
 * @return {xmlbuilder}
 */
const renderHTML = (testData, stylesheet) => new Promise((resolve, reject) => {
	// Make sure that test data was provided
	if (!testData) { return reject('Test data missing or malformed'); }
	// Create an xmlbuilder object with HTML and Body tags
	const htmlOutput = createHtml(stylesheet);
	// Timestamp
	htmlOutput.ele('div', { id: 'timestamp' }, `Start: ${(new Date(testData.startTime)).toLocaleString()}`);
	// Test Summary
	htmlOutput.ele('div', { id: 'summary' }, `
		${testData.numTotalTests} tests /
		${testData.numPassedTests} passed /
		${testData.numFailedTests} failed /
		${testData.numPendingTests} pending
	`);
	// Loop through each test suite
	testData.testResults.forEach((suite) => {
		if (!suite.testResults || suite.testResults.length <= 0) { return; }
		// Suite filepath location
		htmlOutput.ele('div', { class: 'suite-info' }, `
			${suite.testFilePath} (${(suite.perfStats.end - suite.perfStats.start) / 1000}s)
		`);
		// Suite Test Table
		const suiteTable = htmlOutput.ele('table', { class: 'suite-table', cellspacing: '0', cellpadding: '0' });
		// Loop through each test case
		suite.testResults.forEach((test) => {
			const testTr = suiteTable.ele('tr', { class: test.status });
				// Suite Name(s)
				testTr.ele('td', { class: 'suite' }, test.ancestorTitles.join(' > '));
				// Test name
				const testTitleTd = testTr.ele('td', { class: 'test' }, test.title);
				// Test Failure Messages
				if (test.failureMessages && (config.includeFailureMsg || process.env.JEST_HTML_REPORTER_INCLUDE_FAILURE_MSG)) {
					const failureMsgDiv = testTitleTd.ele('div', { class: 'failureMessages' })
					test.failureMessages.forEach((failureMsg) => {
						failureMsgDiv.ele('p', { class: 'failureMsg' }, stripAnsi(failureMsg));
					});
				}
				// Test Result
				testTr.ele('td', { class: 'result' }, (test.status === 'passed') ?
					`${test.status} in ${test.duration / 1000}s`
					: test.status
				);
		});
	});
	return resolve(htmlOutput);
});
/**
 * Generates and writes HTML report to a given path
 * @param  {Object} data   Jest test information data
 * @param  {String} destination The destination of the generated report
 * @return {Promise}
 */
const createReport = (data, destination) => {
	return getStylesheet()
		.then(renderHTML.bind(null, data))
		.then(writeFile.bind(null, destination))
		.then(() => logMessage('success', `Report generated (${destination})`))
		.catch(error => logMessage('error', error));
};

/**
 * Exports
 */
module.exports = {
	createReport,
	createHtml,
	getOutputFilepath,
	getStylesheet,
	logMessage,
	renderHTML,
	writeFile,
};
