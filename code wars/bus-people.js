
var number = function(busStops){
  const flatten = (arr) => arr.reduce((a, b) => a.concat(Array.isArray(b) ? flatten(b) : b), [])
  const busStopPeople = flatten(busStops)
  console.log(`flatten:`, flatten(busStops));

  const remainingPeople = busStopPeople.reduce((sum, n, idx) => {
    return idx % 2 === 0 ? sum += n : sum -= n
  })
  console.log(remainingPeople);
  return remainingPeople
  // let sum = 0
  // for(let i=0; i < busStopPeople.length; i++) {
  //   if(i%2 === 0) {
  //     sum += busStopPeople[i]
  //   } else if(i%2 === 1) {
  //     sum -= busStopPeople[i]
  //   }
  // }
  // console.log(`sum:`, sum);
  // return sum
}

number([[10,0],[3,5],[5,8]]) // => 5
number([[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]]) // => 17
number([[3,0],[9,1],[4,8],[12,2],[6,1],[7,8]]) // => 21
