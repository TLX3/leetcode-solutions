let leastInterval = (tasks, n) => {
  if (n === 0) return tasks.length;
  if (tasks.length === 1) return 1;
  let counts = {}
  tasks.forEach((task) => {
    counts[task] = counts[task] ? counts[task] + 1 : 1;
  })
  let types = Object.keys(counts).sort((a, b) => counts[a] - counts[b]);
  let maxCount = counts[types[types.length - 1]] - 1;
  let maxIdleCount = maxCount * n;
  for (let i = types.length - 2; i >= 0; i--) {
    maxIdleCount -= Math.min(maxCount, counts[types[i]]);
  }
  return maxIdleCount > 0 ? maxIdleCount + tasks.length : tasks.length;
} 