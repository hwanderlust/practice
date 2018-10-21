// dirkluijk's
const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

function mix(s1, s2) {
  return alphabet
    .map(char => {
      const s1Count = s1.split('').filter(x => x === char).length,
            s2Count = s2.split('').filter(x => x === char).length,
            maxCount = Math.max(s1Count, s2Count);

      return {
        char: char,
        count: maxCount,
        src: maxCount > s1Count ? '2' : maxCount > s2Count ? '1' : '='
      };
    })
    .filter(c => c.count > 1)
    .sort((objA, objB) => objB.count - objA.count || (objA.src + objA.char > objB.src + objB.char ? 1 : -1))
    .map(c => `${c.src}:${c.char.repeat(c.count)}`)
    .join('/');
}

// mine
// function mix(s1, s2) {
//   if(s1 === s2) { console.log(`result:`, ''); return '' }
//
//   const count1 = countLetters(s1)
//   const count2 = countLetters(s2)
//
//   const unsortedOutputArray = consolidateCounts(count1, count2)
//
//   let result = ''
//   const lengths = unsortedOutputArray.map(el => el.length)
//   const uniqueLengths = [];
//   lengths.forEach(n => !uniqueLengths.includes(n) ? uniqueLengths.push(n) : null)
//   uniqueLengths.sort((a,b) => a < b)
//
//   for(let i=0; i<uniqueLengths.length; i++) {
//     if(i !== 0) { result += '/' }
//     const sameLengthOutputs = unsortedOutputArray.filter(el => el.length === uniqueLengths[i])
//     sameLengthOutputs.sort()
//     result += sameLengthOutputs.join('/')
//   }
//   console.log(`result:`, result);
//   return result
// }
//
// function countLetters(sentence) {
//   const count = {}
//   for(letter of sentence) {
//     if(letter === ' ' || letter.match(/\W+/g) || letter.match(/[A-Z0-9]/)) {
//       continue
//     } else if(count[letter]) {
//       count[letter] += 1
//     } else {
//       count[letter] = 1
//     }
//   }
//   return count
// }
//
// function consolidateCounts(countObj1, countObj2) {
//   const consolidatedInfo = []
//
//   const allUniqueLetters = Object.keys(countObj1)
//   Object.keys(countObj2).forEach(k => !allUniqueLetters.includes(k) ? allUniqueLetters.push(k) : null)
//
//   for(letter of allUniqueLetters) {
//     let repeatedLetters = '', formattedOutput, n
//
//     if(countObj1[letter] && !countObj2[letter]) {
//       if(countObj1[letter] == 1) { continue }
//       n = countObj1[letter]
//       while(n > 0) {
//         repeatedLetters += letter
//         n--
//       }
//       formattedOutput = `1:${repeatedLetters}`
//       consolidatedInfo.push(formattedOutput)
//     }
//
//     if(countObj2[letter] && !countObj1[letter]) {
//       if(countObj2[letter] == 1) { continue }
//       n = countObj2[letter]
//       while(n > 0) {
//         repeatedLetters += letter
//         n--
//       }
//       formattedOutput = `2:${repeatedLetters}`
//       consolidatedInfo.push(formattedOutput)
//     }
//
//     if(countObj1[letter] && countObj2[letter]) {
//
//       if(countObj1[letter] === countObj2[letter]) {
//         if(countObj1[letter] == 1) { continue }
//         n = countObj1[letter]
//         while(n > 0) {
//           repeatedLetters += letter
//           n--
//         }
//         formattedOutput = `=:${repeatedLetters}`
//         consolidatedInfo.push(formattedOutput)
//       }
//
//       if(countObj1[letter] > countObj2[letter]) {
//         if(countObj1[letter] == 1) { continue }
//         n = countObj1[letter]
//         while(n > 0) {
//           repeatedLetters += letter
//           n--
//         }
//         formattedOutput = `1:${repeatedLetters}`
//         consolidatedInfo.push(formattedOutput)
//       }
//
//       if(countObj1[letter] < countObj2[letter]) {
//         if(countObj2[letter] == 1) { continue }
//         n = countObj2[letter]
//         while(n > 0) {
//           repeatedLetters += letter
//           n--
//         }
//         formattedOutput = `2:${repeatedLetters}`
//         consolidatedInfo.push(formattedOutput)
//       }
//     }
//   }
//
//   return consolidatedInfo
// }

mix("Are they here", "yes, they are here") //=> , "2:eeeee/2:yy/=:hh/=:rr")
mix("looping is fun but dangerous", "less dangerous than coding") //=>, "1:ooo/1:uuu/2:sss/=:nnn/1:ii/2:aa/2:dd/2:ee/=:gg")
mix(" In many languages", " there's a pair of functions") //=> , "1:aaa/1:nnn/1:gg/2:ee/2:ff/2:ii/2:oo/2:rr/2:ss/2:tt")
mix("Lords of the Fallen", "gamekult") //=> , "1:ee/1:ll/1:oo")
mix("codewars", "codewars") //=> , "")
mix("A generation must confront the looming ", "codewarrs") //=> , "1:nnnnn/1:ooooo/1:tttt/1:eee/1:gg/1:ii/1:mm/=:rr")

// Expected: '1:qqq/2:lll/2:yyy/1:ff/1:gg/1:kk/1:pp/1:uu/1:ww/2:aa/2:oo/2:tt/2:vv/=:ss'
//   instead got: '1:qqq/2:lll/2:yyy/1:pp/1:uu/1:ff/1:gg/1:kk/1:ww/2:aa/2:oo/2:tt/2:vv/=:ss'
