var value = true;

const icon = document.getElementById('mode-icon');

const switchColorTheme = () => {
  if (localStorage.getItem("value") == "false") {
    icon.classList.replace('ph-sun', 'ph-moon');
    document.documentElement.style.setProperty('--gray-900', '#e1e1e6');
    document.documentElement.style.setProperty('--gray-800', '#29292e');
    document.documentElement.style.setProperty('--gray-700', '#fff');
    document.documentElement.style.setProperty('--gray-300', '#121214');
    document.documentElement.style.setProperty('--white', '#111');
    document.documentElement.style.setProperty('--backimg', '#202024');
    localStorage.setItem("value", true);
  }
  else {
    icon.classList.replace('ph-moon', 'ph-sun');
    document.documentElement.style.setProperty('--gray-900', '#121214');
    document.documentElement.style.setProperty('--gray-800', '#202024');
    document.documentElement.style.setProperty('--gray-700', '#29292e');
    document.documentElement.style.setProperty('--gray-300', '#c4c4cc');
    document.documentElement.style.setProperty('--white', '#fff');
    document.documentElement.style.setProperty('--backimg', '#e1e1e6');
    localStorage.setItem("value", false);
  }
}

const setColorTheme = () => {
  if (localStorage.getItem("value") == "true") {
    icon.classList.replace('ph-sun', 'ph-moon');
    document.documentElement.style.setProperty('--gray-900', '#e1e1e6');
    document.documentElement.style.setProperty('--gray-800', '#29292e');
    document.documentElement.style.setProperty('--gray-700', '#fff');
    document.documentElement.style.setProperty('--gray-300', '#121214');
    document.documentElement.style.setProperty('--white', '#111');
    document.documentElement.style.setProperty('--backimg', '#202024');
  }
  else {
    icon.classList.replace('ph-moon', 'ph-sun');
    document.documentElement.style.setProperty('--gray-900', '#121214');
    document.documentElement.style.setProperty('--gray-800', '#202024');
    document.documentElement.style.setProperty('--gray-700', '#29292e');
    document.documentElement.style.setProperty('--gray-300', '#c4c4cc');
    document.documentElement.style.setProperty('--white', '#fff');
    document.documentElement.style.setProperty('--backimg', '#e1e1e6');
  }
}