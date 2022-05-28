
setTimeout(() => {
    document.body.style.backgroundColor = 'red'
    setTimeout(() => {
        document.body.style.backgroundColor = 'orange'
    }, 1000)
}, 1000)


const deplayedColorChange = (newColor, delay, doNext) => {
    setTimeout(() => {
        document.body.style.backgroundColor = newColor
        doNext && doNext()
    }, delay)
}

deplayedColorChange('red', 1000, () => {
    deplayedColorChange('blue', 1000, () => {
        deplayedColorChange('yellow', 1000, () => {
            deplayedColorChange('brown', 1000, () => {
            })
        })
    })
})

// anticipate if something will work or not

searchMovieAPI('amadeus', () => {
    saveToMyDB(movies, () => {
        // if it  work run this
    }, () => {
        // if it doesnt run this 
    })
}, () => {
    // if it doesnt work 
})


// fakeRequest using callback
const fakeRequestCallback = (url, success, failure) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
        if (delay > 4000) {
            failure('Connection timeout')
        } else {
            success(`Here is your fake data from ${url}`)
        }

    }, delay)
}


fakeRequestCallback('books.com/page1',
    function (response) {
        console.log("it worked")
        console.log(response)
        // keeps calling if successful very messy!!
        fakeRequestCallback('books.com/page2', {
            // parameter because failure has parameter 
            function(response) {
                console.log("it worked again")
                console.log(response)
            }
        }, function (err) {
            console.log("Error!!", err)
        })
    }, function (err) {
        console.log("Error!!", err)
    })

// using promises

fakeRequestPromise('yelp.com/api/coffee/page1')
    .then(() => {
        console.log("success")
        fakeRequestCallback('yelp.com/api/page2')
            .then(() => {
                console.log("success")
            }).catch(() => {

            })

    }).catch((err) => {
        console.log('error')
    });

// we can flatten this by using the return 

fakeRequestCallback('yelp.com/api/page1')
    .then((data) => {
        console.log("it worked")
        con

        return fakeRequestCallback('yelp.com/api/page2')
    })
    .then((data) => {
        console.log("it worked")
        con
        return fakeRequestCallback('yelp.com/api/page3')
    })
    .catch((data) => {
        console.log("oh noo!!")
        con
    })
