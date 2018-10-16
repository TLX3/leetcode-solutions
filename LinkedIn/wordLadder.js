let ladderLength = (beginWord, endWord, wordList) => {
  if (beginWord === endWord) return 1;
  let queue = [beginWord];
  let dict = new Set(wordList);
  let seen = new Set(queue);
  let distance = 1;
  if (!dict.has(endWord)) return 0;
  while (queue.length > 0) {
    let nextLevel = [];
    for (let word of queue) {
      if (word === endWord) return distance;
      let arr = word.split('');
      for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < 26; j++) {
          arr[i] = String.fromCharCode(97 + j);
          let newWord = arr.join('');
          if (!seen.has(newWord) && dict.has(newWord)) {
            nextLevel.push(newWord);
            seen.add(newWord);
          }
          arr[i] = word[i];
        }
      }
    }
    distance++;
    queue = nextLevel;
  }
  return 0;
}