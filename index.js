const textBtn = document.getElementById("click-text");

console.log(textBtn);

textBtn.addEventListener("click", (e) =>{
  textBtn.style.background = "black";
  textBtn.style.color = "white";
})