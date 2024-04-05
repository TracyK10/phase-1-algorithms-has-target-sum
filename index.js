function hasTargetSum(array, target) {
  // Write your algorithm here

  // iterate through the array and pick the one element
  for(let i = 0; i<array.length ;i++){
    // pick the next element
    for(let j = i + 1; j<array.length;j++) {
      // check if the element picked and the next element add up to the target
      if(array[i] + array[j] === target){
        return true
      } 
      }
    }
    // if there are no element that add up to the target
    return false
  }



/* 
  Write the Big O time complexity of your function here
  The time complexity of this function is O(n^2) because there are two nested loops that go through the entirety of the input array
*/

/* 
  Add your pseudocode here
  use a for loop to iterate over each element in the array
  if the sum of one element and the next element is equal to the  target number then return true
  otherwise return false
*/

/*
  Add written explanation of your solution here
  The time complexity of this function is O(n^2) because there are two nested loops that go through the entirety of the input array
  the two loops will iterate over  every possible combination of elements from the input array. If there exists an element that adds up to the target number, it will return true
  otherwise it will return false
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
  console.log("=>", hasTargetSum([4, 2, 3], 7));
}

module.exports = hasTargetSum;
