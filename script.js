const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const specialCharacters = ["%", "*", "/", "-", "+", "="];
let output = "";

const calculate = function (btnValue) {
  // display.focus()
  if (btnValue === "=" && output !== "") {
    output = eval(output.replace("%", "/100"));
  } else if (btnValue === "AC") {
    output = "";
  } else if (btnValue === "DEL") {
    output = output.toString().slice(0, -1);
  } else {
    if (output === "" && specialCharacters.includes(btnValue)) return;
    output += btnValue;
  }

  display.value = output;
};

//add event listener to call calculate() function on click
buttons.forEach((button) => {
  //button click listener calls calculate() function with dataset value as argument
  button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});
