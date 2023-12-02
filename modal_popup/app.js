// modal
const openbtn = document.querySelector('.open-btn')
const closebtn = document.querySelector('.close-btn')
const modalcontainer = document.querySelector('.modal-container')

openbtn.addEventListener('click',()=>{
    modalcontainer.classList.add('show')
})

closebtn.addEventListener('click',()=>{
    modalcontainer.classList.remove('show')
})