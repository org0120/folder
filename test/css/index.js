let toggle = document.querySelector(".switch")
let tap = document.querySelectorAll(".switch ion-icon");
let list = document.querySelector(".container")

let theme = document.querySelector(".theme")
let iconTheme = document.querySelectorAll(".theme ion-icon")
let article = document.querySelector("article")


toggle.addEventListener('click' , function(){
    this.classList.toggle("change")
    list.classList.toggle("active");
    article.classList.toggle("nw")
})

theme.addEventListener('click',function(){
    this.classList.toggle("move")
    document.body.classList.toggle("dark")
})

