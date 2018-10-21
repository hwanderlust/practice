const maxIncreaseKeepingSkyline = function (grid) {
  const topBotView = []
  let leftRightView;
  const max = {}
  // const newGrid = []
  let count = 0

  for(let i=0; i < grid.length; i++) {
    topBotView.push(Math.max(...grid[i]))
    // newGrid.push([])

    for(let j=0; j < grid.length; j++) {
      if(max[j]) {
        if (max[j] < grid[i][j]) {
          max[j] = grid[i][j]
        }
  
      } else {
        max[j] = grid[i][j]
      }
    }
  }

  leftRightView = Object.values(max)

  for(let x=0; x < topBotView.length; x++) {
    for(let y=0; y < topBotView.length; y++) {
      // newGrid[x][y] = topBotView[x] < leftRightView[y] ? topBotView[x] : leftRightView[y]
      count += topBotView[x] < leftRightView[y] ? topBotView[x] - grid[x][y] : leftRightView[y] - grid[x][y]
    }
  }
  // console.log(`newGrid:`, newGrid)
  console.log(`count:`, count)
  return count
};

maxIncreaseKeepingSkyline([
  [3, 0, 8, 4],
  [2, 4, 5, 7],
  [9, 2, 6, 3],
  [0, 3, 1, 0]
]);
