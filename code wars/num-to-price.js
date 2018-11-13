function numberToPrice(num) {

  if(typeof num !== 'number') {
    return NaN;
  }

  let negative = false

  if(num < 0) {
    negative = true
  }

  let stringNum = Math.abs(num).toString()

  if(stringNum.length <= 3) {
    return num.toFixed(2)
  }

  let float = false 
  let splitString, floats
  const decimals = stringNum.match(/\./)

  if(!!decimals) {
    float = true
    
    const split = stringNum.split(".")
    splitString = split[0].split('').reverse()

    floats = split[1]
    floats = floats.toString().substring(0,2)
    if(floats.length < 2) {
      floats = floats + '0'
    }

  } else {
    splitString = stringNum.split('').reverse()
  }

  let result = ''

  for(let i=0; i < splitString.length; i++) {
    
    if((i + 1) % 3 === 0 && splitString[i+1]) {
      result = ',' + splitString[i] + result

    } else {
      result = splitString[i] + result
    }
  }

  if(float) {
    result += `.${floats}`
  }

  if(negative) {
    result = `-${result}`
  }

  if (!decimals) {
    result += '.00'
  }

  return result
}

// console.log(numberToPrice(100.5))
// console.log(numberToPrice(1500)) //'1,500'
// console.log(numberToPrice(15000)) //'15,000'
// console.log(numberToPrice(1500.129)) //, '1,500.12');
// console.log(numberToPrice(-5)) //, '-5.00');
// console.log(numberToPrice(-5000.123))
// console.log(numberToPrice(1000000.5)) //, '1,000,000.50');
// console.log(numberToPrice('@')) //, 'NaN');