const drinkButton = document.getElementById('randomButton');
const image = document.getElementById('drinkImage');
const instructions = document.getElementById('instructions')


// reusable fetch function

function fetchData(url) {
    return fetch(url)
        .then(response => response.json())
}

fetchData('https://www.thecocktaildb.com/api/json/v1/1/random.php')
    .then(data => getInstructions(data.drinks[0].strInstructions))

fetchData('https://www.thecocktaildb.com/api/json/v1/1/random.php')
    .then(data => getImage(data.drinks[0].strDrinkThumb))

fetchData('https://www.thecocktaildb.com/api/json/v1/1/random.php')
    .then(data => getIngredients(data.drinks[0]))

// base functions

function getImage(data) {
    const html = `
        <img src='${data}' alt class="img-fluid">
        `;
    image.innerHTML = html;
}

function getInstructions(data) {
    const info = `
        <p>${data}</p>
    `;
    instructions.innerHTML = info;
}

function getIngredients(data) {
    const entries = Object.entries(data)
    for (let j = 36; j < 50; j++) {
        if (entries[j][1] === null) {
            break;
        }
        console.log(entries[j][1]);
    }
    for(let i = 21; i < 35; i++) {
        if(entries[i][1] === null) {
            break;
        }
        console.log(entries[i][1]);
    }
}