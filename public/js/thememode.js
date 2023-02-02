const icon = document.getElementById('mode-icon');
console.log(icon);
const switchColorTheme = () => {
  if (icon.classList.contains('ph-sun')) {
    icon.classList.replace('ph-sun', 'ph-moon');
    document.documentElement.style.setProperty('--gray-900', '#e1e1e6');
    document.documentElement.style.setProperty('--gray-800', '#29292e');
    document.documentElement.style.setProperty('--gray-700', '#fff');
    document.documentElement.style.setProperty('--gray-300', '#121214');
    document.documentElement.style.setProperty('--white', '#111');
  }
  else {
    icon.classList.replace('ph-moon', 'ph-sun');
    document.documentElement.style.setProperty('--gray-900', '#121214');
    document.documentElement.style.setProperty('--gray-800', '#202024');
    document.documentElement.style.setProperty('--gray-700', '#29292e');
    document.documentElement.style.setProperty('--gray-300', '#c4c4cc');
    document.documentElement.style.setProperty('--white', '#fff');
  }
}