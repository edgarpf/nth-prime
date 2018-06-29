var isPrime = require('is-prime');

module.exports = function(n) {
	var position = 1;
	
	if(n==1){
		return 2;
	}
	
	return checkIfIsPrime(position, n);
}
	
function checkIfIsPrime(position, n){
	for(var i=3;;i+=2){
		if(isPrime(i)){
			position++;			
			if(position == n){
				return i;
			}
		}
	}
}

