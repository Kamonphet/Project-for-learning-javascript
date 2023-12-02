// Country API
const container = document.getElementById('container')
const getCountry=async()=>{
    const url ='https://restcountries.com/v2/all'
    const res =  await fetch(url)
    const item = await res.json()
    item.forEach(element => {
        createCard(element)
        // console.log('ชื่อประเทศ = ',element.name,'เมืองหลวง = ',element.capital)
    });
}

const createCard=(data)=>{
    const card = document.createElement('div')
    card.classList.add('country')
    const content=`
        <div class='img-container'>
            <img src='${data.flag}'/>
        </div>
        <div class='info'>
            <h3 class='name'>${data.name}</h3>
            <small>เมืองหลวง : <span>${data.capital}</span></small>
        </div>
    `

    card.innerHTML=content
    container.appendChild(card)
}

getCountry();