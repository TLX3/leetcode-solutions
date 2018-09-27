let subarraySum = (arr, k) => {
    if (arr.length === 0) return 0;
    let preSum = { 0 : 1 };
    let currentSum = 0;
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
      currentSum += arr[i];
      if (preSum[currentSum - k]) total += preSum[currentSum - k];
      preSum[currentSum] = preSum[currentSum] ? preSum[currentSum] + 1 : 1;
    }
    return total;
}