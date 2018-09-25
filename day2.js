('use strict');

// Redo the "max and min (without sort or Math.max/min)" drill but this time use 
// a while loop instead of a for loop
function max(numbers) {
  let maxNum = numbers[0];
  let i = 0;
  while (i < numbers.length) {
    if (numbers[i] > maxNum) {
      maxNum = numbers[i];
    }
    i++;
  }
  return maxNum;
}

function min(numbers) {
  let minNum = numbers[0];
  let i = 0;
  while (i < numbers.length) {
    if (numbers[i] < minNum) {
      minNum = numbers[i];
    }
    i++;
  }
  return minNum;
}



// Redo "Compute the average" exercise but use the Array.forEach() method instead 
// of a for loop
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
function average(numbers) {
  let arraySum = 0;
  numbers.forEach(element => arraySum += element);
  return arraySum / numbers.length;
}



// Higher Order Function Drills

// Functions as arguments (1)
function repeat(fn, n) {
  for (let i = 0; i < n; i++) {
    fn();
  }
}

let hello = () => console.log('Hello world');
let goodbye = () => console.log('Goodbye world');

// tests
repeat(hello, 3);
repeat(goodbye, 5);



// Functions as arguments (2) 
function filter(arr, fn) {
  const newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i]) === true) {
      newArray.push(arr[i]);
    }
  }
  return newArray;
}

// DO NOT EDIT BETWEEN THESE LINES, BUT DO READ THE CODE ----->
// First we setup an array of strings we plan to filter:
const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];

// We use your `filter` function here, capturing a new array into `filteredNames`
// comprised of names that only begin with 'R'
const filteredNames = filter(myNames, function(name) {
  // This is known as a "predicate function" - it's a function that 
  // only returns a boolean
  return name[0] === 'R';
});

console.log(filteredNames) // => ['Rich', 'Ray']
// <---- DO NOT EDIT BETWEEN THESE LINES