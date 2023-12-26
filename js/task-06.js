const newInput = document.querySelector("input#validation-input");

newInput.addEventListener('blur', ()  =>{
 const isValid = newInput.value.length == newInput.getAttribute('data-length');

 newInput.classList.toggle('valid', isValid);
 newInput.classList.toggle('invalid', !isValid);
});



//newInput.addEventListener ('blur', textInput => {
 //   const userLenght = newInput.value.length;
 //   const goodLength = newInput.getAttribute('data-length');
    
  //  if (userLenght == goodLength) {
  //  newInput.classList.remove('invalid');
  //  newInput.classList.add('valid');
  //  } else {
  //      newInput.classList.remove('valid');
  //      newInput.classList.add('invalid');  
  //  }
  //  });
    