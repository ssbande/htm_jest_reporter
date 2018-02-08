## htm_jest_reporter
An npm package that gives you an immediate access to your test cases and their status in a very user friendly way. <br/>
> **NOTE:** This package has configuration settings which are mentioned later in the 'Configuration' section. If the settings are not mentioned explicitly in your application, then the default values mentioned in the 'Configuration'section will be used. 

## Installation
```shell
npm install htm_jest_reporter --save-dev
```

## Usage
Configure Jest to process the test results by adding the following entry to the Jest config (jest.config.js):
```javascript
{
	"testResultsProcessor": "./node_modules/htm_jest_reporter"
}
```
Then when you run Jest from within the terminal, a file called *sbJestHtmlReport.html* will be created within your root folder containing information about your tests.

### Usage with package.json
We can configure Jest from package.json as well by adding the following as a new line:
```javascript
"jest": {"testResultsProcessor": "./node_modules/htm_jest_reporter" }
```

## Configuration
The configurations are done directly within your *package.json* file

| Property | Type | Description | Default
|--|--|--|--|
| `title` | `STRING` | The title of the document. This string will be outputted on the top of the page. | `"Test Report"`
| `destination` | `STRING` | The path to where the plugin will output the HTML report. The path must include the filename and end with .html | `"./sbJestHtmlReport.html"`
| `heading` | `STRING` | The heading for the report to show in the header of the report generated. | `"Test Report"`
| `footerMsg` | `STRING` | The message to be displayed in the footer of the report generated. | `<null>`

### Example configuration (package.json)
```javascript
{
	...
	"jesthtml": {
    	"title": "My Tests Report",
    	"destination": "test-report/index.html",
    	"footerMsg": "This is the footer message",
    	"heading": "Report Heading "
      }
}
```
