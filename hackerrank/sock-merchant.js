function sockMerchant(ar) {
  const count = {}
  ar.forEach(el => count[el] ? count[el]++ : count[el] = 1)
  return Object.values(count).reduce((sum, n) => sum + Math.floor(n / 2), 0)
}

sockMerchant([1,2,1,2,1,3,2]) // => 2
sockMerchant([10, 20, 20, 10, 10, 30, 50, 10, 20]) // => 3
