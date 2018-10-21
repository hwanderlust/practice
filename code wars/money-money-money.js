
function calculateYears(principal, interest, tax, desired) {
  let years = 0

  if(!!checkEarnings(principal, desired, years)) {
    return null
  } else {
    return handleCalc(years, principal, interest, tax, desired)
  }
}

function calcNetEarnings(amount, interest, tax) {
  const accrual = amount * interest
  const taxes = accrual * tax
  const net = amount + accrual - taxes
  return net
}

function checkEarnings(amount, desired, years) {
  if(amount >= desired) {
    return years
  } else {
    return false
  }
}

function incrementYears(years) {
  years++
  return years
}

function handleCalc(years, principal, interest, tax, desired) {
  years = incrementYears(years)
  let net = calcNetEarnings(principal, interest, tax)
  if(!!checkEarnings(net, desired, years)) {
  } else {
    handleCalc(years, net, interest, tax, desired)
  }
}

calculateYears(1000, 0.05, 0.18, 1100)
calculateYears(1000, 0.1625, 0.18, 1200)
calculateYears(1000, 0.05, 0.18, 1000)
