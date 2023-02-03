const upicon = document.getElementById('up-icon');
const btn = document.getElementById('up-btn');

const changeIcon = (bool) => {
  bool ?
    upicon.classList.replace('ph-caret-up', 'ph-arrow-up') :
    upicon.classList.replace('ph-arrow-up', 'ph-caret-up');
}

const body = document.getElementById('head');
document.addEventListener('scroll', () => {
  console.log(body.scrollTop());
})