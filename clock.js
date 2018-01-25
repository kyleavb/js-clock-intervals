//variable declare
var domSecond = document.getElementById("second");
var domMinute = document.getElementById("minute");
var domHour = document.getElementById("hour");
var curTime;
var curSecond;
var curMinute;
var curHour;

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
function tick(){
	curTime = new Date();
	curSecond = curTime.getSeconds();
	curMinute = curTime.getMinutes();
	curHour = curTime.getHours();
	domSecond.style.transform = "rotate("+findPosition(curSecond, "second")+"deg)";
	domMinute.style.transform = "rotate("+findPosition(curMinute, "minute")+"deg)";
	domHour.style.transform = "rotate("+findPosition(curHour, "hour")+"deg)";	
}

setInterval(tick, 1000);