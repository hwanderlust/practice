// Your task is to make a function that can take any non-negative integer as a argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// Input: 21445 Output: 54421
// Input: 145263 Output: 654321
// Input: 1254859723 Output: 9875543221

function descendingOrder(n){
  if(checkInputs(n)) {
    let stringedN = String(n).split('')
    stringedN.sort((a,b) => b > a)
    console.log(stringedN.join(''));
    return Number(stringedN.join(''))
  } else if(String(n).length === 1) {
    return n
  }
}

function checkInputs(n) {
  return typeof n === 'number' && n > 0
}

descendingOrder(21445)
descendingOrder(145263)
descendingOrder(1254859723)
