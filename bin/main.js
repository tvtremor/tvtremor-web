/* TVtremor JavaScript/jQuery
Autor/Author: TVtremor
Godina/Year: 2019

To do:
Dark mode/Tamni mod

*/

function jumbotronCookieSet(){
localStorage.setItem("showjumbotron", "false");
setNotifierJumbotron();
}

function setNotifierJumbotron()
	{
		var notifierJumbotronSetting = localStorage.getItem("showjumbotron");
		var notifierJumbotronObject = document.getElementsByClassName("notifier-jumbotron");

		if(notifierJumbotronSetting=="false")
			{notifierJumbotronObject[0].style.display = "none";}
		else
			{notifierJumbotronObject[0].style.display = "block";}
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

if(Month == 4 && DayOfMonth == 15){
//
}
}