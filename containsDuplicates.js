let containsDuplicates = (arr, k, t) => {
  const map = arr.map((val, index) => ({ val, index })).sort((a, b) => {
    return a.val - b.val;
  });
  let l = 0;
  let r = 1;
  while (r < map.length) {
    let diff = Math.abs(map[l].val - map[r].val);
    let dist = Math.abs(map[l].index - map[r].index);
    if (diff <= t && dist <= k) return true;
    else if (diff > t) l++;
    else if (dist > k) r++;
    if (l === r) r++;
  }
  return false;
}