const judgeCircle = function (moves) {
  let x = 0
  let y = 0
  moves.split('').forEach(move => {
    switch (move.toUpperCase()) {
      case 'U':
        y++
        break
      case 'D':
        y--
        break
      case 'L':
        x--
        break
      case 'R':
        x++
        break
    }
  })
  console.log(x === 0 && y === 0);
  return x === 0 && y === 0
};

judgeCircle('UD') // true 
judgeCircle('LL') // false 
judgeCircle('UDULRLRD') // true