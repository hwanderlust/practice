function solution(string) {
  return(string.replace(/([A-Z])/g, ' $1'));
  // let result = '';
  //
  // for(c of string) {
  //
  //   if(c.match(/[A-Z]/)) {
  //     result += ` ${c}`
  //
  //   } else {
  //     result += c
  //   }
  // }
  // console.log(result);
  // return result
}

// solution('camelCasing') //=>  'camel Casing'
solution('camelCasingTest') //=>  'camel Casing Test'
