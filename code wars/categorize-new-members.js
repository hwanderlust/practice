function openOrSenior(data){
  let age;
  let handicap;
  let result = [];
  data.forEach(person => {
    age = person[0]
    handicap = person[1]
    age >= 55 && handicap > 7 ? result.push("Senior") : result.push("Open")
  })
  return result
}

openOrSenior([[18, 20],[45, 2],[61, 12],[37, 6],[21, 21],[78, 9]]) // ["Open", "Open", "Senior", "Open", "Open", "Senior"]
