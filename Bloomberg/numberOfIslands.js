let numIslands = (grid) => {
  let count = 0;
  let explore = (i , j) => {
    grid[i][j] = '0';
    if (i + 1 < grid.length && grid[i + 1][j] === '1') explore(i + 1, j);
    if (i - 1 >= 0 && grid[i - 1][j] === '1') explore(i - 1, j);
    if (grid[i][j + 1] === '1') explore(i, j + 1);
    if (grid[i][j - 1] === '1') explore(i, j - 1);
  }
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === '1') {
        explore(i, j);
        count++;
      }
    }
  }
  return count;
}