module.exports = `
body {
	font-family: 'Exo 2', sans-serif;
}

.navbar {
	margin-bottom: 0;
}
.header {
	height: 4px;
	background: lightGreen;
	-webkit-animation: slideBorder 1s ease; 
    animation: slideBorder 1s ease;
	-webkit-animation-direction: normal; 
    animation-direction: normal;
	margin-bottom: 20px;
}

@-webkit-keyframes slideBorder {
    0%   {background: red; width: 0; }
	50%   {background: orange; width: 50%;}
    100% {background: lightGreen; width: 100%; }
}

@keyframes slideBorder {
    0%   {background: red; width: 0; }
	50%   {background: orange; width: 50%; }
    100% {background: lightGreen; width: 100%; }
}

.footer {
	margin-top: 100px;
}

.navbar-default .navbar-brand {
	font-size: 25px;
	text-shadow: 1px 1px 2px #777;
	color: white;
}

.faLabel {
	font-size: 15px;
}

.fa {
	/* vertical-align: middle; */
	padding-left: 4px;
}

.fa-file-o {
	color: black;
}

.green {
	color: green;
}

.red {
	color: red;
}

.orange {
	color: orange;
}

.dodgerblue {
	color: dodgerblue;
}

.alignRight {
	text-align: right;
}

.alignLeft {
	text-align: left;
}

.alignCenter {
	text-align: center;
}

.textInLine {
  display: flex;
  flex-direction: row;
}
.textInLine:before, .textInLine:after{
  content: "";
  flex: 1 1;
  border-bottom: 1px dashed silver;
  border-top: 1px dashed silver;
  height: 4px;
  margin: auto;
  margin-left: 10px;
  margin-right: 10px;
}

.panel-group {
	margin-bottom: 5px;
	animation-duration: 1s;
}

.panel-group .panel {
	border-radius: 0;
}

.panel-default > .panel-heading {
	padding: 0px;
	background: #F8F8F8;
}

.panelTitle {
	padding-top: 20px;
	padding-left: 20px;
	padding-right: 20px;
	display: block;
}

.panelTitle:hover,
.panelTitle:focus  {
	text-decoration: none;
	background: #F0F0F0;
}

.suitSummary {
	font-size: 14px;
	margin-top: 10px;
	margin-bottom: 10px;
}

.suitSummary .filePath {
	font-style: italic;
}

.suitSummary> span {
	margin-right: 10px;
}

.panelBody{
	padding-top: 40px;
}

.test {
	padding: 0;
	border-bottom: 1px solid whitesmoke; 
}

.test:last-child {
	border-bottom: 0; 
}

.test:hover {
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.errorSummary {
	margin-top: 30px;
	background: white;
	border-radius: 0;
	border: 1px solid silver;
	color: red;
}

.errorBlock {
	background: #404040;
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.testContent {
	padding: 15px;
}

.graphPercent {
	font-size: 11px;
	color: whitesmoke;
	text-align: center;
	padding-top: 6px;
	padding-left: 5px;
}

.graphGreen {
	height: 25px;
	border: 1px solid #888;
	background: green;
	-webkit-animation: slideBackGreen 3s ease; 
    animation: slideBackGreen 3s ease;
	-webkit-animation-direction: normal; 
    animation-direction: normal;
	animation-delay: 0.5s;
	overflow: hidden;
}

@-webkit-keyframes slideBackGreen {
    0%   {background: whitesmoke; width: 0; }
    100% {background: green;}
}

@keyframes slideBackGreen {
    0%   {background: whitesmoke; width: 0; }
    100% {background: green; }
}

.graphRed {
	height: 25px;
	border: 1px solid #888;
	background: red;
	-webkit-animation: slideBackRed 3s ease; 
    animation: slideBackRed 3s ease;
	-webkit-animation-direction: normal; 
    animation-direction: normal;
	animation-delay: 0.5s;
	overflow: hidden;
}

@-webkit-keyframes slideBackRed {
    0%   {background: whitesmoke; width: 0; }
    100% {background: red; }
}

@keyframes slideBackRed {
    0%   {background: whitesmoke; width: 0; }
    100% {background: red; }
}

.graphOrange {
	height: 25px;
	border: 1px solid silver;
	background: orange;
	-webkit-animation: slideBackOrange 3s ease; 
    animation: slideBackOrange 3s ease;
	-webkit-animation-direction: normal; 
    animation-direction: normal;
	animation-delay: 0.5s;
	overflow: hidden;
}

@-webkit-keyframes slideBackOrange {
    0%   {background: whitesmoke; width: 0; }
    100% {background: orange; }
}

@keyframes slideBackOrange {
    0%   {background: whitesmoke; width: 0; }
    100% {background: orange; }
}

.permFooter {
	color: #D3D3D3;
	text-align: center;
	margin-top: 10px;
	margin-bottom: 20px;
	opacity: 0.3;
}

.footerMsg {
	coloR; #888;
	text-align: center;
	margin-top: 10px;
	padding: 5px;
}`
