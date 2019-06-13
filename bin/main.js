/* TVtremor JavaScript/jQuery
Autor/Author: TVtremor
Godina/Year: 2019

*/

doPageWork();

var lastImagePath;

function doPageWork(){
	checkDarkMode();
}

function checkDarkMode(){
	var darkModeSelection = localStorage.getItem("dark_mode");
	
	if(darkModeSelection=="true"){
		darkModeApply();
	}
	else{
		null;
	}
	null;
}

function toggleDarkMode(state){
	var modeSelection = localStorage.getItem("dark_mode");
	if(state==0)
		localStorage.setItem("dark_mode", "false");
	else
		localStorage.setItem("dark_mode", "true");
	
	location.reload();
	null;
}

function darkModeApply(){
var darkModeStyleDef = "body{background-color:rgb(15,15,15);}.bg-light{background-color:#070605 !important;}.jumbotron,.thumbnail{background-color:#050505;}h1,h2,h3,h4,h5,h6,p,em,li,b,p > a, .napomena-n{filter:invert(100%) !important;}.foot-jumbotron > *, #footer-version,.napredak{filter:invert(0%) !important;}.tv-channel-jumbotron{background: linear-gradient(135deg, rgba(116,35,178,0.5) 0%,rgba(100,146,186,0.5) 100%);}.home-jumbotron{background: linear-gradient(135deg,rgba(217,221,126,0.5) 0%,rgba(35,205,252,0.5) 100%);}.about-jumbotron{background: linear-gradient(135deg,rgba(193,38,38,0.5) 0%,rgba(80,164,229,0.5) 100%);}.category-jumbotron-cro{background: linear-gradient(135deg, rgba(255,255,255,0.5) 0%,rgba(255,45,45,0.5) 100%);}.category-jumbotron-bih{background: linear-gradient(135deg,rgba(0,35,149,0.5) 0%,rgba(254,203,0,0.5) 100%);}.category-jumbotron-other{background: linear-gradient(135deg, rgba(81,205,255,0.5) 0%,rgba(255,137,139,0.5) 100%);}.dropdown-menu>*,.dropdown-menu{filter:invert(0%) !important;background-color:#000 !important;}.dropdown-item:hover{background-color:#3f0000;color:rgb(234,230,226);}.dropdown-item{color:rgb(234,230,226);}.napomena{filter:invert(0%) !important;}.help-item{filter:invert(0%) !important;}";
	
	var darkModeStyle = document.createElement("style");
	darkModeStyle.type = "text/css";
	darkModeStyle.innerText = darkModeStyleDef;
	document.head.appendChild(darkModeStyle);
}

$(document).on("click",".extendable-pic", function () {
   var ImgPath = $(this).attr('src');
   lastImagePath = ImgPath;
   handleImages(0, ImgPath);
});

function Anniversaries(){
var today = new Date();
var month = Today.getMonth();
var dayOfMonth = Today.getDate();
var year = Today.getFullYear();
var RZAnniversary = Year-1926;
var TVAnniversary = Year-1956;

if(month == 4 && dayOfMonth == 15){
//
}
}

function handleHelp(state){
	
	if(state==1){
	document.getElementById("help-wrap-element").style.display = "none";
	document.getElementsByTagName("body")[0].style.overflow = "visible";
	}
	else if(state == 0){
	document.getElementsByTagName("body")[0].style.overflow = "hidden";
	document.getElementById("help-wrap-element").style.display = "block";
	}
}

function handleImages(state, url){
	document.getElementById("image-frame").src = url;
	if(state == 1){
	document.getElementById("image-viewer-div").style.display = "none";
	document.getElementsByTagName("body")[0].style.overflow = "visible";	
	}
	else if(state == 0){
	document.getElementById("image-viewer-div").style.display = "block";
	document.getElementsByTagName("body")[0].style.overflow = "hidden";	
	}
}

function openImgNewTab(){
	window.open(lastImagePath,"_blank");
}