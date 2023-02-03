const upicon = document.getElementById('up-icon');
const btn = document.getElementById('up-btn');

const changeIcon = (bool) => {
  bool ?
    upicon.classList.replace('ph-caret-up', 'ph-arrow-up') :
    upicon.classList.replace('ph-arrow-up', 'ph-caret-up');
}

const toggleButton = () => {
  if (document.documentElement.scrollTop > 400) {
    btn.style.display = 'flex';
    btn.classList.add('animate__fadeInUp');
  } else {
    btn.style.display = 'none';
    btn.classList.remove('animate__fadeInUp');
  }
}
document.addEventListener('scroll', toggleButton)