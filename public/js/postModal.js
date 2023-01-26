const postModal = document.getElementById('postModal');
const main = document.getElementById('main');
const openPostModal = () => {
  var classList = postModal.classList;
  if(classList.contains('hidden')){
    classList.replace('hidden', 'show');
    main.classList.add('blur');
  }
  else {
    classList.replace('show', 'hidden')
    main.classList.remove('blur');
  }
}

main.addEventListener('click', () => {
  postModal.classList.contains('show') ?
    openPostModal() :
    ''
})