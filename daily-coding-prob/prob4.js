// Given an array of integers, find the first missing positive integer in linear time and constant space.In other words, find the lowest positive integer that does not exist in the array.The array can contain duplicates and negative numbers as well.
// For example, the input[3, 4, -1, 1] should give 2. The input[1, 2, 0] should give 3.
// You can modify the input array in -place.

const lowestPositiveInt = (arr) => {
  
  arr.sort((a,b) => b < a);
  
  let maxNum = arr[arr.length-1];

  if(maxNum <= 0) {
    return 1;
  }

  let minNum;

  for(let i=0; i < arr.length; i++) {

    if(arr[i] <= 0) {
      continue;
    }

    if(arr[i] > 0 && arr[i] < maxNum) {
      minNum = arr[i];
      
      if(minNum + 1 < arr[i+1]) {
        minNum++;
        break;
      }
    }

    if(i === (arr.length-1)) {
      minNum = ++arr[i];
      break;
    }

    minNum++;
  }

  return minNum;
}



const input1 = [3, 4, -1, 1]; // 2
const input2 = [1, 2, 0]; // 3
const input3 = [10, 5, 2, 1, 3, -5, -8, 9]; // 4
const input4 = [-5, -9, -3, -6]; // 1
const input5 = [1,2,3,4,5,6,7,8,9,10]; // 11

// console.log(lowestPositiveInt(input1));
// console.log(lowestPositiveInt(input2));
// console.log(lowestPositiveInt(input3));
// console.log(lowestPositiveInt(input4));
console.log(lowestPositiveInt(input5));