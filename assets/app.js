const drinkButton = document.getElementById('randomButton');
const image = document.getElementById('drinkImage');
const instructions = document.getElementById('instructions');
const ingredientData = document.getElementById('ingredientData');


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
    const entries = Object.entries(data);
    let ing = `<tr>`
    for(let i = 21; i < 35; i++) {
        if(entries[i][1] === null) {
            break;
        }
    ing += `<td>${entries[i][1]}</td>
        </tr>`;
    console.log(entries[i][1])
    }
    ingredientData.innerHTML = ing;
}