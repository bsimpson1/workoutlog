 var animal = (function(){

 	var legs =2;
 	var species ="bear";
 	return{
		
 		legCount: function(){
 			console.log(legs);
 		},
 		speciesType: function(){
 			console.log(species);
 		},
 		morphAnimal: function(newCreature){
 			species =newCreature;

 		}
 	};
})();
animal.legCount();
animal.speciesType();
animal.morphAnimal("human");
animal.speciesType();