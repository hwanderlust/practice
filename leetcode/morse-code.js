
const uniqueMorseRepresentations = function (words) {
  const morseCode = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--.."]

  const convertedWords = []

  words.forEach(w => {
    let convertedWord = w.split('').map(c => morseCode[c.charCodeAt() - 97]).join('')

    if(!convertedWords.includes(convertedWord)) {
      convertedWords.push(convertedWord)
    }
  })
  
  console.log(convertedWords.length)
  return convertedWords.length;
};

uniqueMorseRepresentations(["gin", "zen", "gig", "msg"]);