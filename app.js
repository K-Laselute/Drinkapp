const drinkButton = document.getElementById('randomButton');
const image = document.getElementById('drinkImage');
const instructions = document.getElementById('instructions');
const ingredientData = document.getElementById('ingredientData');
const drinkName = document.getElementById('name');

drinkButton.addEventListener('click', () => {
    fetchData('https://www.thecocktaildb.com/api/json/v1/1/random.php')
    .then(data => {
        getInstructions(data.drinks[0].strInstructions);
        getImage(data.drinks[0].strDrinkThumb);
        getIngredients(data.drinks[0]);
        getName(data.drinks[0].strDrink)
    })
    hideShow();
    drinkButton.innerText = "Something else";
})


// reusable fetch function

function fetchData(url) {
    return fetch(url)
        .then(response => response.json())
}

// base functions


function hideShow() {
    let table = document.getElementsByTagName('table');
    let article = document.getElementsByTagName('article');
    table[0].classList.remove('d-none');
    article[0].classList.remove('d-none');
}

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
    let tableHTML = `<tr>`;
    let ing = [];
    let mea = [];
    for (let i = 21; i < 35; i++) {
        if (entries[i][1] === null || entries[i][1] === "") {
            break;
        }
        ing.push(entries[i][1])
    }
    for(let j = 36; j < 50; j++) {
        if(entries[j][1] === null || entries[j][1] === "") {
            break;
        }
    mea.push(entries[j][1]);
    }
    for(let k = 0; k < ing.length; k++) {
        tableHTML += `<td>${mea[k]} ${ing[k]}</td>
        </tr>`;
    }
    ingredientData.innerHTML = tableHTML;
    console.log(entries);
}