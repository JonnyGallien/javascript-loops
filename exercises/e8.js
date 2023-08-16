
// EXERCISE 8
// Return an array with a bank account object with the greatest balance value
// Array example: bankAccounts in /data/data.js
// getClientWithGreatestBalance(bankAccounts) => [{ name: 'SomeName', balance: 32, ... }]

export function getClientWithGreatestBalance(array) {
  let arr = [];
  let client = -10;
  let clientBal = array[0].balance;
  for (let i = 0; i < array.length; i++) {
    if (array[i].balance > clientBal) {
      client = i;
      clientBal = array[i].balance;
    }
  }
if (client === -10) {
  return [];
} else {
  arr.push(array[client]);
  return arr;
}

}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-8"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
