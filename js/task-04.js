
let counterValue = 0

const btnDecrement = document.querySelector('button[data-action="decrement"]');
const btnIncriment = document.querySelector('button[data-action="increment"]');
const valueSpan = document.querySelector("span#value");
btnDecrement.addEventListener("click", e =>{
valueSpan.textContent = --counterValue;
});
btnIncriment.addEventListener("click", e =>{
valueSpan.textContent = ++counterValue;
});