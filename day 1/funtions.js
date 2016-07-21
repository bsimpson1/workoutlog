// //functions declarations

// function square (number) {
// 	return number * number;
// }

// //function expression
// 		//anononmous funtion
// var square = function(first, second) {
// 	return first + second;

// };

// // function expression with identifier


// var factorial = function insidefactorial(number){
// 	if (number < 2){
// 		return 1;
// 	}

// 	return number * insidefactorial(number-1);
// };

// // HoISTING -- function declarations are always hoisted first NOT FUNCTIONS


// //function declaration is hoisted here
// var result = squair(11);

// function squair (number){
// 	return number * number;
// }

// //error
// var result2 = squair2(11);

// function squair2 (number){
// 	return number * number;
// }



//Parameters


function echo (value) {
	return value;
}
console.log(echo("hello"));
console.log(echo("dont panic",42));
console.log(echo("hello"));