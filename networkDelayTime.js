let networkDelayTime = (times, N, K) => {
  let distance = new Array(N + 1).fill(Infinity);
  distance[K] = 0;
  for (let i = 0; i < N; i++) {
    for (let i = 0; i < times.length; i++) {
      let u = times[i][0];
      let v = times[i][1];
      let w = times[i][2];
      if (distance[u] !== Infinity && distance[v] > distance[u] + w) {
        distance[v] = distance[u] + w;
      }
    }
  }
  let max = Math.max(...distance.slice(1));
  return max === Infinity ? -1 : max;
}