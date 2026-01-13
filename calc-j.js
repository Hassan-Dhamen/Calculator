const screen = document.getElementById("myinput");
const numbers = document.querySelectorAll(".number");

for (let i = 0; i < numbers.length; i++) {
  numbers[i].onclick = function () {
    screen.value = screen.value + numbers[i].innerText;
  };
}

let firstNumber = "";
let operator = "";

const operators = document.querySelectorAll(".Operations");

for (let i = 0; i < operators.length; i++) {
  operators[i].onclick = function () {
    firstNumber = screen.value;
    operator = operators[i].innerText;
    screen.value = "";
  };
}

const equalBtn = document.getElementById("equal");

equalBtn.onclick = function () {
  let secondNumber = screen.value;
  let result = 0;

  if (operator === "+") {
    result = Number(firstNumber) + Number(secondNumber);
  } else if (operator === "-") {
    result = Number(firstNumber) - Number(secondNumber);
  } else if (operator === "x") {
    result = Number(firstNumber) * Number(secondNumber);
  } else if (operator === "/") {
    result = Number(firstNumber) / Number(secondNumber);
  }

  screen.value = result;
};

const resetBtn = document.getElementById("reset");

resetBtn.onclick = function () {
  screen.value = "";
  firstNumber = "";
  operator = "";
};

const clickSound = new Audio("sound.mp3");

const allButtons = document.querySelectorAll("button");

for (let i = 0; i < allButtons.length; i++) {
  allButtons[i].addEventListener("click", function () {
    clickSound.currentTime = 0;
    clickSound.volume = 0.5;

    clickSound.play();
  });
}


