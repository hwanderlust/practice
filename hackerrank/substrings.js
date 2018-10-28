function twoStrings(s1, s2) {
    
  let sum = 0
  
  for(let i=0; i < s2.length; i++) {
    if (s1.includes(s2[i])) {
      sum++
    }
  }

  if(sum > 0) {
    return console.log('YES')

  } else {
    return console.log('NO')
  }
};

twoStrings('hello', 'world') // => 'YES'
twoStrings('hi', 'world') // => 'NO'
twoStrings('aardvark', 'apple') // => 'YES'
