const calculator = document.querySelector(".calc-grid");
const output = document.querySelector(".output");

const previousOperandTxtEl = document.createElement("div");
const currentOperandTxtEl = document.createElement("div");

previousOperandTxtEl.classList.add("previous-operand");
currentOperandTxtEl.classList.add("current-operand");

output.append(previousOperandTxtEl, currentOperandTxtEl);

const allClearBtn = document.createElement("button");
allClearBtn.textContent = "AC";
allClearBtn.classList.add("large-btn");
allClearBtn.setAttribute("data-all-clear", true);

const deleteBtn = document.createElement("button");
deleteBtn.textContent = "DEL";
deleteBtn.setAttribute("data-delete", true);

const divisionBtn = document.createElement("button");
divisionBtn.textContent = ":";
divisionBtn.setAttribute("data-operation", true);

const oneBtn = document.createElement("button");
oneBtn.textContent = "1";
oneBtn.setAttribute("data-number", true);

const twoBtn = document.createElement("button");
twoBtn.textContent = "2";
twoBtn.setAttribute("data-number", true);

const threeBtn = document.createElement("button");
threeBtn.textContent = "3";
threeBtn.setAttribute("data-number", true);

const multiplicationBtn = document.createElement("button");
multiplicationBtn.textContent = "*";
multiplicationBtn.setAttribute("data-operation", true);

const fourBtn = document.createElement("button");
fourBtn.textContent = "4";
fourBtn.setAttribute("data-number", true);

const fiveBtn = document.createElement("button");
fiveBtn.textContent = "5";
fiveBtn.setAttribute("data-number", true);

const sixBtn = document.createElement("button");
sixBtn.textContent = "6";
sixBtn.setAttribute("data-number", true);

const additionBtn = document.createElement("button");
additionBtn.textContent = "+";
additionBtn.setAttribute("data-operation", true);

const sevenBtn = document.createElement("button");
sevenBtn.textContent = "7";
sevenBtn.setAttribute("data-number", true);

const eightBtn = document.createElement("button");
eightBtn.textContent = "8";
eightBtn.setAttribute("data-number", true);

const nineBtn = document.createElement("button");
nineBtn.textContent = "9";
nineBtn.setAttribute("data-number", true);

const subtractionBtn = document.createElement("button");
subtractionBtn.textContent = "-";
subtractionBtn.setAttribute("data-operation", true);

const punctumBtn = document.createElement("button");
punctumBtn.textContent = ".";
punctumBtn.setAttribute("data-number", true);

const zeroBtn = document.createElement("button");
zeroBtn.textContent = "0";
zeroBtn.setAttribute("data-number", true);

const sumBtn = document.createElement("button");
sumBtn.textContent = "=";
sumBtn.setAttribute("data-equals", true);
sumBtn.classList.add("large-btn");

calculator.append(
  allClearBtn,
  deleteBtn,
  divisionBtn,
  oneBtn,
  twoBtn,
  threeBtn,
  multiplicationBtn,
  fourBtn,
  fiveBtn,
  sixBtn,
  additionBtn,
  sevenBtn,
  eightBtn,
  nineBtn,
  subtractionBtn,
  punctumBtn,
  zeroBtn,
  sumBtn
);

// =======================================
class Calculator {
  constructor(previousOperandTxtEl, currentOperandTxtEl) {
    this.previousOperandTxtEl = previousOperandTxtEl;
    this.currentOperandTxtEl = currentOperandTxtEl;
    this.clear();
  }

  clear() {
    this.currentOperand = "";
    this.previousOperand = "";
    this.operation = undefined;
  }

  delete() {}

  appendNumber(number) {
    if (number === "." && this.currentOperand.includes(".")) return;
    this.currentOperand = this.currentOperand.toString() + number.toString();
  }

  chooseOperation(operation) {
    if (this.currentOperand === "") return;
    if (this.previousOperand !== "") {
      this.compute();
    }
    this.operation = operation;
    this.previousOperand = this.currentOperand;
    this.currentOperand = "";
  }

  compute() {
    let computation;
    const prev = parseFloat(this.previousOperand);
    const current = parseFloat(this.currentOperand);
  }

  updateDisplay() {
    this.currentOperandTxtEl.innerText = this.currentOperand;
    this.previousOperandTxtEl.innerText = this.previousOperand;
  }
}

// =======================================

const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operation]");

console.log(deleteBtn);

const calculatorObject = new Calculator(
  previousOperandTxtEl,
  currentOperandTxtEl
);

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    calculatorObject.appendNumber(button.innerText);
    calculatorObject.updateDisplay();
  });
});

operationButtons.forEach((button) => {
  button.addEventListener("click", () => {
    calculatorObject.chooseOperation(button.innerText);
    calculatorObject.updateDisplay();
  });
});

sumBtn.addEventListener("click", (button) => {
  calculator.compute();
  calculator.updateDisplay();
});

allClearBtn.addEventListener("click", (button) => {
  calculator.clear();
  calculator.updateDisplay();
});

deleteBtn.addEventListener("click", (button) => {
  calculator.delete();
  calculator.updateDisplay();
});

sumBtn.addEventListener("click", (button) => {
  calculatorObject.compute();
  calculatorObject.updateDisplay();
});
