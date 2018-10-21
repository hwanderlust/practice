function array_diff(a, b) {
  //remove from a if present in b
  return a.filter(function(x) { return b.indexOf(x) == -1; });
  // if el in a is not found in b, return it 

  // if(a.length === 0) {
  //   console.log(a);
  //   return a
  // } else if(b.length === 0) {
  //   console.log(a);
  //   return a
  // } else {
  //   let result = a.slice()
  //   b.forEach(n => {
  //     result = result.filter(num => num !== n)
  //   })
  //   console.log(result);
  //   return result
  // }
}

array_diff([], [4,5]) //=>, [], "a was [], b was [4,5]");
array_diff([3,4], [3]) //=> , [4], "a was [3,4], b was [3]");
array_diff([1,8,2], []) //=>, [1,8,2], "a was [1,8,2], b was []");
