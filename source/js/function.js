let curCell;
let it;
let state;
let looper;
let tape = [];
const machine = document.getElementById("machine");
const controller = document.getElementsByClassName("controller");

function executeClear() {
  machine.innerHTML = "";
  tape = [];
  clearInterval(looper);
}

function move(newSymbol, arah, newState, isPushing) {
  if (isPushing) {
    tape.push(new Cell("B"));
  }

  tape[it].changeTo(newSymbol);
  machine.childNodes[it].textContent = newSymbol;

  machine.childNodes[it].className += " active";
  machine.childNodes[it + 1].scrollIntoView();

  state = newState;
  if (arah == "R") {
    it++;
  } else if (arah == "L") {
    it--;
  }
}

function reachedEndState() {
  machine.childNodes[it].className += " active";
  machine.childNodes[it + 1].scrollIntoView();
}
