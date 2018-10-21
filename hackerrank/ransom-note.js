function checkMagazine(magazine, note) {
  const clonedMag = magazine.slice()

  const check = note.map(word => {

    if(clonedMag.includes(word)) {
      clonedMag.splice(clonedMag.indexOf(word), 1)
      return true

    } else {
      return false
    }
  })
  
  check.includes(false) ? console.log('No') : console.log('Yes');
}

const magazine1 = ['give', 'me', 'one', 'grand', 'today', 'night']
const note1 = ['give', 'one', 'grand', 'today']
const mag2 = ['two', 'times', 'three', 'is', 'not', 'four']
const note2 = ['two', 'times', 'two', 'is', 'four']
const mag3 = ['ive', 'got', 'a', 'lovely', 'bunch', 'of', 'coconuts']
const note3 = ['ive', 'got', 'some', 'coconuts']

// checkMagazine(magazine1, note1) // => yes
// checkMagazine(mag2, note2) // => no
checkMagazine(mag3, note3) // => no
