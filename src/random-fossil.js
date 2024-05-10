import axios from 'axios'
const button = document.querySelector('#get-random-fossil')
button.addEventListener('click', async () => {
    const response = await axios.get("/random-fossil.json")
    console.log(response)
    document.querySelector('#random-fossil-image').innerHTML = `<img src=${response.data.img}>`
    document.querySelector('#random-fossil-name').innerText = `${response.data.name}`
})