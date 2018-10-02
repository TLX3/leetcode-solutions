// Heap sort
let heapSort = (arr) => {
  createMaxHeap(arr);
  let end = arr.length - 1;
  while (end > 0) {
    [arr[0], arr[end]] = [arr[end], arr[0]];
    heapify(arr, 0, end);
    end--;
  }
  return arr;
}

let createMaxHeap = (arr) => {
  let i = Math.floor((arr.length / 2) - 1);
  while (i >= 0) {
    heapify(arr, i, arr.length)
    i--;
  }
}

let heapify = (heap, start, end) => {
  let current, c1, c2;
  while (start < end) {
    current = start;
    c1 = 2 * current + 1;
    c2 = c1 + 1;
    if (c1 < end && heap[c1] > heap[current]) current = c1;
    if (c2 < end && heap[c2] > heap[current]) current = c2;
    if (current === start) return;
    [heap[start], heap[current]] = [heap[current], heap[start]];
    start = current;
  }
}

// Merge sort
let mergeSort = (arr) => {
  if (arr.length === 1) return;
  let mid = Math.floor(arr.length / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);
  mergeSort(left);
  mergeSort(right);
  merge(left, right, arr);
  return arr;
}

let merge = (left, right, arr) => {
  let i = 0;
  while (left.length && right.length) {
    if (right[0] < left[0]) {
      arr[i++] = right.shift();
    } else {
      arr[i++] = left.shift();
    }
  }
  while (left.length) {
    arr[i++] = left.shift();
  }
  while (right.length) {
    arr[i++] = right.shift();
  }
}

// Counting Sort
let countSort = (arr) => {
  let max = Math.max(...arr);
  let min = Math.min(...arr);
  let counts = new Array(max + 1).fill(0);
  arr.forEach(n => counts[n]++);
  const sortedArr = [];
  let currentSortedIndex = 0;
  for (let i = 0; i < counts.length; i++) {
    for (let j = 0; j < counts[i]; j++) {
      sortedArr[currentSortedIndex] = i;
      currentSortedIndex++;
    }
  }
  return sortedArr;
}

// Radix sort
let radixSort = arr => {
  const maxNum = Math.max(...arr) * 10;
  let divisor = 10;
  while (divisor < maxNum) {
    let buckets = [...Array(10)].map(() => []);
    for (let num of arr) {
      buckets[Math.floor((num % divisor) / (divisor / 10))].push(num);
    }
    arr = [].concat.apply([], buckets);
    divisor *= 10;
  }
  return arr;
};