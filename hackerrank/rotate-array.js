function rotLeft(a, d) {
  // a => array
  // d => num of rotations
  const arr = a.slice()
  for(let i=0; i < d; i++) {
    const first = arr.splice(0, 1)
    arr.push(first[0])
  }
  console.log(arr);
}

rotLeft([1, 2, 3, 4, 5], 4) // => [5, 1, 2, 3, 4]
