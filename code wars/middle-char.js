function getMiddle(s) {
  stringL = s.length % 2 === 0 ? "even" : "odd"
  let i;
  switch(stringL) {
    case 'even':
      i = s.length / 2
      return s[i-1] + s[i]
    case 'odd':
      i = Math.floor(s.length / 2)
      return s[i]
    default:
      break
  }
}

getMiddle("test") // should return "es"
getMiddle("testing") // should return "t"
getMiddle("middle") // should return "dd"
getMiddle("A") // should return "A"
