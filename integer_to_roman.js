// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.
// Given an integer, convert it to a roman numeral.

function intToRoman(num) {
  const map = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };
  let result = "";
  Object.entries(map).forEach(([letter, n]) => {
    result += letter.repeat(Math.floor(num / n));
    num %= n;
  });
  return result;
}

// Following should output "III":
console.log(intToRoman(3));

// Following should output "LVIII":
console.log(intToRoman(58));

// Following should output "MCMXCIV":
console.log(intToRoman(1994));
