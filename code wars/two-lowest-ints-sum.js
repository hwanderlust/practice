function sumTwoSmallestNumbers(numbers) {

  const sorted = numbers.slice().sort((a,b) => b < a)
  console.log(sorted[0] + sorted[1]);
  return sorted[0] + sorted[1]

  // const clone = numbers.slice()
  // const min1 = Math.min(...clone)
  // clone.splice(numbers.indexOf(min1), 1)
  // const min2 = Math.min(...clone)
  // console.log(min1 + min2);
  // return min1 + min2
};

sumTwoSmallestNumbers([5, 8, 12, 19, 22]) //=> 13 , "Sum should be 13");
sumTwoSmallestNumbers([15, 28, 4, 2, 43]) //=> 6 , "Sum should be 6");
sumTwoSmallestNumbers([3, 87, 45, 12, 7]) //=> 10 , "Sum should be 10");
sumTwoSmallestNumbers([23, 71, 33, 82, 1]) //=>  24 , "Sum should be 24");
sumTwoSmallestNumbers([52, 76, 14, 12, 4]) //=>  16 , "Sum should be 16");
