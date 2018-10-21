var peakIndexInMountainArray = function (A) {
  const peak = Math.max(...A)
  const peakIndex = A.indexOf(peak)
  const left = A.slice(0, peakIndex)
  const right = A.slice(peakIndex+1, A.length)

  const leftVerdict = checkAscDesc(left, 'left')
  const rightVerdict = checkAscDesc(right, 'right')

  console.log(`leftV`, leftVerdict)
  console.log(`rightV`, rightVerdict)

  if(leftVerdict && rightVerdict) {
    console.log(peakIndex)
    return peakIndex
  } else {
    console.log(`not a mountain`)
    return `not a mountain`
  }
};

const checkAscDesc = function(A, direction) {
  let verdict = false 
  
  if(direction === 'left') {
    for (let i=0; i < A.length; i++) {
      if(A.length === 1) {
        verdict = true 
        return verdict
      }
  
      if (i === 0 && A[i] > A[i + 1]) return verdict
      
      if (A[i - 1] > A[i] || A[i] > A[i + 1]) return verdict
      
      if (i === A.length - 1) {
        verdict = true;
        return verdict
      }
    }
  }

  if(direction === 'right') {
    for (let i = 0; i < A.length; i++) {
      if (A.length === 1) {
        verdict = true;
        return verdict
      }

      if (i === 0 && A[i] < A[i + 1]) return verdict;

      if (A[i - 1] < A[i] || A[i] < A[i + 1]) return verdict;

      if (i === A.length - 1) {
        verdict = true;
        return verdict
      }
    }
  }
}

peakIndexInMountainArray([0, 1, 0]) // => 1
peakIndexInMountainArray([0, 2, 1, 0]) // => 1
peakIndexInMountainArray([0, 1, 2, 3, 4, 5, 4, 3, 2, 1, 0]) // => 5
peakIndexInMountainArray([0, 1, 2, 7, 4, 5, 4, 3, 2, 1, 0]) // => not a mountain