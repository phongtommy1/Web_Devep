const button1 = document.querySelector('#P1')
const button2 = document.querySelector('#P2')
const button3 = document.querySelector('#P3')
const p1score = document.querySelector('#p1score')
const p2score = document.querySelector('#p2score')
const won = document.querySelector('#total');


let i = 0
let j = 0
let gamingOver = false
let winningScore = 5

button1.addEventListener('click', (evt) => {
    if (!gamingOver) {
        i += 1

        if (i === winningScore) {
            gamingOver = true
            p1score.classList.add('has-text-success')
            p2score.classList.add('has-text-danger')
            button1.disabled = true
            button2.disabled = true
        }
        p1score.textContent = i
    }

})

button2.addEventListener('click', (evt) => {
    if (!gamingOver) {
        j += 1

        if (j === winningScore) {
            gamingOver = true
            p2score.classList.add('has-text-success')
            p1score.classList.add('has-text-danger')
            button1.disabled = true
            button2.disabled = true
        }
        p2score.textContent = j
    }

})

button3.addEventListener('click', reset)

won.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    reset();
})

function reset() {
    gamingOver = false;
    i = 0
    j = 0
    p1score.textContent = 0
    button1.disabled = false
    button2.disabled = false
    p2score.textContent = 0
    p1score.classList.remove('has-text-success', 'has-text-danger')
    p2score.classList.remove('has-text-danger', 'has-text-success')


}