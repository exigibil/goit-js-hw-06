function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const getColor = document.querySelector("span.color"),
bodyStyle = document.body.style;

document.querySelector("button.change-color").addEventListener( "click", ev =>{
const randomColor = getRandomHexColor();
getColor.textContent = randomColor;
bodyStyle.backgroundColor = randomColor;

});