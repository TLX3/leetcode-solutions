let solution = (knows) => {
  return (n) => {
    if (n === 1) return 0;
    let celebrity = 0;
    for (let i = 1; i < n; i++) {
      if (!knows(i, celebrity)) celebrity = i;
    }
    for (let i = 0; i < n; i++) {
      if (i !== celebrity && (knows(celebrity, i) || !knows(i, celebrity))) return -1;
    }
    return celebrity;
  }
}