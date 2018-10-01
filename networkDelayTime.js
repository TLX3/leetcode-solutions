// Bellman-Ford type
let networkDelayTime1 = (times, N, K) => {
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

let networkDelayTime2 = (times, N, K) => {
  let constructGraph = (edgeList) => {
    let graph = [];
    for (let i = 0; i < edgeList.length; i++) {
      let list = edgeList[i];
      let u = edgeList[0];
      let v = edgeList[1];
      let w = edgeList[2];
      if (!graph[u]) {
        graph[u] = [];
      }
      graph[u].push({v, w});
    }
    return graph;
  }
  let nextNode = (weights, visited) => {
    let candidate = null;
    let candidateWeight = Infinity;
    for (let node in weights) {
      if (!visited[node] && weights[node] < candidateWeight) {
        candidateWeight = weights[node];
        candidate = node;
      }
    }
    return candidate;
  }
  let graph = constructGraph(times);
  let weights = {};
  for (let i = 1; i <= N; i++) {
    weights[i] = i === k ? 0 : Infinity;
  }
  let visited = {};
  let next = nexNode(weights, visited);
  while (next !== null) {
    let neighbors = graph[next];
    for (let i = 0; i < neighbors.length; i++) {
      let neighbor = neighbors[i];
      weights[neighbor.v] = Math.min(weights[neighbor.v], weights[next] + neighbor.w);
    }
    visited[next] = true;
    next = nextNode(weights, visited);
  }
  let maxWeight = -Infinity;
  for (let node in weights) {
    maxWeight = Math.max(maxWeight, weights[node]);
  }
  return maxWeight === Infinity ? -1 : maxWeight;
}