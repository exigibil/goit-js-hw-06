function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const divElem = document.querySelector("div#boxes");
const inputVal = document.querySelector('input[type="number"]');
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");


function createBox(amount) {
divElem.innerHTML = "";

  let width = 30;
  let height = 30;

  for (let i = 0; i < amount; i++) {
  const box = document.createElement("div");
  box.style.width = `${width}px`;
  box.style.height = `${height}px`;
  box.style.backgroundColor = getRandomHexColor();
  divElem.appendChild(box);

  width +=10;
  height +=10;

 }
}

function destroyBox() {
  divElem.innerHTML = "";
  inputVal.value= "";
}

createBtn.addEventListener("click", e => {
  const amount = parseInt(inputVal.value, 10);
  if (amount) {
    createBox(amount);
  }
});

destroyBtn.addEventListener('click', destroyBox);
 

