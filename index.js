const prompCreator = require('prompt-sync');

const prompt = prompCreator();

// DO NOT CHANGE THE LINE BELOW.
const n = parseInt(prompt("Enter a number: "));

/** 
 * TODO: Find the largest positive prime number <= n.
 * A prime number is a natural number greater than 1 whose only 
 * factors are 1 and the number itself. That is, it can only be 
 * divided equally by 1 and itself.
 * Natural numbers are positive integers such as 1, 5, 201, 229999 
 * etc. The number 0, fractions, decimals, and negative numbers
 * are not natural numbers.
 */
let num;
let primeArray = [];

if (n > 1) {
  if (n == 2 || n == 3) {
    num = n;
  } else {
    primeArray.push(2);
    primeArray.push(3);
  
    for (i = 4; i <= n; i++) {
      if (!(i % 2 == 0)) {
        var isPrime = true;
    
        for (j = 0; j < primeArray.length; j++) {
          if (i % primeArray[j] == 0) {
            isPrime = false;
          }
        }
    
        if (isPrime) {
          primeArray.push(i);
        }
      }
    }
  
    num = primeArray[primeArray.length - 1];
  }
}

// DO NOT CHANGE ANYTHING BELOW THIS.
console.log(num);

module.exports = {
  num,
};
