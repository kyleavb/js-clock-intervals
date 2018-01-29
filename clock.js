setInterval(function(){
	var curTime = new Date();
	var curSecond = curTime.getSeconds();
	var curMinute = curTime.getMinutes();
	var curHour = curTime.getHours() > 12 ? curTime.getHours() - 12 : curTime.getHours();
	document.getElementById("second").style.transform = "rotate("+ (curSecond*6)+"deg)";
	document.getElementById("minute").style.transform = "rotate("+ (curMinute*6)+"deg)";
	document.getElementById("hour").style.transform = "rotate("+ (curHour*30) + "deg)";	
}, 1000);