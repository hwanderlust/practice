function plusMinus(arr) {
  let positives;
  let negatives;
  let zeros;
  let ratio;
  const defaultResult = Number.parseFloat(0).toFixed(6)
  let result = [];

  positives = arr.filter(n => n > 0).length;
  negatives = arr.filter(n => n < 0).length;
  zeros = arr.filter(n => n === 0).length;

  if(!!positives) {
    ratio = positives/arr.length
    ratio = Number.parseFloat(ratio).toFixed(6)
    result.push(ratio)
  } else {
    result.push(defaultResult)
  }
  if(!!negatives) {
    ratio = negatives/arr.length
    ratio = Number.parseFloat(ratio).toFixed(6)
    result.push(ratio)
  } else {
    result.push(defaultResult)
  }
  if(!!zeros) {
    ratio = zeros/arr.length
    ratio = Number.parseFloat(ratio).toFixed(6)
    result.push(ratio)
  } else {
    result.push(defaultResult)
  }
  console.log(result);
};

// plusMinus([ -4, 3, -9, 0, 4, 1 ]); // 0.500000 0.333333 0.166667
plusMinus([1, 2, 3, 0])
