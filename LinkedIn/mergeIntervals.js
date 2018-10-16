let merge = (intervals) => {
  if (intervals.length <= 1) return intervals;
  intervals.sort((a, b) => a.start - b.start);
  let merged = [];
  let current = intervals[0];
  for (let i = 1; i < intervals.length; i++) {
    let next = intervals[i];
    if (current.end >= next.start) {
      if (current.end <= next.end) current = new Interval(current.start, next.end);
    } else {
      merged.push(current);
      current = next;
    }
    if (i === intervals.length - 1) merged.push(current);
  }
  return merged;
}