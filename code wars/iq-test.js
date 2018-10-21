function iqTest(numbers) {
  const arrayOfNums = numbers.split(' ')
  const evenNums = [];
  const oddNums = [];
  arrayOfNums.forEach(num => num % 2 === 0 ? evenNums.push(num) : oddNums.push(num))

  let majority;
  evenNums.length > oddNums.length ? majority = 'even' : majority = 'odd'

  let result;

  if(majority === 'even') {
    arrayOfNums.forEach(num => !result ? num % 2 === 1 ? result = arrayOfNums.indexOf(num) + 1 : null : null)

  } else {
    arrayOfNums.forEach(num => !result ? num % 2 === 1 ? null : result = arrayOfNums.indexOf(num) + 1 : null)
  }
  return result
};

iqTest("2 4 7 8 10") // => 3 Third number is odd, while the rest of the numbers are even
iqTest("1 2 1 1") // => 2  Second number is even, while the rest of the numbers are odd
iqTest("1 2 2") // => 1
