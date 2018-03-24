var today = new Date();


document.getElementById('message').innerHTML = today.toDateString();
// voor de datum


function showTime(){
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    
    if(h == 0){
        h = 24;
    }

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    var time = h + ":" + m + ":" + s + " ";
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;
    
    setTimeout(showTime, 1000); 
}

showTime();
//code voor digital clock


var hours = new Date().getHours();
	//var hours = 1;

if (hours > 6 && hours < 19) {
// dag
	document.getElementById('daymobiel').style.opacity = 1;
	document.getElementById('day').style.opacity = 1;
	document.getElementById('nightmobiel').style.opacity = 0;
	document.getElementById('night').style.opacity= 0;
}

else {
// nacht
	document.getElementById('daymobiel').style.opacity = 0;
	document.getElementById('day').style.opacity = 0;
	document.getElementById('nightmobiel').style.opacity = 1;
	document.getElementById('night').style.opacity= 1;
} 

//animatie
TweenMax.from('#daymobiel', 0.5, {opacity:1, delay:0.2});
TweenMax.to('#nightmobiel', 0.5, {opacity: 1, delay:1});
TweenMax.from('#day', 0.5, {opacity:1, delay:0.2});
TweenMax.to('#night', 0.5, {opacity: 1, delay:1});
TweenMax.from('#message', 1, {opacity:0, scale:2, delay:1});
TweenMax.from('.clock', 1, {opacity:0, delay:2});



