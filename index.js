
// Write your algorithm here
function hasTargetSum(array, target) {
  for (let i = 0; i < array.length; i++) {
    const complement = target - array[i];
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] === complement) 
      return true;
    }
  }
  return false;
}
/* 
  Write the Big O time complexity of your function here
  The nested loop creates a time complexity of 
  =O(n * n)
 = O(n^2)
 
}
 
  Add your pseudocode here
  create teh fnction
  pass two arguments an array and a target
  ompare whether teh sum of any pair of elements equas to the target.
  If equal to target return true
  else return false
*/

/*
  Add written explanation of your solution here
  get the first number and subtract its complement from the target. 
  If  the second number is equal to the complimnet then return true. 
  If the compliment is not equal to the second number go to the next number and contiinue the process
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
  console.log("");


console.log("Expecting: true");
console.log("=>", hasTargetSum([-7, 10, 4, 8],3));
console.log("");

console.log("Expecting: true");
console.log("=>", hasTargetSum([1, 2, 3, 4],5));
console.log("");

console.log("Expecting: true");
console.log("=>", hasTargetSum([2, 2, 3, 3], 4));
console.log("");

console.log("Expecting: false");
console.log("=>", hasTargetSum([4],4));
console.log("");
}

module.exports = hasTargetSum;
