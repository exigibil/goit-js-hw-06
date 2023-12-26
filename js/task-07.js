
const sizeSpan = document.querySelector('span#text');

document.querySelector("input#font-size-control").addEventListener("input", ({target}) => {
sizeSpan.style.fontSize = target.value + "px";
        });
