const hambtn = document.querySelector("#hamBTN")
const miniMenu = document.querySelector(".menu_active_back")

hambtn.addEventListener("click", function(){
    hambtn.classList.toggle("open")
    miniMenu.classList.toggle("trn0")
})