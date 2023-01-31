const limit = 500;
var textComment = document.getElementById("textComment");
var textContent = document.getElementById("textContent");
var countComment = document.getElementById("countComment");
var countContent = document.getElementById("countContent");

function calculateLength(){
    countComment.innerText = textComment.value.length + "/" + "300";
    countContent.innerText = textContent.value.length + "/" + "500";
}

setInterval(calculateLength, 250);

 