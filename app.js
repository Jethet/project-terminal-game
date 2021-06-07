var prompt = require("prompt");

prompt.start();

let player = "";
let choice = null

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

function checkSquare() {
  prompt.get(["username", "choice"], function (err, result) {
    player = result.username
    choice = result.choice
    console.log(player, choice);
  });
}


checkSquare()

// handleKeyDown = (event) => {
//   if (event.keyCode === 88) {
//     console.log("X");
//   }
//   if (event.keyCode === 79) {
//     console.log("O");
//   }
// };

// window.addEventListener("keydown", handleKeySpace);
