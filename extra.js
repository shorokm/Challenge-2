
	//var clock = $('#clock'),
	//	pointer1 = $('#pointer1'),
	//	pointer2 = $('#pointer2');

	/*var clock = document.getElementById('clock'),
		pointer1 = document.getElementById('pointer1');

	TweenLite.to(pointer1, 1, {opacity: 0, y: 50});*/

	// TweenLite.to(element (die geanimeerd word), duration (sec), {(wat geanimeerd zal worden, bv:opacity)})
	// y: 50 houdt in dat het 50 pixels naar beneden geanimeerd wordt of x en dan wordt het geanimeerd naar rechts



	//Tweede oefening

(function($) {

	var pointer2 = $('#pointer2');

	TweenLite.fromTo(pointer2, 1, {x: 500}, {x: 200});

});


