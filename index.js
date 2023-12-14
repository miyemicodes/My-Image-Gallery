const textBtn = document.getElementById("click-text");

console.log(textBtn);

textBtn.addEventListener("click", (e) =>{
  e.target.style.background = "black";
  e.target.style.color = "white";
})