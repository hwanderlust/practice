//Given a list of numbers and a number k, return whether any two numbers from the list add up to k.
//For example, given[10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.
//Bonus: Can you do this in one pass ?

function findCombinations(arr, k) {
  
  let found = false;

  for(let i=0; i < arr.length; i++) {

    if(arr[i] >= k) {
      continue;
    }

    let diff = k - arr[i];
    const remainingArr = arr.slice(i+1);

    if(remainingArr.includes(diff)) {
      return !found;
    }
  }

  return found;
}

const arr1 = [10, 15, 3, 7];
console.log(findCombinations(arr1, 17));
console.log(findCombinations(arr1, 20));
console.log(findCombinations(arr1, 5));
console.log(findCombinations(arr1, 18));
console.log(findCombinations(arr1, 25));
console.log(findCombinations(arr1, 10));
console.log(findCombinations(arr1, 22));
console.log(findCombinations(arr1, 13));
console.log(findCombinations(arr1, 14));

