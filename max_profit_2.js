// You are given an integer array prices where prices[i] is the price of a given stock on the ith day.
// On each day, you may decide to buy and/or sell the stock. You can only hold at most one share of the stock at any time. However, you can buy it then immediately sell it on the same day.
// Find and return the maximum profit you can achieve.

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    terminal: false
});

process.stdin.setEncoding('utf8');
rl.on('line', (line) => {
  const arr = line.split(' ').map(Number);

  console.log(maxProfit(arr));
  process.exit();
});

let maxProfit = function(prices) {
  let profit = 0;
  for(let i=0;i<prices.length-1;i++){
      let j=i+1;
      if(prices[j]>prices[i]){
          profit=profit+prices[j]-prices[i];
      }
  }
  return profit;
};