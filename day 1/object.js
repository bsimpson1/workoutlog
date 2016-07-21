


var bike= {
	wheels: 2;
	hasBell: false,
	hasHandlebars: true,

	//method

	ringBell: function(){
		if (this.hasBell){
			console.log( "ring, ring" );
			
			}else {
				console.log( "i need a bell" );

		}
	},
 
		addbell: function(){
			this.hasBell =true;
		}
	
};


