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


// base functions

function getImage(data) {
    const html = `
        <img src='${data}' alt class="img-fluid">
        `;
    image.innerHTML = html;
}

function getInstructions (data) {
    console.log(data);
    const info = `
        <p>${data}</p>
    `;
    instructions.innerHTML = info;
}