var xmlbuilder = require('xmlbuilder');
var util = require('./util');

var bootStrapCss = require('./styles/bs.js');
var fontCss = require('./styles/fa.js');
var anCss = require('./styles/an.js');
var customCss = require('./styles/bs1.js');

var Convert = require('ansi-to-html');
var convert = new Convert({newline: true});

const path = require('path');
const fs = require('fs');

getBsCss = () => new Promise((resolve, reject) => {
	fs.readFile(bootStrapCss, 'utf8', (err, content) => {
		// If there were no errors, return the content of the given file.
		return !err ? resolve(content) : reject(`Could not find the specified style`);
	});
});

htmlMain = (config, testReport) => new Promise((resolve, reject) => {
	var x = xmlbuilder.create('html')
		.ele('head')
			.ele('meta', {'charset': 'utf-8'}).up()
			.ele('title', {}, config.title).up()
			.raw(`<style>${bootStrapCss}</style>`)
			.raw(`<style>${fontCss}</style>`)
			.raw(`<style>${anCss}</style>`)
			.raw(`<style>${customCss}</style>`)
			.ele('link', {'type': 'text/css', 'rel': 'stylesheet', 'href': 'https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css'}).up()
			.ele('script', {'src':'https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js'}, '  ').up()
			.ele('script', {'src': 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js', 'crossorigin': 'anonymous'}, 'console.log("as")').up()
			.ele('script', {}, `
				$(document).ready(function(){
					var list = $('div[id^="panel_"]')
					var i = 0
					while (i != list.length ) {
						var panelName = '#panel_' + (i+1).toString();
						var delay = 0.25 * (i+1);
						$(panelName).attr('style', 'animation-delay: ' + delay + 's');
						i++;
					}
				});

				function abc(i, j) {
					var iconElement = '#iconTest' + i + j;
					if($(iconElement).hasClass('fa-eye')) {
						$(iconElement).removeClass('fa-eye');
						$(iconElement).addClass('fa-eye-slash');
					} else {
						$(iconElement).removeClass('fa-eye-slash');
						$(iconElement).addClass('fa-eye');
					}
				}
				
				function addAnimationDelayToPanel(i) {
					alert('Panel: ' + i);
					
				}
			`).up()
		.up()
		.ele('body')
			.ele('nav', {'class': 'navbar navbar-default navbar-static-top'})
				.ele('div', {'id': 'headDiv', 'class': 'container'})
					.ele('div', {'class': 'navbar-header'})
						.ele('button', {'type': 'button', 'class':'navbar-toggle collapsed', 'data-toggle':'collapse', 'data-target': '#bs-example-navbar-collapse-1', 'aria-expanded':'false'})
							.ele('span', {'class': 'sr-only'}, 'Toggle Test Summary Data').up()
							.ele('span', {'class': 'icon-bar'}, ' ').up()
							.ele('span', {'class': 'icon-bar'}, ' ').up()
							.ele('span', {'class': 'icon-bar'}, ' ').up()
						.up()
						.ele('a', {'class': 'navbar-brand reportHeading ', 'href': '#'}, config.heading).up()
					.up()
					.ele('div', {'class': 'collapse navbar-collapse', 'id': 'bs-example-navbar-collapse-1'})
						.ele('ul', {'class':'nav navbar-nav navbar-right'})
							.ele('li').ele('a', {'href': '#', 'class': 'faLabel '}, testReport.numTotalTestSuites + ' ').ele('i', {'class': 'fa fa-files-o fa-2x'}, ' ').up().up().up()
							.ele('li').ele('a', {'href': '#', 'class': 'faLabel '}, testReport.numTotalTests + ' ').ele('i', {'class': 'fa fa-file-o fa-2x'}, ' ').up().up().up()
							.ele('li').ele('a', {'href': '#', 'class': 'faLabel '}, testReport.numPassedTests +' ').ele('i', {'class': 'fa fa-check-circle fa-2x green'}, ' ').up().up().up()
							.ele('li').ele('a', {'href': '#', 'class': 'faLabel '}, testReport.numFailedTests +' ').ele('i', {'class': 'fa fa-times-circle fa-2x red'}, ' ').up().up().up()
							.ele('li').ele('a', {'href': '#', 'class': 'faLabel '}, testReport.numPendingTests + ' ').ele('i', {'class': 'fa fa-pause-circle fa-2x orange'}, ' ').up().up().up()
							.ele('li', {'class': 'dropdown'})
								.ele('a', {'href': '#', 'class': 'dropdown-toggle faLabel ',
									'data-toggle': 'dropdown', 'role': 'button', 
									'aria-haspopup': 'true', 'aria-expanded': 'false'},
									testReport.snapshot.total + ' ')
									.ele('i', {'class': 'fa fa-camera fa-2x dodgerblue'}, ' ').up()
									.ele('span', {'class': 'caret'}).up()
								.up()
								.ele('ul', {'class':'dropdown-menu'})
									.ele('li')
										.ele('div', {'class': 'row', 'style': 'padding: 8px'})
											.ele('span', {'style': 'text-align: left', 'class': 'col-sm-8'}, 'Total').up()
											.ele('span', {'style': 'text-align: right', 'class': 'col-sm-4'}, testReport.snapshot.total).up()
										.up()
									.up()
									.ele('li', {'role': 'separator', 'class': 'divider'}).up()
									.ele('li')
										.ele('div', {'class': 'row', 'style': 'padding: 8px'})
											.ele('span', {'style': 'text-align: left', 'class': 'col-sm-8'}, 'Added').up()
											.ele('span', {'style': 'text-align: right', 'class': 'col-sm-4'}, testReport.snapshot.filesAdded).up()
										.up()
									.up()
									.ele('li', {'role': 'separator', 'class': 'divider'}).up()
									.ele('li')
										.ele('div', {'class': 'row', 'style': 'padding: 8px'})
											.ele('span', {'style': 'text-align: left', 'class': 'col-sm-8'}, 'Removed').up()
											.ele('span', {'style': 'text-align: right', 'class': 'col-sm-4'}, testReport.snapshot.filesRemoved).up()
										.up()
									.up()
									.ele('li', {'role': 'separator', 'class': 'divider'}).up()
									.ele('li')
										.ele('div', {'class': 'row', 'style': 'padding: 8px'})
											.ele('span', {'style': 'text-align: left', 'class': 'col-sm-8'}, 'Updated').up()
											.ele('span', {'style': 'text-align: right', 'class': 'col-sm-4'}, testReport.snapshot.filesUpdated).up()
										.up()
									.up()

								.up()
							.up()
						.up()
					.up()
				.up()
			.up()
			.ele('div', {'class': 'header'}, ' ').up()
			.ele('div', {'class': 'container'})
				.ele('div', {'style': 'padding: 4px;', 'class': 'row'})
					.ele('div', {'class': 'alignLeft col-sm-3'}, ' ').ele('i', {'class': 'fa fa-hourglass-start fa-2x animated rotateIn'}, ' ').up().ele('span', {}, ` ${(new Date(testReport.startTime)).toLocaleString()}`).up().up()
					.ele('div', {'class': 'alignCenter col-sm-6 textInLine animated bounceInDown'}, ` ooo `).up()
					.ele('div', {'class': 'alignRight col-sm-3'}, ' ').ele('i', {'class': 'fa fa-hourglass-end fa-2x animated rotateIn'}, ' ').up().ele('span', {}, ` ${(new Date(Date.now())).toLocaleString()}`).up().up()
				.up()
				.ele('hr', {}, ' ').up();
				
	// Looping on test Suites. 
	for(var i = 1; i <= testReport.numTotalTestSuites; i++) {
		var totalTestsInSuite = testReport.testResults[i-1].testResults.length;
		var passed = 0;
		var failed = 0;
		var pending = 0;
		
		var passPercent = 0;
		var failPercent = 0;
		var pendPercent = 0;

		for (var j = 1; j <= testReport.testResults[i-1].testResults.length; j++) {
			var testCase = testReport.testResults[i-1].testResults[j-1];
			
			testCase.status.toUpperCase() == 'PASSED' ? passed++ : (testCase.status.toUpperCase() == 'FAILED' ? failed++ : pending++)
			passPercent = (passed/totalTestsInSuite * 100).toFixed(2);
			failPercent = (failed/totalTestsInSuite * 100).toFixed(2);
			pendPercent = (pending/totalTestsInSuite * 100).toFixed(2);
		}
		
		console.log('Passed: ' + passPercent + '%');
		console.log('Failed: ' + failPercent + '%');
		console.log('Pending: ' + pendPercent + '%');
		
		
		var item = x.ele('div', {'class': 'row', 'on': 'addAnimationDelayToPanel(' + i + ')'})
	    .ele('div', {'class':'panel-group animated fadeInUp', 'id': 'panel_' + i})
			.ele('div', {'class':'panel panel-default'})
				.ele('div', {'class':'panel-heading panelHeading'})
					.ele('h4', {'class':'panel-title container'})
						.ele('a', {'data-toggle':'collapse', 'href':'#cp'+i.toString(), 'class':'panelTitle row'})
							.ele('div', {'class': 'col-sm-10'}, `Suite - ${i.toString()}`)
								.ele('div', {}, testReport.testResults[i-1].testFilePath.toUpperCase()).up()
								.ele('hr', {}, ' ').up()
								.ele('div', {'class':'suitSummary details'})
									.ele('span', {}, 'Test Summary in Suite :: ').up()
									.ele('span', {'class': 'green'}, 'Passed: ' + testReport.testResults[i-1].numPassingTests).up()
									.ele('span', {'class': 'red'}, 'Failed: ' + testReport.testResults[i-1].numFailingTests).up()
									.ele('span', {'class': 'orange'}, 'Pending: '+ testReport.testResults[i-1].numPendingTests).up()
									.ele('span', {}, `Time: ${(testReport.testResults[i-1].perfStats.end - testReport.testResults[i-1].perfStats.start) / 1000} seconds `).up()
								.up()
							.up()
							.ele('div', {'class': 'col-sm-2'})
								.ele('div', {'style': 'width: ' + passPercent + '%;', 'class': 'graphGreen'})
									.ele('div', {'class': 'graphPercent'}, `${passPercent} %`).up()
								.up()
								.ele('div', {'style': 'height: 3px; width: 100%;'},' ').up()
								.ele('div', {'style': 'width: ' + failPercent + '%;', 'class': 'graphRed'})
									.ele('div', {'class': 'graphPercent'}, `${failPercent} %`).up()
								.up()
								.ele('div', {'style': 'height: 3px; width: 100%;'},' ').up()
								.ele('div', {'style': 'width: ' + pendPercent + '%;', 'class': 'graphOrange'})
									.ele('div', {'class': 'graphPercent'}, `${pendPercent} %`).up()
								.up()
							.up()
						.up()
					.up()
				.up()
				.ele('div', {'id': 'cp'+i.toString(), 'class':'panel-collapse collapse'})
					.ele('div', {'class':'panel-body panelBody container'});
		
		for (var j = 1; j <= testReport.testResults[i-1].testResults.length; j++) {
			var testCase = testReport.testResults[i-1].testResults[j-1];
			var suitStatusCss = testCase.status.toUpperCase() == 'FAILED' 
									? 'red' 
									: (testCase.status.toUpperCase() == 'PASSED' 
										? 'green' 
										: (testCase.status.toUpperCase() == 'PENDING' 
											? 'orange' : 'white'));
			var test = item.ele('div', {'class': 'test row', 'style':'border-left: 5px solid ' + suitStatusCss});
								
								
								
			if(testCase.status.toUpperCase() == 'PASSED') {
				test = test.ele('div', {'class':'col-sm-10 testContent'}, testCase.fullName).up()
						   .ele('div', {'class':'col-sm-2 alignRight'})
						    .ele('i', {'class':'fa fa-check green testContent'}, ' ').up()
						   .up();
			}
			
			if(testCase.status.toUpperCase() == 'FAILED') {
				var html = "";
				test = test.ele('div', {'id': `mainDivTest${i}${j}`,'class':'col-sm-10 testContent', 'data-toggle':'collapse', 'data-target':`#test${i}${j}`, 'onClick':`abc(${i}, ${j})`, 'style': 'cursor: pointer'}, testCase.fullName).up()
							.ele('div', {'class':'col-sm-2 alignRight', 'data-toggle':'collapse', 'data-target':`#test${i}${j}`})
								.ele('i', {'id': `iconTest${i}${j}`, 'class':'fa fa-eye red testContent', 'onClick':`abc(${i}, ${j})`, 'style': 'cursor: pointer'}, ' ').up()
							.up()
							.ele('div', {'class':'col-sm-12 collapse', 'id':`test${i}${j}`})
								.ele('div', {'class':'well well-lg errorSummary'})
									.ele('div', {}, 'Error Stack Trace').up()
									.ele('hr', {}, ' ').up()
									.ele('div', {'class':'well well-lg errorBlock'})
										.raw(convert.toHtml(`<span style='color: #fff'>${testCase.failureMessages[0].slice(7)}</span>`))
									.up()
									.ele('hr', {}, ' ').up()
								.up()
							.up();
			}

			if(testCase.status.toUpperCase() == 'PENDING') {
				test = test.ele('div', {'class':'col-sm-10 testContent'}, testCase.fullName).up().ele('div', {'class':'col-sm-2 alignRight'}).ele('i', {'class':'fa fa-pause orange testContent'}, ' ').up().up();
			}
			
			test = test.up();
		}
		
		item = item.up().up().up().up();			
	}			
	
	x = x.up()
		 .ele('nav', {'class': 'navbar navbar-default navbar-bottom footer'})
			.ele('div', {'id': 'footDiv', 'class': 'container'})
				.ele('div', {'class': 'footerMsg'}, config.footerMsg).up()
				.ele('div', {'class': 'permFooter'})
					.ele('hr', {}, ' ').up()
					.ele('i', {'class':'fa fa-heart'}, ' ').up()
					.ele('span', {}, ' SB ').up()
				.up()
			.up()
		 .up()
		.up(); 

	return resolve(x);
})

function generateReport(testReport, config) {
	
	/* -- PROCESS -- 
	1. Create HTML 
	2. Write File to destination 
	3. Throw errors if any.
	*/
	
	// console.log("config from inside: ", config);
	
	// mainHtml = htmlMain(config, testReport);
	
	return htmlMain(config, testReport)
		.then((mainHtml) => {
			util.writeFile(config.destination, mainHtml)
			.then((x) => {
				console.log("File written to ", config.destination);
			})
		})
		.catch(error => console.log('error', error));
}



module.exports.generateReport = generateReport;