function timeConversion(s) {
  const hh = s.slice(0, 2)
  const dayNight = s.slice(8, 10)
  let militaryHh;

  if(dayNight.toUpperCase() === 'AM') {
    if(parseInt(hh) === 12) {
      militaryHh = '00'
    }
  }

  if(dayNight.toUpperCase() === 'PM' ) {
    if(parseInt(hh) === 12) {
      militaryHh = '12'
    } else {
      militaryHh = String(parseInt(hh) + 12)
    }
  }

  if(militaryHh) {
    let militaryTime = s.replace(hh, militaryHh)
    console.log(militaryTime.slice(0, 8));
  } else {
    console.log(s.slice(0, 8));
  }
}

timeConversion('07:05:45PM') //=> 19:05:45
timeConversion('12:05:45PM') //=> 12:05:45
timeConversion('07:05:45AM') //=> 07:05:45
timeConversion('12:05:45AM') //=> 00:05:45
