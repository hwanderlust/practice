// Given an array of integers, return a new array such that each element at index i of the new array is the product of all the numbers in the original array except the one at i.
// For example, if our input was[1, 2, 3, 4, 5], the expected output would be[120, 60, 40, 30, 24].If our input was[3, 2, 1], the expected output would be[2, 3, 6].
// Follow - up: what if you can't use division?

function productArr(arr) {

  const result = [];

  for(let i=0; i<arr.length; i++) {
    const remainingArr = arr.slice(i+1);
    const prevEls = arr.slice(0, i);
    const combinedArr = remainingArr.concat(prevEls);
    const product = combinedArr.reduce((acc, n) => acc*n);
    result.push(product);
  }

  return result;
}

const arr1 = [1,2,3,4,5];
const arr2 = [3,2,1];

console.log(productArr(arr1)); // [120, 60, 40, 30, 24]
console.log(productArr(arr2)); // [2, 3, 6]
