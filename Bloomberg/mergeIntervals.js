let merge = (intervals) => {
  if (!intervals || intervals.length <= 1) return intervals;
  let results = [];
  intervals = intervals.sort(((a, b) => a.start - b.start ));
  let current = intervals[0];
  for (let i = 1; i < intervals.length; i++) {
    let next = intervals[i];
    if (current.end >= next.start) {
      if (current.end <= next.end) current = new Interval(current.start, next.end);
    } else {
      results.push(current);
      current = next;
    }
  }
  results.push(current);
  return results;
}