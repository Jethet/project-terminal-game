var prompt = require("prompt");

prompt.start();

let player = "";
let choice = null;
let index = null;

function printInstructions() {
  console.log(
    "Enter your name as (capital) X or (capital) O.\nYour choice of square can be a number between 1 and 9.\nYou always have to enter a name and choice.\nThe game will end if you do not follow these instructions.\n"
  );
}

const grid = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

function createGrid() {
  grid.map((item) => {
    console.log(item);
  });
  getChoice();
}

function setSquare() {
  if (choice === "1" || choice === "2" || choice === "3") {
    choice = choice - 1;
    index = grid[0];
  } else if (choice === "4" || choice === "5" || choice === "6") {
    choice = choice - 4;
    index = grid[1];
  } else if (choice === "7" || choice === "8" || choice === "9") {
    choice = choice - 7;
    index = grid[2];
  }

  if (player === "X") {
    index[choice] = "X";
  } else if (player === "O") {
    index[choice] = "O";
  }
  createGrid();
  // getChoice();
}

function getChoice() {
  prompt.get(["name", "choice"], function (err, result) {
    player = result.name;
    choice = result.choice;
    validateChoice();
  });
}

function validateChoice() {
  if (!player || !choice) {
    errorAlert();
  }
  // if (player !== "O" || player !== "X") {
  //   errorAlert();
  // }
  if (choice < 1 || choice > 9) {
    errorAlert();
  }
  setSquare();
}

function errorAlert() {
  choice = null;
  console.log(
    "There is an error. Make sure you enter your player sign: capital X or capital O. The choice of square has to be between 1 and 9. Both name and choice must be entered."
  );
  return;
}

function playGame() {
  printInstructions();
  createGrid();
  // getChoice();
}

playGame();
