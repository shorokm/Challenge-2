$(function(){
	FlipClock.Lang.Custom = { hours:'Hours', minutes:'Minutes', seconds:'Seconds' };
		var opts = {
			clockFace: 'TwentyFourHourClock',
			countdown: true,
			language: 'Custom'
		}; 
			$('.digital-clock').FlipClock(opts); 
});
// voor de digitale klok


var today = new Date();

document.getElementById('message').innerHTML = today.toString();
// voor de datum



var currentTime = new Date().getHours();
		if (6 <= currentTime && currentTime < 19) {
       		document.getElementById('day').style.opacity = 1;
    		}
		else {
    		document.getElementById('day').style.opacity = 0;
    		} 
// deze code is voor de background voor de ipad,desktop en iMac versies


var currentTime = new Date().getHours();
		if (6 <= currentTime && currentTime < 19) {
       		document.getElementById('daymobiel').style.opacity = 1;
    		}
		else {
    		document.getElementById('daymobiel').style.opacity = 0;
    		} 
// deze code is alleen voor de background voor de mobiele versie