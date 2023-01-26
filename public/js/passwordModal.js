const passwordModal = document.getElementById('passwordModal');
const main = document.getElementById('main');

const openPasswordModal = () => {
  console.log('meu deus meu senhor me ajuda por favor')
  if(passwordModal.classList.contains('show')){
    passwordModal.classList.replace('show', 'hidden');
    main.classList.remove('blur');
  }
  else {
    passwordModal.classList.replace('hidden', 'show')
    main.classList.add('blur');
  }
}