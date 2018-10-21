var uniqueInOrder = function(iterable){
  const iterableType = typeof iterable
  const result = [];

  if(iterableType === 'string') {
    const splitted = iterable.split('')
    ensureOrderUniqueness(splitted)

  } else if(iterableType === 'object') {
    ensureOrderUniqueness(iterable)
  }
}

function ensureOrderUniqueness(iterable, ) {
  const result = [];

  for(let i=0; i < iterable.length; i++) {
    if(result[result.length-1]) {
      if(result[result.length-1] !== iterable[i]) {
        result.push(iterable[i])
      }
    } else {
      result.push(iterable[i])
    }
  }

  return result
}


uniqueInOrder('AAAABBBCCDAABBB') // == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         // == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       // == [1,2,3]
