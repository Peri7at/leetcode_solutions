// Given a roman numeral, convert it to an integer.

const roman_num = { "I": 1,"V": 5, "X": 10, "L": 50, "C": 100, "D": 500, "M": 1000}

const romanToInt = function(s) {
  let sum = 0;
  for (let i = 0; i < s.length; i++) {
      (roman_num[s[i]] < roman_num[s[i+1]]) ? sum -= roman_num[s[i]] : sum+=roman_num[s[i]]
  }
  return sum;
};

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    terminal: false
});

process.stdin.setEncoding('utf8');
rl.on('line', (line) => {
  console.log(romanToInt(line));
  process.exit();
});


// Alternative Solution:

const romanToInt2 = function(s) {
  let correctRom = {'IV':'IIII','IX':'VIIII','XL':'XXXX','XC':'LXXXX','CD':'CCCC','CM':'DCCCC'}
  for (roman in correctRom) {
    s = s.replace(roman, correctRom[roman])
  }
  return s.split('').reduce((sum, curr) => sum += roman_num[curr], 0)
};