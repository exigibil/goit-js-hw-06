const nameOut = document.querySelector("span#name-output");
document.getElementById("name-input").addEventListener("input", textInput => {
 if (textInput.target.value) {
    nameOut.textContent = textInput.target.value; } else {
    nameOut.textContent = "Anonymous";
}
});
