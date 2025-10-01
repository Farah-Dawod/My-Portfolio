
let navbar = document.querySelector(".nav-links")
let bars =document.querySelector(".fa-bars")
let Xmark =document.querySelector(".fa-xmark ")
let humburger =document.querySelector(".humburgre")
 humburger.addEventListener( "click",() =>{
    navbar.classList.toggle("active")
    bars.classList.toggle("active")
    Xmark.classList.toggle("active")
 })

