let minMeetingRooms = (intervals) => {
  // find maximum number of overlaps at given time
  let starts = [], ends = [];
  for (let i = 0; i < intervals.length; i++) {
    starts[i] = intervals[i].start;
    ends[i] = intervals[i].end;
  }
  starts.sort((a, b) => a - b);
  ends.sort((a, b) => a - b);
  let overlaps = 0;
  let j = 0;
  for (let i = 0; i < starts.length; i++) {
    if (starts[i] < ends[j]) {
      overlaps++;
    } else {
      j++;
    }
  }
  return overlaps;
}