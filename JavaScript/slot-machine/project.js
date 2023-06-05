// 1. Deposit Money
// 2. Determine number of lines to bet on
// 3. Collect a bet amount
// 4. Spin the slot machine
// 5. Check if the user won
// 6. Gie the user their winnings
// 7. Play again

const prompt = require("prompt-sync")();

const deposit = () => {
  while (true) {
    let depositAmount = parseFloat(prompt("Enter a deposit amount: "));

    if (isNaN(depositAmount) || depositAmount <= 0) {
      console.log("Invalid deposit amount, try again!");
    } else {
      return depositAmount;
    }
  }
};

const depositAmount = deposit();
