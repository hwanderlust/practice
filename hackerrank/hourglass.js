// arr will always be 6x6
function hourglassSum(arr) {

  const sums = [];

  for(let i=0; i < 4; i++) {

    for(let j=0; j < 4; j++) {

      const row1 = arr[i][j] + arr[i][j+1] + arr[i][j+2]
      const row2 = arr[i+1][j] + arr[i+1][j+1] + arr[i+1][j+2]
      const row3 = arr[i+2][j] + arr[i+2][j+1] + arr[i+2][j+2]

      const sum = row1 + row2 + row3

      sums.push(sum)
    }
  }
  
  console.log(sums);
  const result = Math.max(...sums);
  console.log(result);
  return result;
}

const test = [
  [1, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0],
  [0, 0, 2, 4, 4, 0],
  [0, 0, 0, 2, 0, 0],
  [0, 0, 1, 2, 4, 0]
]

const test2 = [
  [1, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0],
  [0, 9, 2, -4, -4, 0],
  [0, 0, 0, -2, 0, 0],
  [0, 0, -1, -2, -4, 0]
]

const test3 = [
  [-9, -9, -9, 1, 1, 1],
  [0, -9, 0, 4, 3, 2],
  [-9, -9, -9, 1, 2, 3],
  [0, 0, 8, 6, 6, 0],
  [0, 0, 0, -2, 0, 0],
  [0, 0, 1, 2, 4, 0]
]

hourglassSum(test3)
