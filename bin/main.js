/* TVtremor JavaScript/jQuery
Autor/Author: TVtremor
Godina/Year: 2019

To do:
Dark mode/Tamni mod

*/

/*function doPageWork(){
	var modeSelection = localStorage.getItem("dark_mode");
	
	if(modeSelection=="true"){
		toggleDarkMode();
	}
	
}

function toggleDarkMode(){
	var modeSelection = localStorage.getItem("dark_mode");
	if(modeSelection=="false" || modeSelection=="" || modeSelection==undefined)
		localStorage.setItem("dark_mode", "true");
	else if (modeSelection=="true")
		localStorage.setItem("dark_mode", "false");
	location.reload();
	yield;
}
*/

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

if(Month == 4 && DayOfMonth == 15){
//
}
}