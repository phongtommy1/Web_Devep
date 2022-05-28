
const list = document.querySelector('#container')
const btn = document.querySelector('button')

const addRecipe = async () => {
    const recipe = await getRecipe()
    console.log(recipe)
    const newLi = document.createElement('LI')
    const newImage = document.createElement('img')
    newImage.src = recipe
    newLi.append(newImage)
    list.append(newLi)


}

const getRecipe = async () => {
    try {
        const res = await axios.get('https://api.edamam.com/api/recipes/v2?q=chicken&app_key=6a79531091b497011ca9bdb51c37db20&_cont=CHcVQBtNNQphDmgVQntAEX4BYldtBAAGRmxGC2ERYVJ2BwoVX3cVBWQSY1EhBQcGEmNHVmMTYFEgDQQCFTNJBGQUMQZxVhFqX3cWQT1OcV9xBB8VADQWVhFCPwoxXVZEITQeVDcBaR4-SQ%3D%3D&type=public&app_id=a90544bc')
        console.log(res)
        return (res.data.hits[0].recipe.image)
    } catch (error) {
        return ("broken")
    }


}

btn.addEventListener('click', addRecipe)
