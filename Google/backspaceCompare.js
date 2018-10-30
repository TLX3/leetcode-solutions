let backspaceCompare = (S, T) => {
  let i = S.length - 1, j = T.length - 1, countA = 0, countB = 0;
  while(i >= 0 || j >= 0){
    while(i >= 0 && (S[i] == '#' || countA > 0)) S[i--] == '#' ? countA++ : countA--;
    while(j >= 0 && (T[j] == '#' || countB > 0)) T[j--] == '#' ? countB++ : countB--;
    if(i < 0 || j < 0) return i == j;
    if(S[i--] != T[j--]) return false;
  }
  return i == j;
}