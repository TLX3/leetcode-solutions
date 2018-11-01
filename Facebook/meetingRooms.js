let meetingRooms = (arr) => {
  if (!arr || arr.length === 0) return 0;
  if (arr.length === 1) return 1;
  // maximum number of overlaps at a given time = min number of rooms required
  // iterate through start times
  // keep pointer at end times and update pointer when current end < start
  let starts = [];
  let ends = [];
  for (let i = 0; i < arr.length; i++) {
    starts.push(arr[i].start);
    ends.push(arr[i].end);
  }
  starts.sort((a, b) => a - b);
  ends.sort((a, b) => a - b);
  let overlaps = 0;
  let j = 0;
  for (let i = 0; i < arr.length; i++) {
    if (start[i] < ends[j]) {
      overlaps++;
    } else {
      j++;
    }
  }
  return overlaps;
}

// [[0,1],[2, 30],[6, 9],[5, 10],[15, 20]]
// [[0 - 1][2 - [5 - [6 - 9] - 10] - [15 - 20] - 30]