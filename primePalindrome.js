let primePalindrome = (n) => {
  if (n <= 2) return 2;
  let isPalindrome = (n) => {
    return ('' + n) === ('' + n).split('').reverse().join('');
  }
  let nextPalindrome = (n) => {
    let str = String(n);
    let mid = Math.ceil(str.length / 2);
    let left = str.slice(0, mid);
    let temp = String(Number(left) + 1);
    if (mid === str.length - mid) {
      return Number(temp + temp.slice(0, mid).split('').reverse().join(''));
    } else {
      if (temp.length === mid) {
        return Number(temp + temp.slice(0,str.length - mid).split('').reverse().join(''));
      } else {
        return Number(temp.slice(0, mid) + temp.slice(0, mid).split('').reverse().join(''));
      }
    }
  }
  let isPrime = (n) => {
    if (n % 2 === 0) return false;
    for (let i = 3; i <= Math.sqrt(n); i += 2) {
      if (n % i === 0) return false;
    }
    return true;
  }
  let current = n;
  while (!isPalindrome(current)) current++;
  while (true) {
    if (isPrime(current)) return current;
    current = nextPalindrome(current);
  }
}