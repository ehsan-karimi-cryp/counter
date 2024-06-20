const counter = document.querySelector(".counter");
const buttons = document.querySelectorAll(".btn");

var counterValue = 0;

function textCounter(x) {
  if (x > 0) {
    counter.style.color = "green";
  } else if (x == 0) {
    counter.style.color = "black";
  } else if (x < 0) {
    counter.style.color = "red";
  }
  return x;
}

buttons[0].addEventListener("click", () => {
  counterValue = counterValue + 1;
  counter.innerHTML = textCounter(counterValue);
});
buttons[1].addEventListener("click", () => {
  counterValue = 0;
  counter.innerHTML = textCounter(counterValue);
});
buttons[2].addEventListener("click", () => {
  counterValue = counterValue - 1;
  counter.innerHTML = textCounter(counterValue);
});
