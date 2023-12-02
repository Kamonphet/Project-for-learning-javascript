// Random Notification
const message = document.querySelector('.btn')
const container = document.querySelector('.container')
const korkam = [
    'Hello',
    'Afternoon',
    'Good bye',
    'Good night',
    'I love U'
]
message.addEventListener('click',()=>createNoti())

function randomMessage(){
    return korkam[Math.floor(Math.random()*korkam.length)]
}
randomMessage()


function createNoti(){
    const noti = document.createElement('div')
    noti.classList.add('noti')
    noti.innerText=randomMessage()
    container.appendChild(noti)
    setTimeout(() => {
        noti.remove()
    }, 3000);
}