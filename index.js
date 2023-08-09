const clearBtn = document.querySelector("#btn");
const screen = document.querySelector("#display-result");
const showResult = document.querySelector("#result");
const result = document.querySelector("#equal-to");

const numbers = document.querySelectorAll(".num");

numbers.forEach((num) => {
  num.addEventListener("click", () => display(num.textContent));
});

const clearScreen = () => {
  screen.value = "";
  showResult.value = "";
};
const display = (value) => {
  screen.value += value;
};
const calculate = () => {
  showResult.value = eval(screen.value);
};

clearBtn.addEventListener("click", clearScreen);
result.addEventListener("click", calculate);

// let number1 = document.querySelector("#num1");
// let number2 = document.querySelector("#num2");
// let number3 = document.querySelector("#num3");
// let number4 = document.querySelector("#num4");
// let number5 = document.querySelector("#num5");
// let number6 = document.querySelector("#num6");
// let number7 = document.querySelector("#num7");
// let number8 = document.querySelector("#num8");
// let number9 = document.querySelector("#num9");
// let number0 = document.querySelector("#num0");
// let addBtn = document.querySelector("#add");
// let subBtn = document.querySelector("#subtract");
// let mulBtn = document.querySelector("#multiple");
// let divBtn = document.querySelector("#divide");

// number1.addEventListener("click",()=> display("1"));
// number2.addEventListener("click",()=> display("2"));
// number3.addEventListener("click",()=> display("3"));
// number4.addEventListener("click",()=> display("4"));
// number5.addEventListener("click",()=> display("5"));
// number6.addEventListener("click",()=> display("6"));
// number7.addEventListener("click",()=> display("7"));
// number8.addEventListener("click",()=> display("8"));
// number9.addEventListener("click",()=> display("9"));
// number0.addEventListener("click",()=> display("0"));
// addBtn.addEventListener("click", () => display("+"));
// subBtn.addEventListener("click", () => display("-"));
// mulBtn.addEventListener("click", () => display("*"));
// divBtn.addEventListener("click", () => display("/"));
