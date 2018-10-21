function findUniq(arr) {
  console.log(arr.find(n => arr.indexOf(n) === arr.lastIndexOf(n)));
  return arr.find(n => arr.indexOf(n) === arr.lastIndexOf(n));
  // const count = {}
  // for(let i=0; i<arr.length; i++) {
  //   count[arr[i]] ? count[arr[i]] += 1 : count[arr[i]] = 1
  //   if(i > 1) {
  //     if(count[arr[i]] > 1 && Object.values(count).includes(1)) { break }
  //   }
  //   console.log(`i:`, i);
  // }
  // console.log(`count:`, count);
  // for(el in count) {
  //   count[el] === 1 ? console.log(el) : null
  // }
}

findUniq([ 0, 1, 0 ]) //=>, 1);
findUniq([ 1, 1, 1, 2, 1, 1 ]) //=>, 2);
findUniq([ 3, 10, 3, 3, 3 ]) //=> , 10);
