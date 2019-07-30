import fs from 'fs';
import path from 'path';

export const readConfig = () => {
	// default Configuration
	var config = {
		'destination': path.join(process.cwd(), 'jesthtm-report.html'),
		'footerMsg': '',
		'heading': 'Test Report',
		'title': 'Test Report',
	}
	
	// Check for the overriding configuration in the working folder. 
	// If present, change the values for above varibales. 
	var packageJson = require(path.join(process.cwd(), 'package.json'));
	try { 
		var cfg = (packageJson || {})['jesthtml']; 
		if (cfg) { 
			Object.assign(config, cfg); 
		} else {
			console.log("No overriding configuration found for jest html");
		}
	}
	catch (e) { 
		/** do nothing */ 
	}
	
	// Returning the expected config. DO NOT CHANGE THIS.
	return config;
}

