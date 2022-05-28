const form = document.querySelector('form')

form.addEventListener('submit', async function (e) {
    e.preventDefault()
    const userSearch = form.elements.query.value
    const config = { param:  {q: userSearch}}
    const res = await axios.get(`https://api.tvmaze.com/search/shows`, config)
    makeImages(res.data)
    form.elements.query.value = " "
})

const makeImages = (shows) => {
    for (let result of shows) {
        const img = document.createElement("IMG")
        img.src = result.show.image.medium
        document.body.append(img)
    }
}