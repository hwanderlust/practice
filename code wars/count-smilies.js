//return the total number of smiling faces in the array
function countSmileys(arr) {
  if(arr.length < 1) {
    return
  }
  let count = 0;
  arr.forEach(el => {
    splitEl = el.split("")
    switch(splitEl.length) {
      case 2:
        (splitEl[0] === ':' || splitEl[0] === ';') && (splitEl[1] === ')' || splitEl[1] === 'D') ? count++ : null
        break
      case 3:
        (splitEl[0] === ':' || splitEl[0] === ';') && (splitEl[1] === '-' || splitEl[1] === '~') && (splitEl[2] === ')' || splitEl[2] === 'D') ? count++ : null
        break
      default:
        return 'invalid input'
        break
    }
  })
  console.log('count:', count);
  return count
}

// countSmileys([':D',':~)',';~D',':)']) //=> 4
// countSmileys([':)',':(',':D',':O',':;']) //=> 3
// countSmileys([';]', ':[', ';*', ':$', ';-D']) //=> 1
countSmileys([':-)' , ':~)' , ';o)' , ':~>' , ':~)' , ':-(' , ';)']) //=> 4
