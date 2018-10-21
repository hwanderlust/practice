function reverseDirections(directions) {
  // left two are directions (left->right etc ), right two are roads (constant)
  // const newDirections = directions.slice().reverse()
  // ['Left on 9th Dr', 'Right on First Road', 'Begin on 3rd Blvd']

  // const test = newDirections[0].split(' ').slice(2, 4)
  // const first = newDirections[newDirections.length - 1].split(' ').slice(0, 2)
  // first.push(test[0], test[1])
  // console.log(first); // 'Begin on 9th Dr'

  const newDirections = [];
  let splitStep;

  switch(directions.length) {
    case 1:
      return directions;
    case 2:
    case 3:
      directions.forEach((step, i) => {
        if(i === 0) {
          splitStep = step.split(' ')
          newDirections[0] = splitStep.slice(0, 2).join(' ')
          newDirections[directions.length - 1] = splitStep.slice(2, 4).join(' ')

        } else if(i === directions.length - 1) {
          splitStep = directions[directions.length - 1].split(' ')
          newDirections[0] += ' ' + splitStep.slice(2, 4).join(' ')
          newDirections[directions.length - 1] = splitStep.slice(0, 2).join(' ') + ' ' + newDirections[directions.length - 1]

        } else {
          splitStep = step.split(' ')
          switch (splitStep[0]) {
            case 'Right':
              splitStep[0] = 'Left'
              break;
            case 'Left':
              splitStep[0] = 'Right'
              break
            default:
              break
          }
          newDirections[i] = splitStep.join(" ")
        }
      })
      break

    case 4:
      directions.reverse().forEach((dir, i) => {
        if(i === 0) {
          newDirections[0] = "Begin on"
          newDirections[0] += " " + dir.split(' ').slice(2, 4).join(' ')
        } else {
          if(dir.split(' ').slice(0, 1)[0] === 'Right') {
            newDirections[i] = 'Left on '
          } else if(dir.split(' ').slice(0, 1)[0] === 'Left') {
            newDirections[i] = 'Right on '
          } else if(dir.split(' ').slice(0, 1)[0] === 'Begin') {
            switch(newDirections[i-1].split(' ').slice(0, 1)[0]) {
              case 'Right':
                newDirections[i] = 'Left on '
                break
              case 'Left':
                newDirections[i] = 'Right on '
                break
              default:
                break
            }
          }
          newDirections[i] += dir.split(' ').slice(2, 4).join(' ')

        }

      })
      break
    default:
      break
  }


  console.log(newDirections);
}


// reverseDirections(['Begin on 3rd Blvd', 'Right on First Road', 'Left on 9th Dr']) //, ['Begin on 9th Dr', 'Right on First Road', 'Left on 3rd Blvd']);
// reverseDirections(["Begin on Road A","Right on Road B","Right on Road C","Left on Road D"]) // ,['Begin on Road D', 'Right on Road C', 'Left on Road B', 'Left on Road A']);
reverseDirections(['Begin on Lua Pkwy', 'Right on Sixth Alley', 'Right on 1st Cr']) // =>  ['Begin on 1st Cr', 'Left on Sixth Alley', 'Left on Lua Pkwy']

// [0].slice(0, 2) + [-1].slice(2, 4)
// OppositeDir + [1].slice(2, 4)
// OppositeDir + [2].slice(2, 4)
// [-1].slice(2, 4)

// newDirections = [];
// directions.forEach((dir, i) => newDirections[i] = dir.split(' ').slice(2, 4))
