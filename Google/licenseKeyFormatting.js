let licenseKeyFormatting = (s, k) => {
  if (!s || (s.length === 1 && s !== '-')) return s.toUpperCase();
  s = s.split('').filter(char => char !== '-');
  let license = [];
  for (let i = s.length - k; i >= 0; i -= k) {
    license.push(s.slice(i, i + k).join(''));
    if (i !== 0 && i - k < 0) license.push(s.slice(0, i).join(''));
  }
  return license.reverse().join('-').toUpperCase();
}