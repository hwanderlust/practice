const findAndReplacePattern = function (words, pattern) {
  const splitPattern = pattern.split('')
  const result = []

  for(let i=0; i < words.length; i++) {
    const map = {}

    const changedWord = words[i].split('').map((c, idx) => {

      if(Object.keys(map).includes(c)) {
        if (map[c] === splitPattern[idx]) {
          return splitPattern[idx]

        } else {
          return c
        }

      } else {
        if(Object.values(map).includes(splitPattern[idx])) {
          return c 

        } else {
          map[c] = splitPattern[idx]
          return splitPattern[idx]
        }
      }
    }).join('')

    if(changedWord === pattern) {
      result.push(words[i])
    }
  }

  console.log(`result:`, result)
  return result
};

findAndReplacePattern(["abc", "deq", "mee", "aqq", "dkd", "ccc"], "abb")