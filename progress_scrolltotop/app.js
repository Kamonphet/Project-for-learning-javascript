// progress_scrolltotop
const progressbar = document.querySelector('.progress')
const material = document.querySelector('.material-symbols-outlined')
const rootel = document.documentElement
const nav = document.querySelector('header')
window.onscroll=()=>scrollProgress()
document.addEventListener('scroll',showBtn)
material.addEventListener('click',scolltototop)
window.addEventListener('scroll',stickynavbar)

function scrollProgress(){
    const page_high = document.documentElement.scrollHeight - document.documentElement.clientHeight
    const scroll_top = document.documentElement.scrollTop
    let progress = (scroll_top/page_high) * 100;
    progressbar.style.visibility='visible'
    progressbar.style.width=progress+'%'
}


function showBtn(){
    const total = rootel.scrollHeight - rootel.clientHeight
    console.log(rootel.scrollTop/total)
    if(rootel.scrollTop/total>0.3){
        material.classList.add("showbtn")
    }else{
        material.classList.remove("showbtn")
    }
}

function scolltototop(){
    rootel.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}

function stickynavbar(){
    if(window.scrollY>nav.offsetHeight+150){
        nav.classList.add('active')
    }else{
        nav.classList.remove('active')
    }
}