var login = document.getElementById('login');
var signup = document.getElementById('signup');
var password1 = document.getElementById('iconPassword1');
var password2 = document.getElementById('iconPassword2');
var inputPassword1 = document.getElementById("password");
var inputPassword2 = document.getElementById("password-s");

const switchForms = () => {
  if(login.classList.contains('show')){
    login.classList.replace('show', 'hidden');
    signup.classList.replace('hidden', 'show');
  } 
  else {
    login.classList.replace('hidden', 'show');
    signup.classList.replace('show', 'hidden');
  }
}

const showPassword1 = () => {
  if(password1.classList.contains('ph-eye')){
    password1.classList.replace('ph-eye', 'ph-eye-slash');
    inputPassword1.type = "password";
  } 
  else {
    password1.classList.replace('ph-eye-slash', 'ph-eye');
    inputPassword1.type = "text";
  }
}

const showPassword2 = () => {
  if(password2.classList.contains('ph-eye')){
    password2.classList.replace('ph-eye', 'ph-eye-slash');
    inputPassword2.type = "password";
  } 
  else {
    password2.classList.replace('ph-eye-slash', 'ph-eye');
    inputPassword2.type = "text";
  }
}