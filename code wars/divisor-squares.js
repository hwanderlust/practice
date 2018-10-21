function listSquared(m, n) {
  // ranges from n -> n where 1 <= m < n
  // 1) find all divisors up till num / 2
  // 2) calc all divisors' squared values
  // 3) sum those squared values together
  // 4) determine if that sum is a squared number AKA if it is a whole number / integer after squarerooting it
  // 5) return all numbers and the sum squared numbers in a nested array
  const squares = [];
  let x = m;
  while(x <= n) {
    const result = isSquare(x);
    result ? squares.push([x, result]) : null
    x++
  }
  console.log(squares);
  return squares
};

function isSquare(num) {
  let squaredDivisors = [];
  squaredDivisors.push(num*num)
  for(let i=1; i <= num/2; i++) {
    if(num % i === 0) { squaredDivisors.push(i*i); }
  }
  const summed = squaredDivisors.reduce((sum, num) => sum + num)
  return Math.sqrt(summed) % 1 === 0 ? summed : null
}

listSquared(1, 250)//=>, [[1, 1], [42, 2500], [246, 84100]])
listSquared(42, 250)//=>, [[42, 2500], [246, 84100]])
listSquared(250, 500)//=>, [[287, 84100]])
