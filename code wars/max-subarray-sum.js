// itsPG, AlexanderDerGrosse, classic016, Fantom1991, 14bce128@nirmauni.ac.in, dubdjon (plus 15 more warriors)
var maxSequence = function(arr){
  var min = 0, ans = 0, i, sum = 0;
  for (i = 0; i < arr.length; ++i) {
    sum += arr[i];
    min = Math.min(sum, min);
    ans = Math.max(ans, sum - min);
  }
  return ans;
}

// hiasen, rscarlisle, Instigator, perception30, qwetexac, ccnklc (plus 4 more warriors)
var maxSequence = function(arr){
    var currentSum = 0;
    return arr.reduce(function(maxSum, number){
        currentSum = Math.max(currentSum+number, 0);
        return Math.max(currentSum, maxSum);
    }, 0);
}

// avaver, pitchblaknight, architechnium
var maxSequence = function(arr){
  var max = 0;
  var cur = 0;
  arr.forEach(function(i){
    cur = Math.max(0, cur + i);
    max = Math.max(max, cur);
  });
  return max;
}

//mine
var maxSequence = function(arr){
  if(arr.every(el => el < 0) || arr.length === 0) { console.log(0);}
  const allSums = {}

  for(let i=0; i < arr.length; i++) {
    let sums = []

    if(i === arr.length - 1) {
      allSums[i] = arr[i]

    } else {
      for(let j=i+1; j < arr.length; j++) {
        if(sums.length > 0) {
          // console.log(`current sums:`, sums);
          // console.log(`previous:`, sums[(sums.length - 1)]);
          // console.log(`current + el:`, arr[j]);
          sums.push(sums[(sums.length - 1)] + arr[j])
          // console.log(`next:`, sums[(sums.length - 1)] + arr[j]);
        } else {
          // console.log(`first:`, arr[i] + arr[j]);
          sums.push(arr[i] + arr[j])
          // console.log(`current sums:`, sums);
        }
        if(j === (arr.length - 1)) {
          allSums[i] = Math.max(...sums)
          // console.log(`finished calc sums:`, sums);
          sums = []
        }
      }
    }
  }
  // console.log(`allSums:`, allSums);
  // console.log(`max:`, Math.max(...Object.values(allSums)))
  let max = 0;
  let startIndex = 0
  for(key in allSums) {
    if(allSums[key] > max) {
      max = allSums[key]
      startIndex = key
    }
  }
  // console.log(`for max:`, max);
  // console.log(`index:`, startIndex);
  const maxSeqArr = []
  for(let i=Number(startIndex); i<arr.length; i++) {
    if(maxSeqArr.reduce((sum, n) => sum + n, 0) !== max) {
      maxSeqArr.push(arr[i])
    } else {
      break
    }
  }
  console.log(`maxSeqArr:`, maxSeqArr);
  return maxSeqArr
}

// maxSequence([-4, -2, -1]) //=>, 0);
// maxSequence([]) //=>, 0);
// maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]) //=> , 6);
maxSequence([10, -2, 5, -8, 4, -2, -2, 5, 9, -15, 1]) //=> , 6);
