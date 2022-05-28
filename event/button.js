const makeRandColor = () => {
    const r = Math.floor(Math.random() * 255)
    const g = Math.floor(Math.random() * 255)
    const b = Math.floor(Math.random() * 255)
    return `rgb(${r}, ${g}, ${b})`
}

// can simplify by using another function with the keyword this 
const buttons = document.querySelectorAll('button')

for (let button of buttons) {
    button.addEventListener('click', colorize)
}

const h1s = document.querySelectorAll('h1')

for (let h1 of h1s) {
    h1.addEventListener('click', colorize)
}

function colorize() {
    this.style.backgroundColor = makeRandColor()
    this.style.color = makeRandColor()
}

const input = document.querySelector('input');

input.addEventListener('keydown', (evt) => {
    switch (evt.code) {
        case 'ArrowUp':
            console.log("up");
            break;
        default:
            console.log("ignored")
            break;


    }

})