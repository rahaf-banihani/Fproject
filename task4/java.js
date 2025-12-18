let btn = document.getElementById("mybtn");
let txt = document.getElementById("mybtn");

btn.addEventListener("click", function() {
    txt.innerText = "the text changed";
});


let box = document.getElementById("boxcolor");


box.addEventListener("mouseover", function() {
    box.style.backgroundColor = "blue";
});


box.addEventListener("mouseout", function() {
    box.style.backgroundColor = "pink";
});



