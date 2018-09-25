let findAllAnagrams = (s, p) => {
  let map = {}
  let result = []
  let slidingWindow = {}
  for (let i = 0; i < p.length; i++) {
    map[p.charAt(i)] = map[p.charAt(i)] ? map[p.charAt(i)] + 1 : 1
  }
  let left = 0, right = 0
  while (right < s.length) {
    if (map[s.charAt(right)]) {
      if (slidingWindow[s.charAt(right)] && map[s.charAt(right)] === 1) {
        left += 1
      }
      if (right - left + 1 === s.length) {
        result.push(left)
        left += 1
      }
    } else {
      left = right + 1
      slidingWindow = {}
    }
    slidingWindow[s.charAt(right)] = right + 1
    right += 1
  }
  return result
}