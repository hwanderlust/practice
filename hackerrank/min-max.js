function miniMaxSum(arr) {
  arr.sort((n1, n2) => n1 > n2)

  let sum = arr.reduce((sum, n) => sum + n)
  const min = sum - arr[0]
  const max = sum - arr[arr.length-1]
  console.log(max + ' ' + min);
}

miniMaxSum([3,2,5,4,1])
