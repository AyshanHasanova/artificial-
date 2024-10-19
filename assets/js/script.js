const startBtn = document.querySelector(".start")
const navbarBtn =  document.querySelector(".salam")
const modal = document.querySelector(".modal")
const modalClose = document.querySelector(".modal-close")

const mobileMenyu = document.querySelector(".mobile-menyu")
const closeIcon = document.querySelector(".sagol")

// click dblclick mouseenter mouseleave
// Events DOM
navbarBtn.addEventListener("click", function() {
    mobileMenyu.classList.add("mobile-menyunu-acan")
})

closeIcon.addEventListener("click",function(){
    // DOM metodlari includes
    mobileMenyu.classList.remove("mobile-menyunu-acan")
})
startBtn.addEventListener("click",function(){
    modal.classList.add("modal-acan")
})
modalClose.addEventListener("click",function(){
    modal.classList.remove("modal-acan")
})
