var wakeuptime = 8;
var lunchtime = 11;
var naptime = 14;
var alarmSound = new Audio("preview.mp3");

var clock = document.getElementById("clock");

function showCurrentTime() {
    var meridian = "AM";
    var currentTime =  new Date();

    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    // Set hours
	  if (hours >= 12)
	  {
		  meridian = "PM";
	  }

	  if (hours > 12)
	  {
		  hours = hours - 12;
	  }
 
    // Set Minutes
    if (minutes < 10)
    {
        minutes = "0" + minutes;
    }
 
    // Set Seconds
    if (seconds < 10)
    {
        seconds = "0" + seconds;
    }
    var clockTime = hours + ':' + minutes + ':' + seconds + " " + meridian + "!";
 
    clock.innerHTML = clockTime;
}

function updateClock() {
    var time = new Date().getHours();
    var messageText = " ";
    var timeEventJS = document.getElementById("timeEvent");

    if (time == lunchtime) {
        alarmSound.play();
        messageText = "Time to eat!";
    } else if (time == wakeuptime) {
        alarmSound.play();
        messageText = "Wake Up!";
    } else if (time == naptime) {
        alarmSound.play();
        messageText = "Sleep NOW!";
    }

    console.log(messageText);
    timeEventJS.innerText = messageText;
    showCurrentTime();
}

setInterval(updateClock, 1000);

// Activates Wake-Up selector
var wakeUpTimeSelector =  document.getElementById("wakeUpTimeSelector");

var wakeUpEvent = function()
{
    wakeuptime = wakeUpTimeSelector.value;
};

wakeUpTimeSelector.addEventListener("change", wakeUpEvent);


// Activates Lunch selector
var lunchTimeSelector =  document.getElementById("lunchTimeSelector");

var lunchEvent = function()
{
    lunchtime = lunchTimeSelector.value;
};
if(lunchTimeSelector) {
    lunchTimeSelector.addEventListener("change", lunchEvent);
}

// Activates Nap-Time selector
var napTimeSelector =  document.getElementById("napTimeSelector");

var napEvent = function()
{
    naptime = napTimeSelector.value;
};

if (napTimeSelector) {
    napTimeSelector.addEventListener("change", napEvent);
}    