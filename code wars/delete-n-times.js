function deleteNth(arr,n){
  const count = {}
  const result = []
  arr.forEach(num => {
    count[num] ? count[num] += 1 : count[num] = 1
    count[num] <= n ? result.push(num) : null
  })
  console.log(result);
  return result
}

deleteNth([20,37,20,21], 1) //=> [20,37,21]
deleteNth([1,1,3,3,7,2,2,2,2], 3) //=> [1, 1, 3, 3, 7, 2, 2, 2]
