// buy + sell stocks for max profit
// 1 transaction
let maxProfit = (prices) => {
  if (!prices.length) return 0;
  i10 = 0;
  i11 = -Infinity;
  for (let price of prices) {
    i10 = Math.max(i10, i11 + price);
    i11 = Math.max(i11, -1 * price);
  }
  return i10;
}
// arbitrary transactions
let maxProfit2 = (prices) => {
  if (!prices.length) return 0;
  let ik0 = 0;
  let ik1 = -Infinity;
  for (let price of prices) {
    ik0 = Math.max(ik0, ik1 + price);
    ik1 = Math.max(ik1, ik0 - price);
  }
  return ik0;
}
// 2 transactions
let maxProfit3 = (prices) => {
  if (!prices.length) return 0;
  let i10 = 0, i11 = -Infinity;
  let i20 = 0, i21 = -Infinity;
  for (let price of prices) {
    i20 = Math.max(i20, i21 + price);
    i21 = Math.max(i21, i10 - price);
    i10 = Math.max(i10, i11 + price);
    i11 = Math.max(i11, -1 * price);
  }
  return i20;
}
// k most transactions
let maxProfit4 = (k, prices) => {
  if (!prices.length || k === 0) return 0;
  if (k >= prices.length) {
    if (!prices.length) return 0;
    let ik0 = 0;
    let ik1 = -Infinity;
    for (let price of prices) {
      ik0 = Math.max(ik0, ik1 + price);
      ik1 = Math.max(ik1, ik0 - price);
    }
    return ik0;
  } 
  let Tik0 = new Array(k + 1).fill(0);
  let Tik1 = new Array(k + 1).fill(-Infinity);
  for (let price of prices) {
    for (let j = k; j > 0; j--) {
      Tik0[j] = Math.max(Tik0[j], Tik1[j] + price);
      Tik1[j] = Math.max(Tik1[j], Tik0[j - 1] - price);
    }
  }
  return Tik0[k];
}
// with cooldown and arbitrary transactions
let maxProfit5 = (prices) => {
  if (!prices.length) return 0;
  let ik0 = 0;
  let ik1 = -Infinity;
  let preIk0 = 0;
  for (let price of prices) {
    let oldIk0 = ik0;
    ik0 = Math.max(ik0, ik1 + price);
    ik1 = Math.max(ik1, preIk0 - price);
    preIk0 = oldIk0;
  }
  return ik0;
}
// with transaction fee and arbitrary transactions
let maxProfit6 = (prices) => {
  if (!prices.length) return 0;
  let ik0 = 0;
  let ik1 = -Infinity;
  for (let price of prices) {
    ik0 = Math.max(ik0, ik1 + price);
    ik1 = Math.max(ik1, ik0 - price - fee);
  }
  return ik0;
}