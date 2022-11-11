// Addition

// With the + operator we can add together two values and that these values happen to be numbers
// Example:

var sum = 3 + 4;

console.log('sum:', sum);

// Subtraction

// With the - operator we can subtract two numbers
// Example:

var difference = 3 - 4;

console.log('sum:', difference);

 

// Multiplication

// With the * operator we can multiply one number by another number
// Example:

var product = 3 * 4;

console.log("product:", product);

 

// Division

// With the / operator we can divide one number by another number
// Example:

var quotient = 3 / 4;

console.log("quotient:", quotient);

 

// Exponent

// With the ** operator we can raise one number to the power of another number
// Example:

var power = 2 ** 5;

console.log("power:", power);

 

// Modulo

// With the % operator we can get the remainder after dividing one number by another number
// This is often used to tell if a number is even or odd
// Example:

var remainder = 11 % 2;

console.log('remainder:', remainder);

 

// Plus equals and minus equals

// With the += operator / -= operator we can increment/decrement a variable's value
// This is often used to tell if a number is even or odd
// Example:

var increment = 11;

increment += 2;

console.log('increment:', increment);

 

var decrement = 13;

decrement -= 3;

console.log('decrement:', decrement);

 

// Absolute Value

// With the Math.abs() method we can get the absolute value of a number
// Example:

var original = -295;

console.log('absolute value applied:', Math.abs(original));

 

// Rounding up and down

// With the Math.ceil() (up) method we round a number up
// With the Math.floor() (down) method we round a number down
// Example:

var original = 33.7;

console.log('rounded up:', Math.ceil(original));

console.log('rounded down:', Math.floor(original));

 

// Generate a Random Number

// With the Math.random() method we can generate a random number
// Formula Math.random() * (max - min) +  min
// Example:

// generate a random number between 1 and 10

var randomBetween1And10 = Math.random() * (10 - 1) + 1;

console.log('randomBetween1And10:', randomBetween1And10);

// Or with variables:

var min = 90;

var max = 100;

var randomBetweenMinAndMax = Math.random() * (max - min) + min;

console.log("randomBetweenMinAndMax:", randomBetweenMinAndMax);




// Greater than and greater than or equal to || Less than and less than or equal to

// With the > operator we can tell if one number is greater than the other number
// With the >= operator we can tell if one number is greater or equal to the other number
// With the < operator we can tell if one number is less than the other number
// With the <= operator we can tell if one number is less or equal to the other number
// Example:

var exclusiveLowerBound = 7;

console.log('actual is greater than exclusive lower bound:', 9 > exclusiveLowerBound);

 

var inclusiveLowerBound = 5;

console.log('actual is  greater than or equal to inclusive lower bound:', 5 >= inclusiveLowerBound);

 

// Min and Max

// Math.min() returns the lowest-valued number passed into it, or NaN if any parameter isn't a number and can't be converted into one.
// With the Math.min() and max methods we can get find the smallest and largest number 
// Example:

console.log('min val', Math.min(2, 3, 1));// -> 1

// console.log(max val', Math.max(2, 3, 1));// -> 3

 

// Square root

// The Math.sqrt() function returns the square root of a number
// Example:

console.log('square root', Math.sqrt(9)); //=> 3

console.log("The square root is: ", Math.sqrt(9));

 
