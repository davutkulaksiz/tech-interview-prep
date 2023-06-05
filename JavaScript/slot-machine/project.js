// 1. Deposit Money
// 2. Determine number of lines to bet on
// 3. Collect a bet amount
// 4. Spin the slot machine
// 5. Check if the user won
// 6. Gie the user their winnings
// 7. Play again

const prompt = require("prompt-sync")();

const ROWS = 3;
const COLS = 3;

const SYMBOLS_COUNT = {
  A: 2,
  B: 4,
  C: 6,
  D: 8,
};

const SYMBOL_VALUES = {
  A: 5,
  B: 4,
  C: 3,
  D: 2,
};

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

const getNumberOfLines = () => {
  while (true) {
    let numberOfLines = parseFloat(prompt("Enter the nubmer of lines (1-3): "));

    if (isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 3) {
      console.log("Invalid number of lines, try again!");
    } else {
      return numberOfLines;
    }
  }
};

const getBet = (balance, numberOflines) => {
  while (true) {
    let bet = parseFloat(prompt("Enter the bet per line: "));

    if (isNaN(bet) || bet <= 0 || bet > balance / numberOflines) {
      console.log("Invalid bet amount, try again!");
    } else {
      return bet;
    }
  }
};

let balance = deposit();
const numberOfLines = getNumberOfLines();
const bet = getBet(balance, numberOfLines);
