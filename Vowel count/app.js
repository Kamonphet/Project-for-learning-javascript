// vowel count
const count = document.querySelector('.count')
const input = document.querySelector('input')

input.addEventListener('keyup',()=>{
    let word = input.value.toLowerCase()
    let vowel = 0
    for(let i=0;i<word.length;i++){
        let letter = word[i]
        if(letter.match(/([a,e,i,o,u])/)){
            vowel++
        }
    }
    count.innerHTML=`${vowel}`
})