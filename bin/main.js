function JumbotronCookieSet(){
localStorage.setItem("showjumbotron", "false");
SetJumbotron();
}

function SetJumbotron()
	{
		var JumbotronSetting = localStorage.getItem("showjumbotron");
		var JumbotronObject = document.getElementsByClassName("RedNotify");

		if(JumbotronSetting=="false")
			{
				JumbotronObject[0].style.display = "none";
			}
	
		else
			{
				JumbotronObject[0].style.display = "block";
			}

	}

$(document).on("click",".extendable-pic", function () {
   var clickedBtnSrc = $(this).attr('src');
   var fullSizeImgPath = clickedBtnSrc.replace("-thumb", '');
   fullSizeImgPath = fullSizeImgPath.replace("/thumbs", '');
   window.open(fullSizeImgPath, '_blank');
});

function Anniversaries(){
var Today = new Date();
var Month = Today.getMonth();
var DayOfMonth = Today.getDate();
var Year = Today.getFullYear();
var RZAnniversary = Year-1926;
var TVAnniversary = Year-1956;

if(Month == 4 && DayOfMonth == 15){
//
}
}