const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

function alphabet_position(string) {
  const result = [];
  if(typeof string === 'string') {
    string.split('').forEach((char, i) => {
      if(alphabet.includes(char.toLowerCase())) {
        result.push(alphabet.indexOf(char.toLowerCase()) + 1)
      };
    });
    return result.join(' ')
  };
};
alphabet_position("The sunset sets at twelve o' clock.");
  // "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"
