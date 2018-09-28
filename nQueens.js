let nQueens = (n) => {
  let boards = [];
  let isConflict = (board, row, col) => {
    for (let j = col; j >= 0; j--) {
      if (board[row][j] === 'Q') return true;
    }
    for (let i = row, j = col; i >= 0 && j >= 0; i--, j--) {
      if (board[i][j] === 'Q') return true;
    }
    for (let i = row, j = col; i < board.length && j >= 0; i++, j--) {
      if(board[i][j] === 'Q') return true;
    }
    return false;
  } 
  let backtrack = (board, col) => {
    if (col === n) {
      boards.push(board.map(arr => arr.join('')));
      return true;
    }
    let result = false;
    for (let i = 0; i < n; i++) {
      if (!isConflict(board, i, col)) {
        board[i][col] = 'Q';
        result = backtrack(board.slice(), col + 1) || result;
        board[i][col] = '.';
      }
    }
    return result;
  }
  let board = new Array(n);
  for (let i = 0; i < board.length; i++) {
    board[i] = new Array(n).fill('.');
  }
  backtrack(board, 0);
  return boards;
}