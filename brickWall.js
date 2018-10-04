let leastBricks = (wall) => {
  if (wall.length === 0) return 0;
  let count = 0;
  let edgeCounts = {};
  for (let list of wall) {
    let len = 0;
    for (let i = 0; i < list.length - 1; i++) {
      len += list[i];
      edgeCounts[len] = edgeCounts[len] ? edgeCounts[len] + 1 : 1;
      count = Math.max(count, edgeCounts[len]);
    }
  }
  return wall.length - count;
}