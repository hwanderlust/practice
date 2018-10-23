function jumpingOnClouds(c) {
  let jumps = 0

  for (let i = 0; i < c.length; i++) {

    if (c[i + 2] === 0) {
      i++
    }

    if (i !== c.length - 1) {
      jumps++
    }
  }

  return jumps
}

jumpingOnClouds([0, 0, 1, 0, 0, 1, 0]) // => 4
jumpingOnClouds([0, 0, 0, 1, 0, 0]) // => 3