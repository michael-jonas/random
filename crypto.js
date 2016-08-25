'use strict';


var getPassword = function(str){
	var arr = str.split('');
	for(var i = 0; i < arr.length; i++){
		arr[i] = String.fromCharCode(arr[i].charCodeAt() - i);
	}

	return arr.toString();

	
}

var test = getPassword('1f5ii<<:');
console.log(test);
