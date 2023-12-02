// Gallery Pop-up
const lub = document.querySelectorAll('.gallery img')
const full_img = document.querySelector('.full-img')
const pop_up = document.querySelector('.pop-up')
lub.forEach(img=>{
    img.addEventListener('click',()=>{
        const full = img.getAttribute('alt')
        const path = `foods-images/full/${full}.jpg`
        full_img.src=path
        pop_up.classList.add('open')
    })
})
pop_up.addEventListener('click',(e)=>{
    if (e.target==pop_up){
        pop_up.classList.remove('open')
    }
})