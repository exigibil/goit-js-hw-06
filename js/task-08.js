const registerForm = document.querySelector(".login-form");

registerForm.addEventListener("submit", e =>{
    e.preventDefault();


const { elements } = e.target;
const username = elements.email.value;
const password = elements.password.value;

if (!username || !password) {
    alert ("Toate campurile trebuie completate");
    return;
} 
   
    console.table({ Email: username, Password: password});

    registerForm.reset();
});
