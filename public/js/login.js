var login = document.getElementById('login');
var signup = document.getElementById('signup');

const switchForms = () => {
  console.log(login, signup)
  if(login.classList.contains('show')){
    login.classList.replace('show', 'hidden');
    signup.classList.replace('hidden', 'show');
  } 
  else {
    login.classList.replace('hidden', 'show');
    signup.classList.replace('show', 'hidden');
  }
}