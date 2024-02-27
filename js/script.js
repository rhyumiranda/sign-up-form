function validateName(){
  const fnInput = document.getElementById('first-name');
  const lnInput = document.getElementById('last-name');

  const fnError = document.getElementById('fn-error');
  const lnError = document.getElementById('ln-error');

  const nameReg = /[^a-zA-Z\s]/;
  

  //Checker for First Name
  fnInput.addEventListener('input', event =>{
    let fnInputVal = fnInput.value;
  
    if(nameReg.test(fnInputVal)){
      fnError.textContent = "Numerical and special characters are not allowed.";
    } else{
      fnError.textContent = "";
    };
  
    if(fnInputVal != ""){
      fnInput.nextElementSibling.classList.add('not-empty');
      fnInput.nextElementSibling.style.fontSize = '0.9rem';
    } else{
      fnInput.nextElementSibling.classList.remove('not-empty');
      fnInput.nextElementSibling.style.fontSize = '1rem';
    };
  });

  //Checker for Last Name
  lnInput.addEventListener('input', event =>{
    let lnInputVal = lnInput.value;
  
    if(nameReg.test(lnInputVal)){
      lnError.textContent = "Numerical and special characters are not allowed.";
    } else{
      lnError.textContent = "";
    };
  
    if(lnInputVal != ""){
      lnInput.nextElementSibling.classList.add('not-empty');
      lnInput.nextElementSibling.style.fontSize = '0.9rem';
    } else{
      lnInput.nextElementSibling.classList.remove('not-empty');
      lnInput.nextElementSibling.style.fontSize = '1rem';
    };
  });
};

function validateEmail(){
  const emailInput = document.getElementById('email');
  const emailError = document.getElementById('email-error');

  const emailReg = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

  emailInput.addEventListener('input', event =>{
    let emailInputVal = emailInput.value;
  
    if(emailReg.test(emailInputVal)){
      emailError.textContent = "";
    } else if(emailInputVal == ""){
      emailError.textContent = "";
    }else{
      emailError.textContent = "Kindly enter a valid email.";
    };
  
    if(emailInputVal != ""){
      emailInput.nextElementSibling.classList.add('not-empty');
      emailInput.nextElementSibling.style.fontSize = '0.9rem';
    } else{
      emailInput.nextElementSibling.classList.remove('not-empty');
      emailInput.nextElementSibling.style.fontSize = '1rem';
    };
  });
};

function validatePhone(){
  const phoneInput = document.getElementById('phone-number');
  const phoneError = document.getElementById('phone-error');

  const phoneReg = /^[0-9()-]+$/;
  

  phoneInput.addEventListener('input', event => {
    let phoneInputVal = phoneInput.value;

    if(phoneReg.test(phoneInputVal)){
      phoneError.textContent = "";
    } else if(phoneInputVal == ""){
      phoneError.textContent = "";
    }else {
      phoneError.textContent = "Alphabetical and special chracters are not allowed.";
    };
  
    if(phoneInputVal != ""){
      phoneInput.nextElementSibling.classList.add('not-empty');
      phoneInput.nextElementSibling.style.fontSize = '0.9rem';
    } else{
      phoneInput.nextElementSibling.classList.remove('not-empty');
      phoneInput.nextElementSibling.style.fontSize = '1rem';
    };
  });
};

function validatePassword(){
  const pwInput = document.getElementById('password');
  const singleDigError = document.getElementById('single-digit-error');
  const lowercaseError = document.getElementById('lowercase-error');
  const uppercaseError = document.getElementById('uppercase-error');
  const specialError = document.getElementById('special-error');
  const minmaxError = document.getElementById('minmax-error');

  const digitReg = /(?=.*[0-9])+/;
  const lowCaseReg = /(?=.*[a-z])/;
  const upperCaseReg = /(?=.*[A-Z])/;
  const scCaseReg = /(?=.*\W)/;
  const minmaxReg = /.{8,16}/;

  const cpwInput = document.getElementById('confirm-password');
  const cpwError = document.getElementById('cpw-error');

  pwInput.addEventListener('input', () => {
  let pwInputVal = pwInput.value;
    
    if(digitReg.test(pwInputVal) || pwInputVal == ""){
      singleDigError.textContent = "";
    } else{
      singleDigError.textContent = "Password must have at least a single digit from 0-9.";
    };

    if(lowCaseReg.test(pwInputVal) || pwInputVal == ""){
      lowercaseError.textContent = "";
    } else{
      lowercaseError.textContent = "Password must have at least one lower case letter.";
    };

    if(upperCaseReg.test(pwInputVal) || pwInputVal == ""){
      uppercaseError.textContent = "";
    } else{
      uppercaseError.textContent = "Password must have at least one upper case letter.";
    };

    if(scCaseReg.test(pwInputVal) || pwInputVal == ""){
      specialError.textContent = "";
    } else{
      specialError.textContent = "Password must have at least one special character.";
    };

    if(minmaxReg.test(pwInputVal) || pwInputVal == ""){
      minmaxError.textContent = "";
    } else{
      minmaxError.textContent = "Password must be longer than 8 and less than 16 characters.";
    };

    if(pwInputVal != ""){
      pwInput.nextElementSibling.classList.add('not-empty');
      pwInput.nextElementSibling.style.fontSize = '0.9rem';
    } else{
      pwInput.nextElementSibling.classList.remove('not-empty');
      pwInput.nextElementSibling.style.fontSize = '1rem';
    };
  });

  cpwInput.addEventListener('input', () => {
    let cpwInputVal = cpwInput.value;
    const submitBtn = document.getElementById('submit');

    if(pwInput.value != cpwInputVal || cpwInputVal == ""){
      cpwError.textContent = "Password entered do not match. Please try again.";
      submitBtn.disabled = true;
    } else {
      submitBtn.disabled = false;
      cpwError.textContent = "";
    }

    if(cpwInputVal != ""){
      cpwInput.nextElementSibling.classList.add('not-empty');
      cpwInput.nextElementSibling.style.fontSize = '0.9rem';
    } else{
      cpwInput.nextElementSibling.classList.remove('not-empty');
      cpwInput.nextElementSibling.style.fontSize = '1rem';
    };
  });
};

function togglePasswordVisibility(){
  let passwordInput = document.getElementById('password');
  let status = document.getElementById('pwv');
  let currentStatus = status.innerText;

  if(currentStatus == "visibility"){
    passwordInput.setAttribute("type", "password");
    status.innerText = "visibility_off";
  }
  
  if(currentStatus == "visibility_off"){
    passwordInput.setAttribute("type", "text");
    status.innerText = "visibility";
  }
}

function showPlaceholder(element, message){
  element.addEventListener("focus", () => {
    element.placeholder = message;
  });
  
  element.addEventListener("focusout", () => {
    element.placeholder = "";
  });
};

function initializePlaceholder(){
  let fnInput = document.getElementById('first-name');
  let lnInput = document.getElementById('last-name');
  let emailInput = document.getElementById('email');
  let phoneInput = document.getElementById('phone-number');

  showPlaceholder(fnInput, "John");
  showPlaceholder(lnInput, "Doe");
  showPlaceholder(emailInput, "test@email.com");
  showPlaceholder(phoneInput, "00 0000 0000");
};

function setupEventListeners(){
  validateName();
  validateEmail();
  validatePhone();
  validatePassword();
};


window.addEventListener('load', () => {
  const submitBtn = document.getElementById('submit');
  submitBtn.disabled = true;
  setupEventListeners();
  initializePlaceholder();
});
