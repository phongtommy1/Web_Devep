// const req = new XMLHttpRequest();

const { default: axios } = require("axios")

// req.onload = function () {
//     console.log("all done")
//     const JSONData = JSON.parse(this.responseText)
//     console.log(JSONData.ticker.price)
// }

// req.onerror = function () {
//     console.log("broken")
//     console.log(this)
// }

// req.open('GET', 'https://api.cryptonator.com/api/ticker/btc-usd')
// req.send()

// fetch('https://api.cryptonator.com/api/ticker/btc-usd')
//     .then((res) => {
//         console.log("REsponse", res)
//         return res.json()
//     })
//     .then(data => {
//         console.log("data parsed")
//         console.log(data.ticker.price)
//     })
//     .catch(e => {
//         console.log("oh no!!", e)
//     })

const fetchBitcoinPrice = async () => {
    try {
        const res = await fetch("https://api.cryptonator.com/api/ticker/btc-usd")
        const data = await res.json();
        console.log(data.ticker.price)
    }
    catch (e) {
        console.log("something went wrong")
    }

}


// alrdy parse for us 
axios.get('https://api.cryptonator.com/api/ticker/btc-usd')
    .then(res => {
        console.log(res.data.ticker.price)
    })
    .catch(err => {
        console.log("error", err)
    })


const req = async () => {
    try {
        const res = await axios.get('https://api.cryptonator.com/api/ticker/btc-usd')
        console.log(res.data.ticker.price)
    } catch (error) {
        console.log("error", err)

    }
}

const button = document.querySelector('button')
const jokes = document.querySelector('#list')

const addNewJoke = async () => {
    const jokeText = await getDadJoke()
    const newLI = document.createElement('LI')
    newLI.append(jokeText)
    jokes.append(newLI)
}
const getDadJoke = async () => {
    try {
        // getting for  json 
        const headers = { headers: { Accept: 'application/json' } }
        const res = await axios.get(' https://icanhazdadjoke.com/', headers)
        // console.log(res)
        return res.data.joke
    } catch (error) {
        return ("no jokes  available! soryy")
    }

}

button.addEventListener('click', addNewJoke)
