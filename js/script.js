const fnInput = document.getElementById('first-name');
const fnError = document.getElementById('fn-error');
const nameReg = /[^a-zA-Z]+[\s]/;

fnInput.addEventListener('input', event =>{
  let fnInputVal = fnInput.value;

  if(fnInput.value != ""){
    fnInput.nextElementSibling.classList.add('not-empty');
  } else{
    fnInput.nextElementSibling.classList.remove('not-empty');
  }

  if(nameReg.test(fnInputVal)){
    fnError.textContent = "Numerical and special characters are not allowed.";
  }else{
    fnError.textContent = '';
  }
})