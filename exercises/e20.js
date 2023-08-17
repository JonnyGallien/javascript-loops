
// EXERCISE 20
// Return and array of 2 arrays
// (1 - an array of names that contain "a" in name, 2 - an array of names that don't have 'a' in name)
// separateNamesWithAFromRest(["jon", "alice", "andrew", "mark", "jimmy"]) -> [["alice", "andrew", "mark"], ["jon", "jimmy"]]
// NOTE: You MUST use double/nested FOR loop to solve this exercise. The array.includes() method is NOT allowed.

export function separateNamesWithAFromRest(array) {
  let tempArr = array;
  let firstArr = [];
  let secondArr = [];
  let arr = [];
  let firstArrTotal = 0;
  for (let i = 0; i < array.length; i++) {
    console.log(firstArrTotal)
    for (let x = 0; x < array[i].length; x++) {
      if (array[i].charAt(x) === 'a') {
        firstArr.push(tempArr[i]);
      } 
    }
    console.log(firstArr.length + ' and ' + firstArrTotal);
    if (firstArr.length === firstArrTotal) {
      secondArr.push(tempArr[i]);
    } else { 
      firstArrTotal++; 
    }
  }
  console.log(firstArr);
  console.log(secondArr);
  arr.push(firstArr);
  arr.push(secondArr);
  return arr;
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-20"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
