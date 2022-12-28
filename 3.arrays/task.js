"use strict"

// task 3-1
function compareArrays(arr1, arr2) {
  return arr1.length === arr2.length && arr1.every((item, i) => item === arr2[i])
}


// task 3-2
function getUsersNamesInAgeRange(users, gender) {
  let genderArray = users.filter((item) => item.gender === gender);
  return genderArray.length ? genderArray.reduce((acc, item) => acc + item.age, 0)/genderArray.length : 0;
}