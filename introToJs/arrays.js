// Accessing an Element in an Array
// Let us consider the case of wanting to access a specific element from within an array
// Recall that arrays are zero-indexed
// This means that we can access a given element, but these element begin at 0: 
// Example:

var array = [1, 2, 3, 4];

var secondElement = array[1];

console.log('secondElement:', secondElement)

 

// We can also do this with variables:

var array = [1, 2, 3, 4];

var index = 2;

var secondElement = array[index];

console.log('secondElement:', secondElement)

 

// Reassigning an Element in an Array
// What if we wanted to reassign an element in our array?
// Arrays are mutable, meaning that we can change them with the = operator
// Example:

var array = [1, 2, 32, 4];

 

console.log("before reassignment:", array);

array[2] = 3;

console.log("after reassignment:" , array);

 

// Getting the Length of an Array
// If we want to get the length of the array we can use the .length property
// .length is not a method
// We can get the last element in the array using the .length property
// Example:

var fruit = ["apples", "peaches", "berries"," bananas"];

 

var length = fruit.length

console.log("length of fruit array:", length);

// Example #2:

var fruit = ["apples", "peaches", "berries", "bananas"];

 

console.log("last element in the array:", fruit[fruit.length - 1]);

 

// OR with variables

 

var numberSequence = [1, 2, 3, 4, 5];

var lastIndex = numberSequence.length - 1;

 

var lastElement = numberSequence[lastIndex];

console.log('lastElement:', lastElement);

 

// Adding an Element to the back of an Array push ()
// Using the push method we can add an element to the back of the array
// Example:

 

var array = [1, 2, 3, 4, 5];

array.push(6);

// OR with variables

 

// var animals = [‘elephant’, ‘whale’, ‘tiger’];

// var newAnimal = ‘rhino’;

// animals.push(newAnimal);

 

// Removing an Element from the back of an Array pop ()
// Using the pop method we can remove an element from the back of the array
// Example:

var array = [1, 2, 3, 4];

array.pop();

console.log('array without removed element:', array);

 

// OR with variables

 

var seasons = ["winter", "summer", "fall", "awards"];

var seasonPopped = seasons.pop();

console.log('seasons with last element removed:', seasons);

console.log('last season removed:', seasonPopped);




// Adding an Element to the front of an Array unshift ()
// Using the unshift method we can add an element to the front of an array
// Example:

var array = [1, 2, 3, 4];

array.unshift(0);

console.log('array with new element:', array);

 

// OR with variables

 

var seasons = ["winter", "summer", "fall"];

var newSeason = seasons.unshift("spring");

console.log('seasons with new element added:', seasons);

console.log("first season added", newSeason);

 

// Removing an Element from the front of an Array shift ()
// Using the shift method we can remove an element from the front of an array
// Example

var array = [1, 2, 3, 4];

array.shift();

console.log('array without removed element:', array);

 

// OR with variables

 

var sports = ["track", "rugby", "soccer", "basketball"];

var elementShifted = array.shift();

console.log('array without removed element:', array);

console.log('element removed:', elementShifted);




// Slicing a portion of an array and making a shallow copy
// Using the slice method we can get a specific section of an array and we can just make a copy of an existing array with it as well
// All of that said while not altering the original array
// Example 1

var array = ['a', 'b', 'c', 'd', 'e'];

var sliceOfArray = array.slice(0, 2);

console.log('slicing a portion of the array from before index 0, to before index 2:', sliceOfArray1)

 

// Example 2

var array = ['a', 'b', 'c', 'd', 'e'];

var sliceOfArray2 = array.slice(2, 5); // OR array.slice(2); OR array.slice(2, array.length);

console.log('slicing a portion of the array from before index to, to before index 5 OR from index 2 to rest of array:', sliceOfArray2);

console.log('slicing the array does not affect the original array:', array);




// OR with variables

 

var altitudesAlongHikingTrail = [20, 70, 110, 170, 120, 40];

var todaysHike = altitudesAlongHikingTrail.slice(1, 4);

 

console.log('altitudes for today\'s hike:', todaysHike);

console.log("original altitudes along trail is not affected by slice:", altitudesAlongHikingTrail);

 

// Example 3

var array = ['a', 'b', 'c', 'd', 'e'];

var copyOfArray = array.slice();

console.log('copy of array:', copyOfArray);

 

// Adding the Contents of an array to another array concat method
// Using concat we can add to one array to the other
// Example:

var array1 = [1, 2, 3];

var array2 = ['a', 'b', 'c'];

var array3 = ['do', 're', 'mi'];

var resultOfConcat1 = array1.concat(array2);

console.log('concatting array1 and array2 together:', resultOfConcat1);

console.log('-------------------------\n');

console.log('array1 is unaffected:', array1);

console.log('array2 is unaffected:', array2);




// Turning an Array into a String
// Using the join method we can turn an array into a string
// Example:

var joinedOnNothing = ["a", "b", "c"].join();

console.log('joined with no argument supplied:', joinedOnNothing);

 

var joinedOnEmptyString = ["a", "b", "c"].join("");

console.log('joined on an empty string:', joinedOnEmptyString);

 

var joinedOnAString = ["a", "b", "c"].join("+");

console.log('joined on a string:', joinedOnAString);

 

// Using indexOf
// Using the indexOf method we can get the index of where a target element is at
// If element is not in the array it returns a -1
// If there are duplicate target elements then it returns the index of the last one
// Example:

var ingredients = ["butter", "sugar", "flour", "chocolate chips"];

var index = ingredients.indexOf("sugar");
