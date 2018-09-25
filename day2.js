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

