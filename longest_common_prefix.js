// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".

const longestCommonPrefix = function (strs) {
  if (strs.length < 1) return "";

  for (let i = 0; i < strs[0].length; i++) {
    // iterate through the 1st word
    for (let j = 1; j < strs.length; j++) {
      // iterate through all the words
      if (strs[0][i] != strs[j][i]) {
        return strs[j].slice(0, i);
      }
    }
  }

  return strs[0];
};

// Following test case should output "fl":
console.log(longestCommonPrefix(["flower", "flow", "flight"]));

// Following test case should output "":
console.log(longestCommonPrefix(["dog", "racecar", "car"]));
