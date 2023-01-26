var hoverimg = document.getElementById('hoverimg');

const hoverImg = () => {
  hoverimg.style.display == 'flex' ? 
    hoverimg.style.display = 'none' :
    hoverimg.style.display = 'flex';
}

document.getElementById("changebtn").addEventListener("click", function(event){
  event.preventDefault()
});