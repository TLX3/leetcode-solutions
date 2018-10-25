let maxProfit = (prices) => {
  if (!prices || prices.length <= 1) return 0;
  let min = Infinity;
  let maxProfit = -Infinity;
  for (let price of prices) {
    min = Math.min(min, price);
    maxProfit = Math.max(maxProfit, price - min);
  }
  return maxProfit;
}