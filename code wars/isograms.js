function isIsogram(str){
  if(str === '') { console.log(true); return true }
  const count = {}
  str.split('').forEach(c => count[c.toLowerCase()] ? count[c.toLowerCase()] += 1 : count[c.toLowerCase()] = 1)
  console.log(Object.values(count).every((n) => n === 1));
  return Object.values(count).every((n) => n === 1)
}

isIsogram("Dermatoglyphics") //=> , true );
isIsogram("isogram") //=> , true );
isIsogram("aba") //=> , false, "same chars may not be adjacent" );
isIsogram("moOse") //=> , false, "same chars may not be same case" );
isIsogram("isIsogram") //=> , false );
isIsogram("") //=> , true, "an empty string is a valid isogram" );
