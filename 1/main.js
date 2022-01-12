const X_CLASS = "fill-x";
const CIRCLE_CLASS = "fill-o";

const cellelements = document.querySelectorAll(".tile");
const board = document.getElementsByClassName("board");
const winningMessage = document.getElementById("game");
let circleTurn;

const Winning = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];


cellelements.forEach(cell => {
  cell.addEventListener("click", handleClick, { once: true });
});

function handleClick(e) {
  const cell = e.target;
  const currentClass = circleTurn ? CIRCLE_CLASS : X_CLASS;
  placeMark(cell, currentClass);
  if (checkWin(currentClass)) {
    const currentClass = circleTurn
      ? winningMessage.classList.add("win-o")
      : winningMessage.classList.add("win-x");
  } else if (isDraw()) {
    winningMessage.classList.add("draw");
  } else {
    swapTurns();
  }
}

function isDraw() {
  return [...cellelements].every((cell) => {
    return (
      cell.classList.contains(X_CLASS) || cell.classList.contains(CIRCLE_CLASS)
    );
  });
}

function placeMark(cell, currentClass) {
  cell.classList.add(currentClass);
}
function swapTurns() {
  circleTurn = !circleTurn;
}

// function checkWin(currentClass) {
//   return Winning.some((vlaue) => {
//     return vlaue.every((index) => {
//       return cellelements[index].classList.contains(currentClass);
//     });
//   });
// }

function checkWin(currentClass) {
  var iswon = Winning.some(function (WinningConditions) {
    var winnings = WinningConditions.every(function (index) {
      return cellelements[index].classList.contains(currentClass);
    });
    if (winnings) {
      for (let j = 0; j < WinningConditions.length; j++) {
        cellelements[WinningConditions[j]].classList.add("highlight");
      }
    }
    return winnings;
  });
  return iswon;
}
