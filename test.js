var prompt = require("prompt");

prompt.start();

let player = "";
let choice = null;
let index = null

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
    getChoice();
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

