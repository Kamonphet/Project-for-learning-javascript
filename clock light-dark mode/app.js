// clock light-dark mode
let time = document.querySelector('.time')
let btntoggle = document.querySelector('.toggle')

function settime(){
    const timeel = new Date()
    var hh = timeel.getHours();
    var mm = timeel.getMinutes();
    var ss = timeel.getSeconds();
    time.innerHTML = `${hh<10 ? `0${hh}`: hh}:${mm<10 ? `0${mm}`: mm}:${ss<10 ? `0${ss}`: ss}`
};
settime()
setInterval(settime, 1000)

btntoggle.addEventListener('click',(e)=>{
    const html=document.querySelector('html')
    if (html.classList.contains("dark")) {
        html.classList.remove("dark")
        e.target.innerHTML='Dark mode'
    } else {
        html.classList.add("dark")
        e.target.innerHTML="Light mode"
    }
})