# JS forEach(), map(), and filter()


## `.forEach()` [read more here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)

## `.map()` [read more here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

## `.filter()` [read more here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)


## Squares

```js
const nums = [1, 2, 3, 4, 5];
let numsSquared = [];

// Use .map() to get the square of nums and store the value in numsSquared
// numsSquared => [1, 4, 9, 16, 25]
```

## isDivisibleBy3

```js
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let isDivisibleBy3 = [];

// Use .filter() to find out the numbers that are divisible by 3 and store the value in isDivisibleBy3
// isDivisibleBy3 => [3, 6, 9]
```


## Abbreviations
```js
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let dayAbbreviations = [];

// Find the abbreviation of all days and add them to dayAbbreviations array
// dayAbbreviations => ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

```

## Capitalize 


```js

const instructors = ['ahmed', 'maha', 'sami', 'salman'];
let capitalizedInstructors = [];

// Capitalize all the strings in the instructors array and store them in the array capitalizedInstructors.
// capitalizedInstructors => ["AHMED", "MAHA", "SAMI", "SALMAN"]

```


## Crazy numbers, again!

```js

// These crazy numbers are now strings 😯 😯  !!  
const stringNumbers = ["103440", "3799.2663", "3.14159265359", "859494", "59439"];
let totalNumbersUnder4000 = 0;

// Convert numbers from strings to numbers and sum all numbers under 4000 and store them in totalNumbersUnder4000
// totalNumbersUnder4000 => 3802.4078926536
