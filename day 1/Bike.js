var bike = (function() {
​
	// private
	var wheels = 2;
	var bellSound = "ring, ring";
​
	return {
		model: "monocog",
​
		wheelCount: function() {
			console.log( wheels );
		},
​
		ringBell: function() {
			console.log( bellSound );
		},
​
		setBell: function( newSound ) {
			bellSound = newSound;
		}
	};
})();
​
console.log(bike.wheels);
bike.wheelCount();
bike.ringBell();
bike.setBell("dingaling");
bike.ringBell();