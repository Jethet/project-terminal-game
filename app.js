var prompt = require("prompt");

prompt.start();

let player = "";
let choice = null;

const grid = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

function createGrid() {
  grid.map((item) => {
    console.log(item);
  });
}

function setSquare() {
  if (player === "X") {
    if (choice === "1" || choice === "2" || choice === "3") {
      choice = choice - 1;
      let index = grid[0];
      index[choice] = "X";
      createGrid();
    }
    if (choice === "4" || choice === "5" || choice === "6") {
      choice = choice - 4;
      let index = grid[1];
      index[choice] = "X";
      createGrid();
    }
    if (choice === "7" || choice === "8" || choice === "9") {
      choice = choice - 7;
      let index = grid[2];
      index[choice] = "X";
      createGrid();
    }
  } else if (player === "O") {
    if (choice === "1" || choice === "2" || choice === "3") {
      choice = choice - 1;
      let index = grid[0];
      index[choice] = "O";
      createGrid();
    }
    if (choice === "4" || choice === "5" || choice === "6") {
      choice = choice - 4;
      let index = grid[1];
      index[choice] = "O";
      createGrid();
    }
    if (choice === "7" || choice === "8" || choice === "9") {
      choice = choice - 7;
      let index = grid[2];
      index[choice] = "O";
      createGrid();
    }
  }
  getChoice()
}

function getChoice() {
  prompt.get(["name", "choice"], function (err, result) {
    player = result.name;
    choice = result.choice;
    setSquare();
  });
}

function playGame() {
  createGrid();
  getChoice();
}

playGame();
