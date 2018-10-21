function findNb(m) {
  // 1) 1^3
  // 2) diff = m - 1^3
  // 3) diff > 0 || diff === 0 ? continue || return n : return -1
  // keep count of n and ++ each iteration
  var n = 0
  while (m > 0) m -= ++n**3
  return m ? -1 : n
  // let result;
  // for(let i=1; i < Infinity; i++) {
  //   m -= i**3;
  //   if(m < 0) {
  //     result = -1
  //     break;
  //   }
  //   if(m === 0) {
  //     result = i;
  //     break;
  //   }
  // }
  //   console.log(result);
  //   return result;
}

findNb(1071225) // --> 45
findNb(91716553919377) // --> -1
findNb(4183059834009) //=>2022)
findNb(24723578342962)//=> -1)
findNb(135440716410000)//=>, 4824)
findNb(40539911473216)//=> 3568)
