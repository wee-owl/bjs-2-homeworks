"use strict"

// task 2-1
function getArrayParams(...arr) {

  let min = Math.min(...arr);
  let max = Math.max(...arr);
  let avg = +([...arr].reduce((counter, value) => counter + value) / [...arr].length).toFixed(2);

  return { min: min, max: max, avg: avg };
}


// task 2-2
function summElementsWorker(...arr) {

  if (![...arr].length) {
    return 0;
  }

  return [...arr].reduce((counter, value) => counter + value);
}


function differenceMaxMinWorker(...arr) {

  if (![...arr].length) {
    return 0;
  }

  return Math.max(...arr) - Math.min(...arr);
}


function differenceEvenOddWorker(...arr) {

  if (![...arr].length) {
    return 0;
  }

  let sumEvenElement = 0;
  let sumOddElement = 0;

  for (let i = 0; i < [...arr].length; i++) {
    if ([...arr][i] % 2 === 0) {
      sumEvenElement += [...arr][i];
    } else {
      sumOddElement += [...arr][i];
    }
  }

  return sumEvenElement - sumOddElement;
}


function averageEvenElementsWorker(...arr) {

  if (![...arr].length) {
    return 0;
  }

  let sumEvenElement = 0;
  let countEvenElement = 0;

  for (let i = 0; i < [...arr].length; i++) {
    if ([...arr][i] % 2 === 0) {
      sumEvenElement += [...arr][i];
      countEvenElement += 1;
    }
  }

  return sumEvenElement/countEvenElement;
}


// task 2-3
function makeWork(arr, func) {

  let maxArr = [];

  for (let i = 0; i < [...arr].length; i++) {
    maxArr.push(func(...arr[i]));
  }

  return Math.max(...maxArr);
}