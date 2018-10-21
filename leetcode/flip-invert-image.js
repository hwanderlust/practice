const flipAndInvertImage = function (A) {
  const result = A.map(subArr => {
    return subArr.reverse().map(el => {
      if(el === 0) {
        return el = 1
      } else if(el === 1) {
        return el = 0
      }
    })
  })
  console.log(result)
  return result 
};

flipAndInvertImage([[1, 1, 0], [1, 0, 1], [0, 0, 0]]) // => [[1,0,0],[0,1,0],[1,1,1]]
flipAndInvertImage([[1, 1, 0, 0], [1, 0, 0, 1], [0, 1, 1, 1], [1, 0, 1, 0]]) // => [[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]]