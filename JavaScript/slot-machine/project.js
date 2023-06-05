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

const spin = () => {
  const symbols = [];
  for (const [symbol, count] of Object.entries(SYMBOLS_COUNT)) {
    for (let i = 0; i < count; i++) {
      symbols.push(symbol);
    }
  }

  const reels = [];
  for (let i = 0; i < COLS; i++) {
    reels.push([]);
    const reelSymbols = [...symbols];
    for (let j = 0; j < ROWS; j++) {
      const randomIndex = Math.floor(Math.random() * reelSymbols.length);
      const selectedSymbol = reelSymbols[randomIndex];
      reels[i].push(selectedSymbol);
      reelSymbols.splice(randomIndex, 1);
    }
  }
  return reels;
};

const transpose = (reels) => {
  const rows = [];

  for (let i = 0; i < ROWS; i++) {
    rows.push([]);
    for (let j = 0; j < COLS; j++) {
      rows[i].push(reels[j][i]);
    }
  }
  return rows;
};

const getWinnings = (rows, bet, lines) => {
  let winnings = 0;

  for (let row = 0; row < lines; row++) {
    const symbols = rows[row];
    let allSame = true;

    for (const symbol of symbols) {
      if (symbol != symbols[0]) {
        allSame = false;
        break;
      }
    }

    if (allSame) {
      winnings += bet * SYMBOL_VALUES[symbols[0]];
    }
  }

  return winnings;
};

const printRows = (rows) => {
  for (const row of rows) {
    let rowString = "";
    for (const [i, symbol] of row.entries()) {
      rowString += symbol;
      if (i != row.length - 1) {
        rowString += " | ";
      }
    }
    console.log(rowString);
  }
};

const game = () => {
  let balance = deposit();

  while (true) {
    console.log(`You have a balance of ${balance}`);
    const numberOfLines = getNumberOfLines();

    const bet = getBet(balance, numberOfLines);
    balance -= bet * numberOfLines;

    const reels = transpose(spin());
    printRows(reels);

    const winnings = getWinnings(reels, bet, numberOfLines);
    balance += winnings;
    console.log(`You won ${winnings}`);

    if (balance <= 0) {
      console.log("You ran out of money!");
      break;
    }

    const playAgain = prompt("Do you want to play again? (y/n)? ");

    if (playAgain !== "y" && playAgain !== "Y") break;
  }
};

game();
