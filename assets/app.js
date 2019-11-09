const drinkButton = document.getElementById('randomButton');
const image = document.getElementById('drinkImage');
const instructions = document.getElementById('instructions');
const ingredientData = document.getElementById('ingredientData');
const drinkName = document.getElementById('name');


// reusable fetch function

function fetchData(url) {
    return fetch(url)
        .then(response => response.json())
}

fetchData('https://www.thecocktaildb.com/api/json/v1/1/random.php')
    .then(data => {
        getInstructions(data.drinks[0].strInstructions);
        getImage(data.drinks[0].strDrinkThumb);
        getIngredients(data.drinks[0]);
        getName(data.drinks[0].strDrink)
    })

// base functions

function getName(data) {
    const name = `
        <h2>${data}</h2>    
    `;
    drinkName.innerHTML = name;
}

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
    let mea = [];
    for(let j = 36; j < 50; j++) {
        if(entries[j][1] === null) {
            break;
        }
    mea.push(entries[j][1]);
    console.log(mea);
}
    for(let i = 21; i < 35; i++) {
        if(entries[i][1] === null) {
            break;
        }
    ing += `<td>${entries[i][1]}</td>
        </tr>`;
    console.log(entries[i][1])
    }
    ingredientData.innerHTML = ing;
    console.log(entries);
}