/* 
  iterate through each number in array
    for current num, identify complement that adds to target (comp = target - num)
    iterate through rest of array
      check if any number is our complement
      if so, return true
  if I reach end of array, return false
*/

// ----- Runtime:  O(n^2) => NOT great :( -----
// function hasTargetSum(array, target) {
//   for(let i = 0; i < array.length; i++) {
//     // ----- n steps -----
//     const complement = target - array[i]
//     for(let j = i + 1; j < array.length; j++) {
//       // ----- n + n steps -----
//       if (array[j] === complement) return true;
//     }
//   }
//   return false;
// }

/*
create object to keep track of numbers already seen
iterate through array elements (numbers)
for current num, identify complement that adds to target (comp = target - num)
  check if any key on object is complement
  if so, return true
if I reach end of array, return false
*/

// ----- Runtime: O(n) => better! :) -----
function hasTargetSum(array, target) {
  const seenNumbers = {}
  for(const number of array) { // ----- n steps -----
    const complement = target - number
    if(complement in seenNumbers) return true;
    seenNumbers[number] = true
  }
  return false;
}

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
}

module.exports = hasTargetSum;
