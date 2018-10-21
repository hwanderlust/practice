function isTriangle(a,b,c) {
   if(a <= 0 || b <= 0 || c <= 0) {
    return false
  } else {
    const check1 = a < b + c ? true : false
    const check2 = b < a + c ? true : false
    const check3 = c < b + a ? true : false
    return check1 && check2 && check3
  }
}

isTriangle(1,2,2) // true
isTriangle(7,2,2) // false
