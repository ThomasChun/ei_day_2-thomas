'use strict';

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
    if (fn(arr[i])) {
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

console.log(filteredNames); // => ['Rich', 'Ray']
// <---- DO NOT EDIT BETWEEN THESE LINES




// Functions as return values
function hazardWarningCreator(typeOfWarning) {
  let warningCounter = 0;
  let singularOrPlural = 'time';
  return function(location) {
    warningCounter++;
    if (warningCounter > 1) {
      singularOrPlural = 'times';
    }
    console.log(`DANGER! There is a ${typeOfWarning} hazard at ${location}!`);
    console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} ${singularOrPlural} today!`);
  };
}

const rocksWarning = hazardWarningCreator('Rocks on the Road');
const waterMainBreak = hazardWarningCreator('Water main break');
const roadClosure = hazardWarningCreator('Road closures, use alternate routes');

// tests
rocksWarning('Main St and Pacific Ave');
rocksWarning('Centinela Ave and Olympic Blvd');
waterMainBreak('Main St and Pacific Ave');
waterMainBreak('Centinela Ave and Olympic Blvd');
rocksWarning('6th St and Wilshire Blvd');
roadClosure('Wilshire Blvd and Vermont Ave');
rocksWarning('Wilshire Blvd and Vermont Ave');
roadClosure('Main St and Pacific Ave');




// forEach, filter and map
const arrayOfMoves = [[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]];

// ** Initial Solution **
// const forwardLeft = arrayOfMoves.filter(move => move[0] >= 0 && move[1] >= 0);
// const stepsPerMove = forwardLeft.map(move => move[0] + move[1]);
// const totalSteps = stepsPerMove.forEach(move => console.log(move));

// ** Refactored Solution **
function totalTurtleSteps(arr) {
  return arr
    .filter(move => move[0] >= 0 && move[1] >= 0)
    .map(move => move[0] + move[1])
    .forEach(move => console.log(`The turtle took ${move} steps on this move.`));
}

totalTurtleSteps(arrayOfMoves);




// reduce
// let testStr = 'noggin oreo the moon time tele steed his tent apollo her lives though shoo tofu budapest';
// let newArr = testStr.split(' ');

// function addSpaceAndCaps(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].length === 3) {
//       arr[i] = ' ';
//     } else {
//       arr[i] = arr[i].slice(-1).toUpperCase();
//     }
//   }
//   return arr;
// }

// let lastChar = addSpaceAndCaps(newArr);
// const decoded = (accumulator, currentValue) => accumulator + currentValue;

// console.log(lastChar.reduce(decoded, ''));




// alt second solution to reduce
let testStr = 'noggin oreo the moon time tele steed his tent apollo her lives though shoo tofu budapest';

function createArr(str) {
  return str.split(' ');
}

function addSpaceAndCaps(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length === 3) {
      arr[i] = ' ';
    } else {
      arr[i] = arr[i].slice(-1).toUpperCase();
    }
  }
  return arr;
}

function decoder(str) {
  let newArr = createArr(str);
  let codeArr = addSpaceAndCaps(newArr);
  const decoded = (accumulator, currentValue) => accumulator + currentValue;
  codeArr = codeArr.reduce(decoded, '');
  return codeArr;
}

// tests
console.log(decoder(testStr));
console.log(decoder('looking oreo oero good'));
console.log(decoder('math create really'));