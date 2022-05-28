const v2 = document.querySelector("#v2")

v2.onclick = () => {
    console.log("you clicked me")
}

function scream() {
    console.log("ahhhhhhhhhh")
}

v2.onmouseenter = scream;

const v3 = document.querySelector("#v3")

v3.addEventListener('click', function () {
    alert('Clicked')
})

v3.addEventListener('click', scream, { once: true })