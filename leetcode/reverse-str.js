const reverseString = function (s) {
  const splat = s.split(' ')
  let result = ''

  if (splat.length === 1) {
    result = s.split('').reverse().join('')
    console.log(result)
    return 
  }

  for (let i = (splat.length - 1); i >= 0; i--) {
    result = result + splat[i].split('').reverse().join('')

    if (i !== 0) {
      result += ' '
    }
  }

  console.log(result);
  return result
};

reverseString('hello')
reverseString("A man, a plan, a canal: Panama");