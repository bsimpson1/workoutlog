var myFunc = (function (){
	var privateVariable = "I'm a secret";
​
	function doSomething(){
		console.log("I'm making something happen. YAY!");
​
	}
​
	doSomething();
​
	return {
		log: function() {
			console.log("I'm another module, fear me!");
		},
​
		logPrivate: function(){
			console.log(privateVariable);
		}
	};
	
})();
​
module.exports = myFunc;