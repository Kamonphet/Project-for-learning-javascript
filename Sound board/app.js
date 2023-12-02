// Sound board
const sound = ['Effect1','Effect2','Effect3','Effect4','Effect5']
sound.forEach(sounds=>{
    const btn = document.createElement('button')
    btn.classList.add('btn')
    btn.innerText=sounds
    btn.addEventListener('click',()=>{
        stopsound()
        document.getElementById(sounds).play()
    })
    document.getElementById('controller').appendChild(btn)
})

function stopsound(){
    sound.forEach(sounds=>{
        const audioElement = document.getElementById(sounds);
        audioElement.pause()
        audioElement.currentTime = 0
    })
}