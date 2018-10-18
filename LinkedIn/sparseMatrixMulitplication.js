let multiply = (A, B) => { 
  let C = [...new Array(A.length)].map(row => new Array(B[0].length).fill(0));
  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < A[0].length; j++) {
      if (A[i][j]) {
        for (let k = 0; k < B[0].length; k++) {
          if (B[j][k]) C[i][k] += A[i][j] * B[j][k];
        }
      }
    }
  }
  return C;
}