// Balkoth
function thirt(n) {
  const nums = [1,10,9,12,3,4]
  var sum = (''+n).split('').reverse().reduce((sum,v,i) => sum + v * nums[i%nums.length], 0)
  return sum === n ? n : thirt(sum)
}

// mine
function thirt(n) {
  const splitted = String(n).split('').reverse().map(c => Number(c))
  const seq = [1, 10, 9, 12, 3, 4]
  let count = 0

  let productSum = splitted.reduce((sum, num) => {
    count === (seq.length-1) ? count = 0 : count++
    return sum + (num * seq[count])
  })

  return productSum === n ? productSum : thirt(productSum)
}

thirt(8529) //=>, 79)
thirt(85299258) //=>, 31)
thirt(5634) //=>, 57)
thirt(1111111111) //=>, 71)
thirt(987654321) //=> , 30)
