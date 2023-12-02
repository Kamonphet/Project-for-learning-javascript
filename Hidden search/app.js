// Hidden search
const btn = document.querySelector(".btn")
const icon=document.querySelector('.fa-solid')
const search = document.querySelector('.search')
const input = document.querySelector('.input')

btn.addEventListener('click',()=>{
    search.classList.toggle('active')
    icon.classList.toggle('fa-flip')
    input.focus()
})