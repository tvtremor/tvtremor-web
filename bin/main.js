/* TVtremor JavaScript/jQuery
Autor/Author: TVtremor
Godina/Year: 2019

To do:
Dark mode/Tamni mod

*/

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

function toggleDarkMode(){
	var modeSelection = localStorage.getItem("dark_mode");
	if(modeSelection=="false" || modeSelection=="" || modeSelection==undefined || modeSelection == null)
		localStorage.setItem("dark_mode", "true");
	else if (modeSelection=="true")
		localStorage.setItem("dark_mode", "false");
	
	location.reload();
	null;
}

function darkModeApply(){
var darkModeStyleDef = "body{background-color:rgb(15,15,15);}.bg-light{background-color:#070605 !important;}.jumbotron,.thumbnail{background-color:#050505;}h1,h2,h3,h4,h5,h6,p,em,li,b,p > a{filter:invert(100%) !important;}.foot-jumbotron > *, #footer-version,.napredak{filter:invert(0%) !important;}.tv-channel-jumbotron{background: linear-gradient(135deg, rgba(116,35,178,0.5) 0%,rgba(100,146,186,0.5) 100%);}.home-jumbotron{background: linear-gradient(135deg,rgba(217,221,126,0.5) 0%,rgba(35,205,252,0.5) 100%);}.about-jumbotron{background: linear-gradient(135deg,rgba(193,38,38,0.5) 0%,rgba(80,164,229,0.5) 100%);}.category-jumbotron-cro{background: linear-gradient(135deg, rgba(255,255,255,0.5) 0%,rgba(255,45,45,0.5) 100%);}.category-jumbotron-bih{background: linear-gradient(135deg,rgba(0,35,149,0.5) 0%,rgba(254,203,0,0.5) 100%);}.category-jumbotron-other{background: linear-gradient(135deg, rgba(81,205,255,0.5) 0%,rgba(255,137,139,0.5) 100%);}.dropdown-menu>*,.dropdown-menu{filter:invert(0%) !important;background-color:#000 !important;}.dropdown-item:hover{background-color:#3f0000;color:rgb(234,230,226);}.dropdown-item{color:rgb(234,230,226);}.napomena{filter:invert(0%) !important;}.help-item{filter:invert(0%) !important;}";
	
	var darkModeStyle = document.createElement("style");
	darkModeStyle.type = "text/css";
	darkModeStyle.innerText = darkModeStyleDef;
	document.head.appendChild(darkModeStyle);
}

$(document).on("click",".extendable-pic", function () {
   var clickedBtnSrc = $(this).attr('src');
   var fullSizeImgPath = clickedBtnSrc.replace("-thumb", '');
   fullSizeImgPath = fullSizeImgPath.replace("/thumbs", '');
   window.open(fullSizeImgPath, '_blank');
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
	var currentScrollPosition;
	
	if(state==1){
	document.getElementById("help-wrap-element").style.display = "none";
	document.getElementsByTagName("body")[0].style.overflow = "visible";
	window.scrollTo(0,currentScrollPosition);
	}
	else if(state == 0){
	currentScrollPosition = window.pageYOffset;
	document.getElementsByTagName("body")[0].style.overflow = "hidden";
	document.getElementById("help-wrap-element").style.display = "block";
	}
}