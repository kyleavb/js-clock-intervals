//variable declare
var domSecond = document.getElementById("second");
var domMinute = document.getElementById("minute");
var domHour = document.getElementById("hour");
var curTime = new Date();
var curSecond = curTime.getSeconds();
var curMinute = curTime.getMinutes();
var curHour = curTime.getHours();

//pass current time and type and return degree change
function findPosition(num, type){
	if(type === "second" || type ==="minute"){
		return(num * 6);
	}else{
		return(num * 30);
	}
}

//change hour to 12-hour formate
if(curHour > 12){
	curHour -= 12;
}

//determine and set positions
domSecond.style.transform = "rotate("+findPosition(curSecond, "second")+"deg)";
domMinute.style.transform = "rotate("+findPosition(curMinute, "minute")+"deg)";
domHour.style.transform = "rotate("+findPosition(curHour, "hour")+"deg)";