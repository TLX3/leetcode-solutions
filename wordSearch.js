let wordSearch = (board, word) => {
  word = word.split('');
  let search = (x, y, path) => {
    if (path > word.length) return false;
    if (path === word.length - 1) return true;
    if (x < 0 || y < 0
    || x >= board.length || y >= board[0].length 
    || board[x][y] !== word[path]) return false;
    board[x][y] = '#'
    if (search(x + 1, y, path + 1) 
    || search(x - 1, y, path + 1) 
    || search(x, y + 1, path + 1) 
    || search(x, y - 1, path + 1)) return true;
    board[x][y] = word[--path];
    return false;
  }
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[j].length; j++) {
      if (board[i][j] === word[0]) {
        if (search(i, j, 0)) return true;
      }
    }
  }
  return false;
}