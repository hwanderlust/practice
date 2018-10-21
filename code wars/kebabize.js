// not convinced the instructions, random tests and outputs are valid and correct..

// Abbe
function kebabize(str) {
  return str.replace(/[^a-z]/ig, '').
    replace(/^[A-Z]/, c => c.toLowerCase()).
    replace(/[A-Z]/g, c => `-${c.toLowerCase()}`);
}

// mine didn't work on their random tests for strings like rv Dgg, expected rv dgg instead of rv-dgg for some reason
function kebabize(str) {
  const regex = /[A-Z]/g
  const caps = str.match(regex)
  const splitted = str.split(regex)

  let result = ''
  let count = 0
  splitted.forEach((w, idx) => {
    if(idx === 0) {
      result += w

    } else {
      result = `${result}-` + caps[count].toLowerCase() + w
      count++
    }
  })

  if(result.match(/\d/g)) {
    result = result.replace(/\d/g, '')
  }

  console.log(result)
  return result
}

kebabize('camelsHaveThreeHumps') // camels-have-three-humps
kebabize('camelsHave3Humps') // camels-have-humps
