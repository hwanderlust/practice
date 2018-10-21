function gradingStudents(grades) {
  const result = []
  grades.forEach((grade, idx) => {
      switch(grade % 5) {
        case(3):
          result.push((grade+=2) >= 40 ? grade : grade-=2)
          break
        case(4):
          result.push((grade++) >= 40 ? grade : grade--)
          break
        default:
          result.push(grade)
          break
      }
  })

  console.log(result);
  return result
}

gradingStudents([73, 67, 38, 33]) // => [75, 67, 40, 33]
gradingStudents([3, 62, 89, 95]) // => [3, 62, 90, 95]
gradingStudents([35, 36, 37, 38]) // => [35, 36, 37, 40]
gradingStudents([40, 41, 42, 43]) // => [40, 41, 42, 45]
