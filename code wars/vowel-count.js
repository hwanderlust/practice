function getCount(str) {
  console.log(str.match(/[aeiou]/g).length);
  return str.match(/[aeiou]/g) ? str.match(/[aeiou]/g).length : 0
}

getCount("abracadabra") //=> , 5)
getCount("basdflkjasd;fiu") //=> , 4)
