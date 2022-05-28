const input = document.querySelector('input')
const h1 = document.querySelector('h1')

input.addEventListener('change', (evt) => {
    console.log("input event")
    h1.innerText = input.value
})

