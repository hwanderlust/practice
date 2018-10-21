function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
  return enteredCode === correctCode && Date.parse(expirationDate) >= Date.parse(currentDate)

  // if(enteredCode === correctCode) {
  //   if(currentDate === expirationDate) {
  //     return true
  //   } else {
  //     const today = new Date(currentDate)
  //     const expDate = new Date(expirationDate)
  //     return today < expDate
  //   }
  // }
  // return false
}

checkCoupon('123','123','September 5, 2014','October 1, 2014') //=>, true);
checkCoupon('123','123','September 30, 2014','October 1, 2014') //=>, true);
checkCoupon('123','123','October 1, 2014','October 1, 2014') //=>, true);
checkCoupon('123','123','October 10, 2014','October 1, 2014') //=>, false);
checkCoupon('123a','123','September 5, 2014','October 1, 2014') //=> false);
