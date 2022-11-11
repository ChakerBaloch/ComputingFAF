// Accessing a Character in a String

// Let us consider the case of wanting to access a specific character from within an string
// We can access a given element, but these element begin at 0: 
// Example:

var firstName = "David Rose";

var firstIntial = firstName[0];

var lastIntial = firstName[6];

 

console.log('first Initial:',firstIntial); // should log "D"

console.log("lastInitial:", lastIntial); // should log "R"

 

// We can also do this with variables:

var array = [1, 2, 3, 4];

var index = 3;

var thirdElement = array[index];

console.log('third element:', thirdElement)

// Reassigning a String

// What if we wanted to change our string?
// Strings are immutable; meaning that we can not change them
// But we can reassign one variable from one string to another
// Example:

var job = "Coordinator";

console.log('job before reassignment:', job);

 

// we reassign a variable by leaving off the keyword 'var' (provided variable name already exists)

job = "Director";

console.log('job after reassignment:', job);

 

// Getting the Length of a String

// If we want to get the length of string we can use the .length property
// .length is not a method
// We can get the last char in the string using the .length property
// Example:

var fruit = "apples and berries";

 

var length = fruit.length

console.log("length of fruit array:", length);

// Example #2 last char:

var fruit = "apples and peaches";

console.log("last char in the string:", fruit[fruit.length - 1]);


// OR with variables

var numberSequence = "1 2 3 4 5";

var lastChar = numberSequence.length - 1;

var last = numberSequence[lastIndex];

console.log('last char:', last);

 

// Add together or concatenate two or more strings

// Frequently, you will be asked to add strings together in order to create a new string of some kind
// We can do so using the + operator:
// Example:

 

var firstName = "Alexis";

var lastName = "Rose";


var fullName = firstName + lastName;

console.log('fullName without space:', fullName);

// In the previous example, we created the string "AlexisRose", which is not perfectly precise.
//  To fix this, we will need to add a third string with just a space:

var firstName = "Alexis";

var lastName = "Rose";

var fullName = firstName + ' ' + lastName;

console.log('fullName with space:', fullName);


// String Interpolation

// we can build a message around the values of a variable using string interpolation
// We can do this with + operator
// We can do this with template literals ``
// Example:

var food = "churro";

var methodOfTransport = "the subway";

var sentence = "The best way to travel to get " + food + " is surely to take " + methodOfTransport;

console.log("Resulting sentence:", sentence);

// OR with template literals

var food = "pizza";

var methodOfTransport = "the subway";

var sentence = `The best way to travel to get ${food} is surely to take ${methodOfTransport}`;

console.log("Resulting sentence:", sentence);

// Using the substring  method
// We can use the substring method to get a portion of a string
// Example 1:

var subString = "JavaScript".substring(2, 9);

console.log('portion of string from before index 2, up to, but not including, index 9:', subString);

// Example 2:

var subString = "JavaScript".substring(1);

console.log('portion of string from before index 1, to the end of the string:', subString);

// OR with variables

var language = "JavaScript";

var startIndex = 2;

var endIndex = 9;

var subString = language.substring(startIndex, endIndex);

// console.log("portion of string from before startIndex, up to, but 

// not including, endIndex: ", subString);

 

// Using the indexOf method

// Using the indexOf method we can find where in the string a target substring is
// Example

var indexOfSubString1 = "Google".indexOf('oog');

console.log('index where substring is found:', indexOfSubString1);

 

var indexOfSubString2 = "In my eyes there are  muscles".indexOf('e');

console.log('index where substring is found:', indexOfSubString2)

 

// we can also tell our call to indexOf that it should begin searching after a certain index:

var indexOfSubString1 = "Googlely doogle".indexOf('oog', 9);

console.log('index where substring is found, after a certain point in string:', indexOfSubString1);

 

// OR with variables

var names = "morty, steve, rick";

var wanted = "steve";

var indexOfwanted = names.indexOf(wanted);

 

console.log('index where wanted is found within names:', indexOfwanted);

 

// Using the toString method

// Using the toString method we can turn another value of a different type into a string
 

// Example 1

var num = 17;

var stringNum = num.toString();

console.log('stringNum:', stringNum);

console.log('type of stringNum:', typeof stringNum);

 

var bool = true;

var stringBool = bool.toString();

console.log('stringBool:', stringBool);

console.log('type of stringBool:', typeof stringBool);

 

// Note another example

 

//17.toString(); this will throw an error

Number(17).toString(); // this will not

 

var num = 17;

num.toString(); //this will also not

 

// Escape Characters 

// Using escape characters we can have apostrophes in our strings
// We can also character use the newline symbol, which will alter the behavior of the string when it is printed out
// Example:

console.log('sample:', 'It\'s raining'); 

 

console.log('multiline string:', 'First Line\nSecond Line\nThird Line');




// Turning a String into an Array - Split()

// Using the split method we can turn a string into an array
// Split takes on argument which is the character we want to split the string on
// Example:

var string = "a b c";

var array = string.split("");

console.log('split into an array:', array);

 

// Using slice

// Using the slice method we can get part of a string
// Acts similarly to substring but with some slight differences
// Slice we can provide negative numbers; if provided a negative number it will start at the end of the string
 

// Example:

var ingredients = 'butter sugar flour chocolate chips';

console.log("string", ingredients.slice(25)); //te chips

console.log("string", ingredients.slice(-6)); //e chips

 

toUpperCase() & toLowerCase()

// Using the toUpperCase() and toLowerCase() methods we can turn a string into a version of itself where its all uppercase or lowercase letters
// Does not modify the original string
 

// Example:

var string = "a b c";

console.log("string in all upper case", string.toUpperCase())

console.log(" original string", string)

 

