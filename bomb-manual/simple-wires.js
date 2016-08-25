'use strict'; 

exports = module.exports = function(serNum, numWires, wires){
	var red = 0;
	var black = 0;
	var blue = 0;
	var yellow = 0;
	var white = 0;
	var serial = serNum % 2 === 0 ? 'even' : 'odd';
	var wireObj = {'red': 0, 'black': 0, 'blue': 0, 'yellow': 0, 'white': 0};
	for(var i = 0; i < numWires; i++){
		wireObj[wires[i]]++;
	}

	switch(numWires){
		case 3:
			if(wireObj.red === 0){
				return 'second';
			} else if(wires[numWires - 1] === 'white'){
				return 'last';
			} else if(wireObj.blue > 1){
				return 'Last blue wire';
			} else{
				return 'last';
			}

			break;

		case 4:
			if(wireObj.red > 1 && serial === 'odd'){
				return 'last red wire';
			} else if(wires[numWires - 1] === 'yellow' && wireObj.red === 0){
				return 'first wire';
			} else if(wireObj.blue === 1){
				return 'first';
			} else if(wireObj.yellow > 1){
				return 'last';
			} else{
				return 'second wire';
			}

			break;

		case 5:
			if(wires[numWires - 1] === 'black' && serial === 'odd'){
				return 'fourth wire';
			} else if(wireObj.red === 1 && wireObj.yellow > 1){
				return 'first';
			} else if(wireObj.black === 0){
				return 'second';
			} else{
				return 'first';
			}

			break;

		case 6:
			if(wireObj.yellow === 0 && serial ==='odd'){
				return 'third';
			} else if(wireObj.yellow === 1 && wireObj.white > 1){
				return 'fourth';
			} else if(wireObj.red === 0){
				return 'last';
			} else{
				return 'fourth';
			}

			break;
	}
}


//test input
var serNum = 3;
var num = 4;
var wires = ['red', 'red', 'yellow', 'blue'];

//test
var result = module.exports(serNum, num, wires);
console.log(result);
