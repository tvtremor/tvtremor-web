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
	var darkModeStyleDef = "body{background-color:rgb(15,15,15);}.bg-light{background-color:#070605 !important;}.jumbotron{background-color:#050505;}h1,h2,h3,h4,h5,h6,p{filter:invert(100%);}p > a{filter:invert(100%) !important;}";
	
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