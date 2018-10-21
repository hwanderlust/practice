const selfDividingNumbers = function (left, right) {
  const result = []

  for(let i=left; i <= right; i++) {
    const splitNum = String(i).split('')

    if(splitNum.includes('0')) {
      continue
    }

    if(splitNum.length === 1) {
      result.push(i)
      continue 
    }

    const check = splitNum.map(n => {
      const num = parseInt(n, 10)
      if(i % num === 0) {
        return true
      } else {
        return false
      }
    })

    if(check.includes(false)) {
      continue
    } else {
      result.push(i)
    }
  }

  console.log(result)
  return result
};

// selfDividingNumbers(1, 22) // => [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 22]
selfDividingNumbers(127, 128) // => [128]