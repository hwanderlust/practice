function multiplicationTable(row,col){
  const result = []

  for(let i=1; i <= row; i++) {
    let cols = 1
    const multiples = []

    while(cols <= col) {
      multiples.push(i*cols)
      cols++
    }

    result.push(multiples)
  }

  console.log(result);
  return result
}

multiplicationTable(2,2) //=>, [[1,2],[2,4]])
multiplicationTable(3,3) //=>, [[1,2,3],[2,4,6],[3,6,9]])
multiplicationTable(3,4) //=>, [[1,2,3,4],[2,4,6,8],[3,6,9,12]])
multiplicationTable(4,4) //=>, [[1,2,3,4],[2,4,6,8],[3,6,9,12],[4,8,12,16]])
multiplicationTable(2,5) //=>, [[1,2,3,4,5],[2,4,6,8,10]])
