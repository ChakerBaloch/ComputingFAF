//1 create an array of strings (has to be of at least length 10)
const apartment = ["bed","kitchen","computer","table","books","speakers",
                   "whiteboard","fan","chairs","couch"];
//2 print out the second element in the array
console.log(apartment[1]);
//3 print out the length of the array
console.log(apartment.length);
//4 iterate over the array and print out each element
for (let i = 0; i < apartment.length; i++) {
   const element = apartment[i];
   console.log(element);
}
//5 create a function that takes in a string and in the 
//function iterate over each element in the array and for
// each element check if its equal to the parameter
// if it is then return that string
//else continue
apartment.forEach(function(string) {
   if (condition) {
      
   }
   
})
 //6 remove the last element from the array and then console.log the array
 //4 remove the last element from the array and then console.log the array
apartment.pop();
console.log(apartment);
 //7 remove the first element from the array and then console.log the array
 //5 remove the first element from the array and then console.log the array
apartment.shift();
console.log(apartment);
 //8 add a string to the end of the array and then console.log the array
 //6 add a string to the end of the array and then console.log the array
apartment.push();
console.log(apartment);
 // add a string to the beginning of the array and then console.log the array
 //7 add a string to the beginning of the array and then console.log the array
apartment.unshift();
console.log(apartment);
 //8 create another array of 6 veggies 
    //create a variable called twoVeggies and set it equal to slicing
    // the veggies array and getting the middle two elements
    //ex [1, 3, 4, 5, 7, 8] and getting the two middle elements would be [4, 5]

 //9 create another array of 4 fruits
    //create a fruits and veggies array and assign it to concatinating the veggies array above and the fruits array

 //10 get the index of one the fruits or veggies in your fruitsAndveggies array
