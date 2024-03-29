// 1 Squares
const nums = [1, 2, 3, 4, 5];
let numsSquared = [];

// Use .map() to get the square of nums and store the value in numsSquared
// numsSquared => [1, 4, 9, 16, 25]

// resultsArray = srcArra.map(callBack)
numsSquared = nums.map(function(num){
    return num * num;
});
console.log(numsSquared);




// 2 isDivisibleBy3
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let isDivisibleBy3 = [];

// Use .filter() to find out the numbers that are divisible by 3 and store the value in isDivisibleBy3
// isDivisibleBy3 => [3, 6, 9]

isDivisibleBy3 = numbers.filter(function(number){
    return number % 3 === 0
})
console.log(isDivisibleBy3);



// 3 Abbreviations
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let dayAbbreviations = [];

// Find the abbreviation of all days and add them to dayAbbreviations array
// dayAbbreviations => ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']


dayAbbreviations = days.map(function(day){
    return day.slice(0, 3);
});
console.log(dayAbbreviations);



// 4 Capitalize
const instructors = ['ahmed', 'maha', 'sami', 'salman'];
let capitalizedInstructors = [];

// Capitalize all the strings in the instructors array and store them in the array capitalizedInstructors.
// capitalizedInstructors => ["AHMED", "MAHA", "SAMI", "SALMAN"]

capitalizedInstructors = instructors.map(function(name){
    return name.toUpperCase();
});
console.log(capitalizedInstructors);




// 5 Crazy numbers, again!
// These crazy numbers are now strings 😯 😯  !!  
const stringNumbers = ["103440", "3799.2663", "3.14159265359", "859494", "59439"];
let totalNumbersUnder4000 = 0;

// Convert numbers from strings to numbers and sum all numbers under 4000 and store them in totalNumbersUnder4000
// totalNumbersUnder4000 => 3802.4078926536

stringNumbers.forEach(function(number){
    // convert to number
    number = parseFloat(number);
  
    // check under 4000
    if (number < 4000) {
      // sum
      totalNumbersUnder4000 += number;
    }
});
console.log(totalNumbersUnder4000);

