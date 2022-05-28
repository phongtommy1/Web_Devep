new Promise((resolve, reject) => {

})

const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        const rand = Math.random()
        setTimeout(() => {
            if (rand < .7) {
                resolve('Your fake data here')
            }
            reject('Reequest Error!')
        }, 1000)
    })
}

// fakeRequest('/dogs/1')
//     .then((data) => {
//         console.log("DOne with business")
//         console.log('data is:', data)
//     })
//     .catch((err) => {
//         console.log("OH no", err)
//     })

// //  create method and then call it 

// const deplayedColorChange = (color, delay) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             document.body.style.backgroundColor = color
//             resolve()
//         }, delay)

//     })
// }

// deplayedColorChange('red', 1000)
//     .then(() => deplayedColorChange('orange', 1000))
//     .then(() => deplayedColorChange('yellow', 1000))
//     .then(() => deplayedColorChange('pink', 1000))
//     .then(() => deplayedColorChange('blue', 1000))
//     .then(() => deplayedColorChange('black', 1000))
//     .then(() => deplayedColorChange('green', 1000))

// async function rainbow() {
//     // await waits for it to run and then itll work  bC async return a promise, dont need to create own promise 
//     await deplayedColorChange('red', 1000)
//     await deplayedColorChange('yellow', 1000)
//     // return resolved becasue return
//     return "all done"
// }

// rainbow().then(() => {
//     console.log("end of rainbow")
// })

async function makeTwoRequest() {
    // store if resolve 
    try {
        let data1 = await fakeRequest('page1')
        console.log(data1)
    } catch (e) {
        console.log("Caught an error!!")
        console.log("error:", e)
    }

}


// or

// async function printRainbow(){
//     await rainbow()
//     console.log("end of rainbow")
// }