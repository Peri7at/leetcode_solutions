// Given an integer x, return true if x is palindrome integer.
// An integer is a palindrome when it reads the same backward as forward.
// For example, 121 is a palindrome while 123 is not.

var readline = require('readline');

process.stdin.setEncoding('utf8');
var rl = readline.createInterface({
  input: process.stdin,
  terminal: false
});

rl.on('line', readLine);

function readLine (line) {
  console.log(isPalindrome(line));
  process.exit();
}

const isPalindrome = function(x) {
  const originalX = x.toString().split('');
  const reversedArr = x.toString().split('').reverse();
  return (JSON.stringify(reversedArr) === JSON.stringify(originalX))
};
