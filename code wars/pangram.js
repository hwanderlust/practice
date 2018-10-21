function isPangram(string){
  return (string.match(/([a-z])(?!.*\1)/ig) || []).length === 26;
  // const count = {}
  // cleanString = string.replace(/\W/g, "");
  // cleanString.split('').forEach(c => {
  //   if(c !== ' ') {
  //     count[c.toLowerCase()] ? count[c.toLowerCase()] += 1 : count[c.toLowerCase()] = 1
  //   }
  // })
  // console.log(Object.keys(count).length >= 26)
}

isPangram("The quick brown fox jumps over the lazy dog.") //=> true
isPangram("This is not a pangram.") //=> false
isPangram("abcdefghijklmopqrstuvwxyz ") //=> false
isPangram("abcdefghijklmnopqrstuvwxyz ") //=> true 
isPangram("abcdefghijklmnopqrstuvwxy . ? ,") //=> false 
