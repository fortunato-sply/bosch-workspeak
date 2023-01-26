let photo = document.getElementById('img');
let divimg = document.getElementById('divimg');
let file = document.getElementById('flImage');
divimg.addEventListener('click', () => {
  console.log('oi')
    file.click();
});

file.addEventListener('change', () => {
    if (file.files.length == 0) {
        return;
    }

    let reader = new FileReader();
    reader.readAsDataURL(file.files[0]);

    reader.onload = () => {
        photo.src = reader.result
    }
});