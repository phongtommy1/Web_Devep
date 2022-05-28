const sing = async () => {
    throw "oh no, problem!!"
    return 'LA LA LAL LA'
}

sing()
    .then((data) => {
        console.log("Promise Resolved with: ", data)
    })
    .catch(err => {
        console.log("oh noo")
        console.log(err)
    })

const login = async (username, password) => {
    if (!username || !password) {
        throw "missing credential"
    }
    if (password === "nice") return "welcome"
    throw 'Invalid password'
}

login('asdasdasdadas')
    // msg is what the return is: 'welcome'
    .then((msg) => {
        console.log("LOGIN IN")
        console.log(msg)
    })
    .catch((err) => {
        console.log("error!")
        console.log(err)
    })