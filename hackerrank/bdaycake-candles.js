function birthdayCakeCandles(ar) {
  const tallest = Math.max(...ar)
  const freq = ar.filter(n => n === tallest).length
  console.log(freq);
}

birthdayCakeCandles([3, 2, 1, 3]) // => 2
