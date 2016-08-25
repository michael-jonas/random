'use strict';

//TODO: How to get color of the strip that lights up in real time
exports = module.exports = function(button, indicator, numBattery) {
	if(button.is('blue') && button.says('abort')) {
		console.log('hold the button');
		releaseHeldButton();
	}

	else if(numBattery > 1 && button.says('detonate')) {
		return "Press and immediately release the button";
	}

	else if(button.is('white') && indicator.isLit() && indicator.hasLabel('CAR')) {
		console.log('hold the button');
		releaseHeldButton();
	}

	else if(numBattery > 2 && indicator.isLit() && indicator.hasLabel('FRK')) {
		return "Press and immediately release the button";

	}

	else if(button.is('yellow')) {
		console.log('hold the button');
		releaseHeldButton();
	}

	else if(button.is('red') && button.says('Hold')) {
		return "Press and immediately release the button";
	}

	else{
		console.log('hold the button');
		releaseHeldButton();
	}

}

//Helper methods
var releaseHeldButton = function(stripColor) {
	switch(stripColor) {
		case 'blue':
			return "release when countdown timer has a 4 in any position";
			break;
		case 'white':
			return "release when the countdown timer has a 1 in any position";
			break;
		case 'yellow':
			return "release when the countdown timer has a 5 in any position";
			break;
		default:
			return 'release when the countdown timer has a 1 in any position';
			break;
	}
}
