function kaprekarNumbers(p, q) {
  // p lower limit, q upper limit
  const kaprekarNums = [];

  for(p; p <= q; p++) {
    const n = String(p).length
    const squared = p * p
    const squaredL = String(squared).length
    let left;
    let right;

    if(squaredL === 1) {
      right = squared
      right === p ? kaprekarNums.push(p) : null

    } else if(squaredL === ((2*n)-1)) {
      right = String(squared).substring(n-1, squaredL)
      left = String(squared).substring(0, n-1)
      const sum = parseInt(left) + parseInt(right)
      sum === p ? kaprekarNums.push(p) : null

    } else if(squaredL === (2*n)) {
      right = String(squared).substring(n, squaredL)
      left = String(squared).substring(0, n)
      const sum = parseInt(left) + parseInt(right)
      sum === p ? kaprekarNums.push(p) : null
    }
  }

  if(kaprekarNums.length === 0) {
    console.log("INVALID RANGE")
  } else {
    console.log(kaprekarNums);
  }
};

kaprekarNumbers(4879, 4879)

// 4879, 5292
