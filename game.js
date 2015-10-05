var prompt = require('sync-prompt').prompt;
var colors = require('colors');

var bank = 100


// var answer = 10
// 
function compare() {
	 bet = parseInt(prompt("Place a bet between $5 and $10"));
	 guess = parseInt(prompt("Pick a number between 1 and 10"));
	 answer = Math.floor(Math.random() * 10 + 1);
	if(guess === answer) {
		console.log("Dead on Old Boy!".green)
		bank += (bet * 2);
	}
	else if(guess === answer+1 || guess === answer-1) {
		console.log('So close my man!'.yellow);
	}
	else {
		bank -= bet;
		console.log("Maybe you shouldn't manage your own money..".red); 
	}
console.log(answer);
}

while (bank > 0) {
	compare();
	console.log(bank);	
}
