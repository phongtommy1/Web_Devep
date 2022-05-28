const tweetform = document.querySelector("#tweetform")
const container = document.querySelector('#tweet')
const lis = document.querySelectorAll('li')

// for (let li of lis) {
//     li.addEventListener('click', (evt) => {
//         li.remove()
//     })
// }

tweetform.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const userInput = document.querySelectorAll('input')[0];
    const formInput = document.querySelectorAll('input')[1];


    addTweet(userInput.value, formInput.value)
    // tweetform.elemnts.username.value

    userInput.value = " "
    formInput.value = " "
    // prevent behavior

})

function addTweet(userInput, formInput) {
    const newTweet = document.createElement('li')
    const bold = document.createElement('b')

    bold.append('userInput')
    newTweet.append(bold)
    newTweet.append(`- ${formInput}`)
    container.appendChild(newTweet)
}

container.addEventListener('click', (evt) => {
    // adds to make sure it is a n li before removing
    evt.target.nodeName === 'LI' && evt.target.remove()
})
