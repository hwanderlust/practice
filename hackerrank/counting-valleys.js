function countingValleys(s) {
  let altitude = 0
  let valleys = 0
  let prevAlt = 0

  s.split('').forEach(l => {
    switch (l) {
      case 'U':
        altitude++
        if (altitude < 0 && prevAlt === 0) {
          valleys++
        }
        break

      case 'D':
        altitude--
        if (prevAlt === 0 && altitude < 0) {
          valleys++
        }
        break
    }

    prevAlt = altitude
  })

  return valleys
}

countingValleys(`UDDDUDUU`); // => 1
countingValleys(`DDUUDDUDUUUD`); // => 2